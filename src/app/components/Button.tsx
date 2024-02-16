import { PropsWithChildren } from "react";

interface ButtonProps {
    onClick: () => void;
    onChange?: () => void;
    type?: 'primary' | 'outline' | 'secondary_outline';
}

export default function Button(props: PropsWithChildren<ButtonProps>) {

    const styles = {
        primary: ` 
            p-2 w-full h-full rounded-md flex justify-center items-center hover:opacity-90 
            focus:outline-none focus:opacity-90 disabled:opacity-50 gap-1  
            m-0 text-base shadow-md border border-blue-500 bg-blue-500 text-white transition-all`,
        outline: `
            p-2 w-full h-full rounded-md flex justify-center items-center hover:opacity-90 
            focus:outline-none focus:opacity-90 disabled:opacity-50 gap-1 hover:bg-gray-50
            m-0 text-base border border-blue-500 text-blue-500 transition-all`,
        secondary_outline: `
            p-2 w-full h-full rounded-md flex justify-center items-center hover:opacity-90 
            focus:outline-none focus:opacity-90 disabled:opacity-50 gap-1 hover:bg-gray-50
            m-0 text-base border border-gray-500 text-gray-800 transition-all`,
    }

    const buttonClass = props.type ? styles[props.type] : styles['primary'];
    
    return (
        <button
            className={buttonClass}
            onClick={props.onClick}
            onChange={props.onChange}
        >
            {props.children}
        </button>
    )
    
}