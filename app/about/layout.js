import React from 'react'

export default function AboutLayout({ children }) {
    return (
        <div>
            <h1>This is about page header</h1>
            {children}
            <h1>This is about page footer</h1>
        </div>
    )
}
