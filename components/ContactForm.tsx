"use client"

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Script from "next/script";

export default function ContactForm() {
  function refresh() {
    window.location.reload();
  }

  return (
    <Section secName="Contact" secNumber={1} section="Section">
      <div className="p-y-11 container flex flex-col items-center">
        <h1 className="mb-2 text-pretty text-center text-2xl font-black capitalize md:text-4xl lg:mb-8 lg:text-5xl">
          Got anything to ask?
        </h1>
        <p className="mb-8 text-center md:max-w-3xl">
          Fill out the form below and clearly describe your problem, include
          your contact details so we can get back to you right away.
        </p>

        <p className="mb-4 flex items-center rounded-md border border-red-300 bg-red-100 p-2 text-center">
          <ExclamationTriangleIcon className="mx-2" />
          If the form is not showing up, please refresh the page using button
          below
        </p>
        <Button className="mb-8 w-full md:mb-12 md:max-w-xl" onClick={refresh}>
          Refresh Page
        </Button>

        <Script src="https://tally.so/widgets/embed.js" />

        <iframe
          data-tally-src="https://tally.so/embed/3EXdk4?hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          height="300"
          title="Contact Form"
          className="w-full md:max-w-2xl"
        ></iframe>
      </div>
    </Section>
  );
}
