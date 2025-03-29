import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <Image src="./logo.svg" width={30} height={30} className={styles.headerSvg} alt="" />
            <p> SMILE Co. </p>
        </header>
    )
}