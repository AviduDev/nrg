"use client";

import Section from "@/components/Section";
import Script from "next/script";

export default function Form() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      <Section secName="Form" secNumber={1} section="Section">
        <div className="container">
          <h1 className="mt-11 text-2xl font-bold text-center capitalize mb-8">Add Your Details below</h1>
          <iframe
            data-tally-src="https://tally.so/embed/wg9kXP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            title="Contact form"
          ></iframe>

          <Script
            id="tally-js"
            src="https://tally.so/widgets/embed.js"
            onLoad={() => {
              Tally.loadEmbeds();
            }}
          />
        </div>
      </Section>
    </main>
  );
}
