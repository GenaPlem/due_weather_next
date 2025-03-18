import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="navigation">
          <li className="navigation__link active">
            <Link href="/">Current</Link>
          </li>
          <li className="navigation__link">
            <Link href="/forecast">Forecast</Link>
          </li>
          <li className="navigation__link">
            <Link href="/saved">Saved</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
