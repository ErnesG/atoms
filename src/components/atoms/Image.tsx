import { useState } from "react";

interface ImageProps {
    src: string;
    alt: string;
    width: number|string;
    height: number|string;
    className?:string
}

export function Image({ src, alt , width, height, className}: ImageProps) {
    const [error, setError] = useState(false);
    return (
        <img
            src={error ? "fallback-image.png" : src}
            alt={alt}
            width={width}
            height={height}
            className={`object-cover ${className || ""}`}
            loading="lazy"
            onError={()=>setError(true)}
        />
    )
}