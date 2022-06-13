import { useEffect, useState } from "react"

export function useLoginStatus() {
    const [state, setState] = useState<string | undefined | null>('')


    useEffect(() => {
        setState(localStorage.getItem('token'))
    }, [state])

    useEffect(() => {
        if (!state) return
        localStorage.setItem('token', state)
    }, [state])


    return {
        loginState: state, setLoginState: (value: string | undefined) => {
            setState(value)
        }, removeLoginState: () => {
            localStorage.removeItem('token')
            setState(null)
        }
    }
}