import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const image =
  "https://res.cloudinary.com/avidu/image/upload/v1709138114/The_Resume_Guy_vdxddb.webp";

export default function Cta() {
  return (
    <div className="container flex flex-col items-center justify-between">
      <Image src={image} width={1200} height={450} alt="" className="mb-4" />

      <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
        Get Your Resume Now
      </h2>

      <Link
        href="/form"
        className="flex w-full flex-col items-center justify-center md:max-w-xl"
      >
        <Button className="">Get Your Now </Button>
      </Link>
    </div>
  );
}
