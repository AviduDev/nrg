import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 underline">
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Terms and Conditions</Link>
      <Link href="#">Return Policy</Link>
    </footer>
  );
}
