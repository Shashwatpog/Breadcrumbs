import React from "react";

interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type, disabled, onChange }) => {
    return (
        <input
            disabled={disabled}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            className="
                w-full
                p-4
                text-lg
                bg-orange-50
                border-2
                border-orange-100
                rounded-md
                outline-none
                text-rose-400
                focus:border-rose-400
                focus:border-2
                transition
                disabled:bg-white
                disabled:opacity-70
                disabled:cursor-not-allowed
            "    
        />
    )
}

export default Input;