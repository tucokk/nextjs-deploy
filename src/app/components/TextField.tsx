import React from "react";

interface TextFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    number?: boolean;
}

export default function TextField(props: TextFieldProps) {

    return (
        <input
            type={props.number ? "number" : "text"}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            className="
                w-full m-0 px-2 min-h-[32px] border border-slate-300  
                rounded-md text-base placeholder-slate-400  
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500  
                focus:invalid:border-red-500 focus:invalid:ring-red-500
                disabled:bg-slate-50 disabled:text-slate-500 
                disabled:border-slate-200  invalid:border-red-500 
                invalid:text-red-600 transition-all" 
        />
    )
}
