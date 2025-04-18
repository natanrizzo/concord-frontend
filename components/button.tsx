import { ReactNode } from "react";

type ButtonProps = {
    type?: "primary" | "secondary" | "terciary" | "disabled";
    size?: "sm" | "md" | "lg" | "xl"
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    onChange?: () => void;
}

const typeStyles: Record<NonNullable<ButtonProps["type"]>, string> = {
    primary: "text-[var(--primary)] border-[var(--primary)] bg-[var(--foreground)] hover:bg-[var(--hover-primary)] backdrop-blur-sm hover:text-[var(--text)]",
    secondary: "text-[var(--text)] border-[var(--primary)] bg-[var(--primary)] hover:bg-[var(--background)] hover:text-[var(--primary)]",
    terciary: "border-transparent text-[var(--text)] bg-transparent hover:text-[var(--primary)]",
    disabled: "",
}

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-9 px-3",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8",
    xl: "",
}

const Button = ({
    type = "primary",
    size = "md",
    className,
    children,
    onClick,
    onChange,
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center border rounded-md text-sm font-medium transition-colors cursor-pointer";
    const btnClassName = `${baseStyles} ${typeStyles[type]} ${sizeStyles[size]} ${className}`;

    return (
        <button 
            className={btnClassName}
            onClick={onClick} 
            onChange={onChange}
        >
            { children }
        </button>
    )
}

export default Button;