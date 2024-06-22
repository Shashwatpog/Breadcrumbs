
interface ButtonProps {
    label : string;
    secondary? : boolean;
    fullWidth? : boolean;
    large? : boolean;
    onClick : () => void;
    disabled? : boolean;
    outline? : boolean;

}



const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline
}) => {
    return(
        <button className ={"disabled:opacity-70"}></button>
    );
}

export default Button