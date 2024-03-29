import ResumeForm from "@/components/ResumeForm";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Resume Form",
}

export default function Form() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      {/* ----------bg texture---------- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* ---------- */}
      
      <ResumeForm />
    </main>
  );
}
