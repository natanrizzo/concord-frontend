import { ReactNode } from "react";

type AfterTextProps = {
    children: ReactNode;
}

const AfterText = ({ 
    children
}: AfterTextProps) => {
    return (
        <p 
            className="text-sm text-[var(--light-text))]"
        >
            { children }
        </p>
    )
}

export default AfterText;