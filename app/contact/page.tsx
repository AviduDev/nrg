"use client";

import Faqs from "@/components/Faqs";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Script from "next/script";

export default function Contact() {
  function refresh() {
    window.location.reload();
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      {/* ----------Contact Form Section---------- */}
      <Section secName="Contact" secNumber={1} section="Section">
        <div className="p-y-11 container flex flex-col items-center">
          <h1 className="mb-2 text-pretty text-center text-2xl font-black capitalize md:text-4xl lg:mb-8 lg:text-5xl">
            Got anything to ask?
          </h1>
          <p className="mb-8 text-center md:max-w-3xl">
            Fill out the form below and clearly describe your problem, include
            your contact details so we can get back to you right away.
          </p>

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

      {/* --------------------Faqs-------------------- */}
      <Section
        section="Section"
        secName="Frequently Asked Questions"
        secNumber={6}
      >
        <div className="container py-11 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
          <div className="textContainer">
            <h2 className=" mb-2 text-pretty text-center text-2xl font-black md:text-3xl lg:text-start lg:text-5xl">
              Got Anything to Ask? Look No Further.
            </h2>
            <p className="mx-auto mb-8 text-pretty text-center md:max-w-3xl lg:text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              vitae ab asperiores, ullam non nostrum possimus odio quae ipsum
              totam maxime cupiditate! Iste libero quo facere
            </p>
          </div>

          <div className="faqs">
            <Faqs
              accId="1"
              question="How is this possible"
              answer="vitae ab asperiores, ullam non nostrum possimus odio quae ipsum"
            />

            <Faqs
              accId="2"
              question="How is this possible"
              answer="vitae ab asperiores, ullam non nostrum possimus odio quae ipsum"
            />

            <Faqs
              accId="3"
              question="How is this possible"
              answer="vitae ab asperiores, ullam non nostrum possimus odio quae ipsum"
            />

            <Faqs
              accId="4"
              question="How is this possible"
              answer="vitae ab asperiores, ullam non nostrum possimus odio quae ipsum"
            />

            <Faqs
              accId="5"
              question="How is this possible"
              answer="vitae ab asperiores, ullam non nostrum possimus odio quae ipsum"
            />
          </div>
        </div>
      </Section>
      {/* ---------------------------------------- */}
    </main>
  );
}
