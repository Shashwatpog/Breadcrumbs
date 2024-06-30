
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
            ${secondary ? "bg-rose-600" : "bg-orange-500"}
            ${secondary ? "text-white" : "text-white"}
            ${secondary ? "border-rose-300" : "border-orange-400"}
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