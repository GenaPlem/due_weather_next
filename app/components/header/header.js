import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <p className={styles.logo}>DueWeather</p>
        <Image src="/images/logo.svg" alt="logo" width={31} height={31} />
      </Link>
    </header>
  );
}
