export function useLoginStatus() {
    return localStorage.getItem('token')
}