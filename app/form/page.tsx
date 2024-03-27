"use client";

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Script from "next/script";

export default function Form() {
  function refresh() {
    window.location.reload();
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      <Section secName="Form" secNumber={1} section="Section">
        <div className="container flex flex-col items-center py-11">
          <h1 className="mb-2 text-pretty text-center text-2xl font-black capitalize md:text-4xl lg:mb-8 lg:text-5xl">
            To Get Your Resume, Fill the Form Below
          </h1>
          <p className="mb-4 text-center">
            If the form is not showing up, please refresh the page using button
            below
          </p>
          <Button
            className="mb-8 w-full md:mb-12 md:max-w-xl"
            onClick={refresh}
          >
            Refresh Page
          </Button>

          {/* form */}
          <Script src="https://tally.so/widgets/embed.js" />

          <iframe
            data-tally-src="https://tally.so/embed/wg9kXP?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            height="300"
            width="100%"
            title="Resume Details"
            className="md:max-w-2xl"
          ></iframe>
        </div>
      </Section>
    </main>
  );
}
