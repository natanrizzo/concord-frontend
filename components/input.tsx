import { ReactNode } from "react"

type InputProps = {
    type?: "primary" | "secondary" | "file" | "disabled";
    size?: "sm" | "md" | "lg";
    className?: string;
    placeholder?: string;
    children?: ReactNode;
}

const typeStyles : Record<NonNullable<InputProps["type"]>, string> = {
    primary: "",
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
    className,
    placeholder,
    children,
}: InputProps) => {
    const baseStyles = "";
    const inputClassName = `${baseStyles} ${typeStyles[type]} ${sizeStyles[size]} ${className}`;

    return (
        <input
            className={inputClassName}
            placeholder={placeholder}
        >
        { children }
        </input>
    )
}

export default Input;