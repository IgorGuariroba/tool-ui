import React from "react";

interface LogoProps {
    imageUrl: string
    imageAlt: string
    children: React.ReactNode
    urlLog?: string
}

export default function Logo({children, imageUrl, imageAlt, urlLog = '#'}:LogoProps) {
    return (
        <a href={urlLog} className="-m-1.5 p-1.5">
            <span className="sr-only">{children}</span>
            <img
                className="h-8 w-auto"
                src={imageUrl}
                alt={imageAlt}
            />
        </a>
    )
}