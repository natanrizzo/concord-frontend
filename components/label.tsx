import { ReactNode } from "react";

type LabelProps = {
    children: ReactNode;
}

const Label = ({
    children
}: LabelProps) => {
    return (
        <label
            className="text-[var(--text)] text-md font-medium"
        >
            { children }
        </label>
    )
}

export default Label;