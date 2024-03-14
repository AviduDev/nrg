import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const image =
  "https://res.cloudinary.com/avidu/image/upload/v1709138114/The_Resume_Guy_vdxddb.webp";

export default function Cta() {
  return <div>
    <Image src={image} width={1200} height={450} alt="" className="mb-4" />

    <h2 className="text-2xl font-bold text-center mb-2">Get Your Resume Now</h2>
    <Button>
        <Link href="/form">Fill the Form</Link>
    </Button>
  </div>;
}
