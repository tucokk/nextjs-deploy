import { Check } from "lucide-react"
import { PropsWithChildren } from "react"

interface ChecklistProps {}

export function Checklist(props: PropsWithChildren<ChecklistProps>) {
    return (
        <ul className="w-full">
            {props.children}
        </ul>
    )
}

interface ChecklistItemProps {}

export function ChecklistItem(props: PropsWithChildren<ChecklistItemProps>) {
    return (
        <li className="flex flex-row items-center gap-2">
            <strong>
                <Check width={15} height={15}/>
            </strong>
            {props.children}
        </li>
    )
}