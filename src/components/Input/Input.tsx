import { ChangeEvent } from "react";
import styles from './Input.module.css'

interface InputProps {
    value: string | number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

export const Input = (
    {
        onChange,
        value,
        type = "text"
    }: InputProps) => {
    return (
        <input
            onChange={onChange}
            value={value}
            className={styles.input}
            type={type}
        />
    )
}
