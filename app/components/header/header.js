import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <p className="logo">DueWeather</p>
        <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
      </Link>
    </header>
  );
}
