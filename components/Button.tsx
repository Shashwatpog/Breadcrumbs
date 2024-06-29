
interface ButtonProps {
    label : string;
    secondary? : boolean;
    fullWidth? : boolean;
    fullHeight? : boolean;
    large? : boolean;
    onClick : () => void;
    disabled? : boolean;
    outline? : boolean;

}



const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    fullHeight,
    large,
    onClick,
    disabled,
    outline
}) => {
    return(
        <button 
            disabled = {disabled}
            onClick = {onClick}
            className ={`
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-full
            font-semibold
            hover.opacity-80
            transition
            border-2
            ${fullWidth ? "w-full" : "w-fit"}
            ${fullHeight ? "py-2" : "h-fit"}
            ${secondary ? "bg-white" : "bg-rose-600"}
            ${secondary ? "text-black" : "text-white"}
            ${secondary ? "border-rose-600" : "border-pink-300"}
            ${large ? "text-xl" : "text-md"}
            ${large ? "py-5" : "px-4"}
            ${large ? "py-3" : "px-2"}
            ${outline ? "bg-transparent" : ""}
            ${outline ? "border-white" : ""}
            ${outline ? "text-white" : " "}
            `}
        >
            {label}
        </button>
    );
}

export default Button