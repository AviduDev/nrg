import ContactForm from "@/components/ContactForm";
import Faqs from "@/components/Faqs";
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact"
}

export default function Contact() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      {/* ----------bg texture---------- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* ---------- */}
      {/* ----------Contact Form Section---------- */}

      <ContactForm />

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
