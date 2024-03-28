import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 underline md:grid-cols-3">
      <Link href="/privacy-policy">Privacy Policy</Link>
      <Link href="/terms-and-conditions">Terms and Conditions</Link>
      <Link href="/return-policy">Return Policy</Link>
    </footer>
  );
}
