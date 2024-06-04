export const formatCardNumber = (value: string): string => {
    // Remove todos os caracteres que não são dígitos
    const cleanValue = value.replace(/\D/g, '');
    // Formata o valor em grupos de quatro dígitos
    return cleanValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  export const formatExpiryDate = (value: string) => {
    const cleanValue = value.replace(/\D/g, '');
    if (cleanValue.length <= 2) {
      return cleanValue;
    }
    return cleanValue.slice(0, 2) + '/' + cleanValue.slice(2, 4);
  };

  export const formatCVV = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 3);
  };