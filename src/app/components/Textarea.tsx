import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

interface TextAreaProps {
    placeholder?: string;
    editor?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea(props: TextAreaProps) {

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    if (props.editor) {
        return (
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                init={{
                    height: 500,
                    plugins: [
                        "table a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template tinycomments tinydrive tinymcespellchecker typography visualblocks visualchars wordcount",
                    ],
                    menubar: 'file edit insert view format table tools help',
                    branding:false,
                    promotion: false,
                    toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | indent outdent | wordcount',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                apiKey="8ha5ukk9sqaw83zyymlguq7muq0jwdq6u3o08lqipnvkljpa"
            />
        )
    } else {
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
}
