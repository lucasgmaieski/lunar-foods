type Props = {
    message?: string
}
export const ErrorMessage= ({ message}: Props) => {
    return (
        <p className={`text-lg pl-2 font-normal dark:text-red-300 text-red-700`}>
            {message}
        </p>
    )
} 