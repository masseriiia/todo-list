import iconSelect from "../../assets/images/check.svg";
import {SVGProps} from "react";

interface ButtonProps {
    icon: string
    className: string
    onClick: () => void
}

export const Button = ({ icon, onClick, className }: ButtonProps) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            <img src={icon} alt="Select"/>
        </button>
    )
}
