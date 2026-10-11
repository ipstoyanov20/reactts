import { type PropsWithChildren } from "react"

interface ImageProps {
    src: string,
    alt: string
}

interface Image{
    image:ImageProps
}
type ImagePropsWithChildren = PropsWithChildren<Image>
export default function Header({ image, children }: ImagePropsWithChildren) {
    return (
        <div>

            {children}
            <img {...image}/>
        </div>
    )
}