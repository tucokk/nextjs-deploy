import { PropsWithChildren } from "react";

interface CardProps {
    className?: string;
}

export default function Card(props: PropsWithChildren<CardProps>) {
    

    return(
        <div className={`
            border border-solid border-gray-300 p-3 rounded-md
            ${props.className}
        `}>
            {props.children}
        </div>
    )
}