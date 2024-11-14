'use client';
import {useEffect} from "react";

async function fetchUser() {
    if (typeof window !== 'undefined') {
        const {worker} = await import('@/mocks/browser')
        await worker.start()
        const response = await fetch('https://example.com/user')
        const user = await response.json()
        console.log(user)
    }
}

export const TestMswBrowser = () => {
    useEffect(() => {
            fetchUser()
        }, []
    )
    return null
}