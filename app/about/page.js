'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function About() {

    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.back()}>Go Back</button>
            <div>This is the about page.</div>
        </div>
    )
}
