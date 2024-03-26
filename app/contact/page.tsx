"use client";

import Faqs from "@/components/Faqs";
import Section from "@/components/Section";
import Script from "next/script";

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      {/* ----------Contact Form Section---------- */}
      <Section secName="Contact" secNumber={1} section="Section">
        <div className="container">

          <Script src="https://tally.so/widgets/embed.js" />

          <iframe
            data-tally-src="https://tally.so/embed/3EXdk4?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            height="300"
            title="Contact Form"
            className="min-w-full bg-gray-300"
          ></iframe>
        </div>
      </Section>

      {/* ----------FAQs Section---------- */}
      <Section
        section="Section"
        secName="Frequently Asked Questions"
        secNumber={2}
      >
        <div className="container py-11">
          <h2 className=" mb-2 text-pretty text-center text-2xl font-black">
            Got Anything to Ask? Look No Further.
          </h2>
          <p className="mb-8 text-pretty text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            vitae ab asperiores, ullam non nostrum possimus odio quae ipsum
            totam maxime cupiditate! Iste libero quo facere
          </p>

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
      </Section>
    </main>
  );
}
