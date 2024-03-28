import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main>
      {/* ----------bg texture---------- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* ---------- */}
      <Section section="Page" secName="Privacy Policy" secNumber={1}>
        <h1>Privacy Policy</h1>
      </Section>
    </main>
  );
}
