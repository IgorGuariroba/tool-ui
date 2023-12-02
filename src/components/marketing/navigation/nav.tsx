import React, {useState} from "react";
import Logo from "@/components/marketing/logo/logo";
import {Bars3Icon} from "@heroicons/react/24/outline";

interface NavProps {
    href: string
    children: React.ReactNode
}

interface LogButton {
    children: React.ReactNode
    href: string
}

interface LogoProps {
    imageUrl: string
    imageAlt: string
    children: React.ReactNode
    urlLog?: string
}

interface Navigation {
    navigation: NavProps[]
    logo: LogoProps
    login:  LogButton
}

export default function Nav({navigation, logo, login}: Navigation) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Logo  imageAlt={logo.imageAlt} imageUrl={logo.imageUrl} urlLog={logo.urlLog}>{logo.children}</Logo>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <a key={item.href} href={item.href}
                       className="text-sm font-semibold leading-6 text-gray-900">
                        {item.children}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href={login.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {login.children}
                </a>
            </div>
        </nav>
    )
}