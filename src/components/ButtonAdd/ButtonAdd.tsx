import styles from './ButtonAdd.module.css'

interface ButtonProps {
    onClick?: () => void,
    children: string
}

export const ButtonAdd = ({onClick, children}: ButtonProps) => {
    return (
        <button onClick={onClick} className={styles.button} >{children}</button>
    )
}
