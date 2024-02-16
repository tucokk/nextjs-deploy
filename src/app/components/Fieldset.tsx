import { PropsWithChildren } from "react";

interface FieldsetProps {
    label: string;
    size?: string;
}

export default function Fieldset(props: PropsWithChildren<FieldsetProps>) {
    return (
        <fieldset className="w-full h-full border rounded-md border-solid border-gray-300 p-3">
            <legend className={
               `${props.size == 'sm' ? 'text-sm' : 'text-base'} 
                px-1`}
            >
                {props.label}
            </legend>
            <div className="p-1">
                {props.children}
            </div>
        </fieldset>
    )
}

