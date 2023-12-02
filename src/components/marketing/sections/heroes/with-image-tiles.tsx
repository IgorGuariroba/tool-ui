import React from 'react'
import Header from "@/components/marketing/header/header";
import Main from "@/components/marketing/main/main";

interface NavProps {
    href: string
    children: React.ReactNode
}

interface LogoProps {
    imageUrl: string
    imageAlt: string
    children: React.ReactNode
    urlLog?: string
}


interface WithImageTilesProps {
    navigation: NavProps[]
    logo: LogoProps
}

export default function WithImageTiles({navigation, logo}: WithImageTilesProps) {
    return (
        <div className="bg-white">
            <Header
                navigation={navigation}
                logo={logo}
                login={
                    {
                        children: 'Login ->',
                        href: 'login'
                    }
                }
            />
            <Main/>
        </div>
    )
}
