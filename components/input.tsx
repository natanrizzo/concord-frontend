import { ReactNode } from "react"
import AfterText from "./afterText";
import Label from "./label";

type InputProps = {
    type?: "primary" | "secondary" | "file" | "disabled";
    size?: "sm" | "md" | "lg";
    label?: string;
    longField?: boolean;
    className?: string;
    placeholder?: string;
    children?: ReactNode;
    afterText?: string;
    value?: string;
    onChange?: () => void;
}

const typeStyles : Record<NonNullable<InputProps["type"]>, string> = {
    primary: "bg-[var(--secondary)] border-[var(--secondary-border)] focus-visible:ring-[var(--primary)] focus-visible:outline-none focus-visible:ring-1 text-[var(--text)]",
    secondary: "",
    file: "",
    disabled: "",
}

const sizeStyles : Record<NonNullable<InputProps["size"]>, string> = {
    sm: "h-9 px-3",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8",
}

const Input = ({
    type = "primary",
    size = "md",
    label,
    className,
    placeholder,
    onChange,
    longField = false,
    value,
    afterText,
    children,
}: InputProps) => {
    const baseStyles = "flex w-full rounded-md border placeholder:font-light file:border-0 file:bg-transparent file:text-sm file:font-medium ring-offset-[var(--background)]";
    const inputClassName = `${baseStyles} ${typeStyles[type]} ${sizeStyles[size]} ${className}`;

    return (
        <div className="flex flex-col gap-2.5">
            {
                label &&
                <Label>
                    {label}
                </Label>
            }
            {
                longField 
                ? <textarea
                    className={`resize-none ${inputClassName}`}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                >
                    { children }
                </textarea>
                :<input
                    className={inputClassName}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                >
                    { children }
                </input>
            }
            {
                afterText &&
                <AfterText>{afterText}</AfterText>
            }
        </div>
    )
}

export default Input;