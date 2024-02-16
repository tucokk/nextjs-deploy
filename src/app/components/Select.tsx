import { PropsWithChildren } from "react";

interface SelectProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClick?: () => void;
}

export function Select(props: PropsWithChildren<SelectProps>) {
    return (
        <select
            className="block w-full px-2 py-1 border border-gray-200 rounded-md 
            focus:border-blue-500 focus:ring-1 min-h-[32px] text-base focus:outline-none
            shadow-none" 
            onChange={props.onChange}
            onClick={props.onClick}
        >
            {props.children}
        </select>
    )
}


interface SelectOptionProps {
    value: string;
}

export function SelectOption(props: PropsWithChildren<SelectOptionProps>) {
    return (
        <option value={props.value}>{props.children}</option>
    )
}