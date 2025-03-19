"use client";

import Link from "next/link";
import styles from "./footer.module.css";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.navigation}>
          <li
            className={`${styles.navigation__link} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            <Link href="/">Current</Link>
          </li>
          <li
            className={`${styles.navigation__link} ${
              pathname === "/forecast" ? styles.active : ""
            }`}
          >
            <Link href="/forecast">Forecast</Link>
          </li>
          <li
            className={`${styles.navigation__link} ${
              pathname === "/saved" ? styles.active : ""
            }`}
          >
            <Link href="/saved">Saved</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
