export const getCurrentAge = (date: string) => {
    return new Date().getFullYear() - new Date(date).getFullYear()
}