import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useState } from "react";
import { useMainContext } from "./useContext";
import { formatCVV, formatCardNumber, formatExpiryDate } from "../utils/format";

const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

const expiryDateSchema = z.string().regex(expiryDateRegex, { message: "Formato inválido de data de expiração (MM/AA)" }).refine(value => {
    const [month, year] = value.split('/').map(Number);
    const currentYear = new Date().getFullYear() % 100; 
    const currentMonth = new Date().getMonth() + 1;
  
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }
    return true;
  }, {
    message: "Data de expiração não pode estar no passado",
});

const paymentFormSchema = z.object({
    cardNumber: z.string().min(19, { message: "O número do cartão deve ter 16 dígitos" }).regex(cardNumberRegex, "O numero do cartão deve ter pelo menos 16 caracteres"),
    expiryDate: expiryDateSchema,
    cvv: z.string().length(3, { message: "CVV deve ter 3 dígitos" }).regex(/^\d{3}$/, { message: "CVV deve conter apenas números" })
})

type FormProps = z.infer<typeof paymentFormSchema>;

export function usePaymentForm () {
    const { clearCart  } = useMainContext();
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

    const { handleSubmit, register, formState: { errors}, reset, setValue } = useForm<FormProps>({mode: 'all', reValidateMode: 'onBlur', resolver: zodResolver(paymentFormSchema)});
    const handleForm = async (formData : FormProps) => {
        // Simular transação de pagamento
        setLoading(true);
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
            setTimeout(() => {
                setPaymentStatus('success');
                setLoading(false);
                reset();
            }, 1000);
            setTimeout(() => {
                clearCart();
            }, 4000);
        } else {
            setTimeout(() => {
                setPaymentStatus('failure');
                setLoading(false);
            }, 2000);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, id } = e.target;
        if(id === 'cardNumber') {
            setValue('cardNumber', formatCardNumber(value), { shouldValidate: true })
        }
        if(id === 'expiryDate') {
            setValue('expiryDate', formatExpiryDate(value), { shouldValidate: true });
        }
        if(id === 'cvv') {
            setValue('cvv', formatCVV(value), { shouldValidate: true });
        }
    };

    return {
        handleForm,
        handleSubmit,
        register, 
        errors,
        loading,
        handleInputChange,
        paymentStatus, 
        setPaymentStatus
    }
}