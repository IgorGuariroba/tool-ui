"use client"
import WithImageTiles from "@/components/marketing/sections/heroes/with-image-tiles";

export default function Home() {
    return (
        <WithImageTiles
            logo={
                {
                    imageUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
                    imageAlt: 'Logo do site',
                    children: 'teste',
                    urlLog: 'page'
                }
            }
            navigation={
                [
                    {href: 'product', children: 'Produto'},
                    {href: 'features', children: 'Características'},
                    {href: 'marketplace', children: 'Mercado'},
                    {href: 'company', children: 'Empresa'},
                ]
            }
        />
    )
}
