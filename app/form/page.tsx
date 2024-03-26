"use client";

import Section from "@/components/Section";
import Script from "next/script";

export default function Form() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      <Section secName="Form" secNumber={1} section="Section">
        <div className="container">
          
          <Script src="https://tally.so/widgets/embed.js" />

          <iframe
            data-tally-src="https://tally.so/embed/wg9kXP?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            height="300"
            title="Resume Details"
            className="min-w-full bg-gray-300"
          ></iframe>
        </div>
      </Section>
    </main>
  );
}
