import React from "react";

interface HeadingProps {
    text: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string
}

export default function Heading({text, level=1, className}: HeadingProps) {
    const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
    return <Tag className={`text-${level}xl font-bold ${className}`}>{text}</Tag>
}