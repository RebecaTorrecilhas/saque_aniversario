import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="./logo.svg" className={styles.headerSvg} alt="" />
            <p> SMILE Co. </p>
        </header>
    )
}