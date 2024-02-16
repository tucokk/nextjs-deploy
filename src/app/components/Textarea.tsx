import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

interface TextAreaProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea(props: TextAreaProps) {

    return (
        <textarea
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            className="
                p-1 w-full m-0 px-2 min-h-[32px] border border-slate-300  
                rounded-md text-base placeholder-slate-400  
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500  
                focus:invalid:border-red-500 focus:invalid:ring-red-500
                disabled:bg-slate-50 disabled:text-slate-500 
                disabled:border-slate-200  invalid:border-red-500 
                invalid:text-red-600 transition-all" 
        />
    )
    
}
