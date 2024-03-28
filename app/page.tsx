import Image from "next/image";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Feature from "@/components/Feature";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";

// -----------images-----------
const heroImage =
  "https://res.cloudinary.com/avidu/image/upload/v1704093459/trg/Hero_Image_nkumcg.webp";

const featureImg1 =
  "https://res.cloudinary.com/avidu/image/upload/v1710223849/trg/feature_1_xl5vqh.jpg";

const featureImg2 =
  "https://res.cloudinary.com/avidu/image/upload/v1710223840/trg/feature_2_kvpgv4.jpg";

const featureImg3 =
  "https://res.cloudinary.com/avidu/image/upload/v1710223843/trg/feature_4_p3pz0q.jpg";

const featureImg4 =
  "https://res.cloudinary.com/avidu/image/upload/v1710223845/trg/feature_5_iymnnm.jpg";

const serviceImg =
  "https://res.cloudinary.com/avidu/image/upload/v1710223841/trg/feature_3_ywcjgc.jpg";
// ----------------------

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between gap-2 p-2 text-blue-900">
      {/* ----------bg texture---------- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* ---------- */}

      {/* --------------------Hero section-------------------- */}
      <Section section="Section" secName="Introduction" secNumber={1}>
        <div className="container flex flex-col items-center justify-between">
          <h1 className="mb-8 text-pretty text-center text-2xl font-black capitalize md:text-4xl lg:mt-11 lg:text-6xl xl:mt-28">
            land your dream job with a powerfully written resume
          </h1>

          <Link href="/form" className="w-full md:max-w-xl">
            <Button className="mb-4">Get Your Now </Button>
          </Link>

          <Link href="contact" className="underline lg:mb-12 xl:mb-28">
            Reach Us
          </Link>
          <Image
            src={heroImage}
            width={1346}
            height={801}
            priority
            alt=""
            className="pointer-events-none"
          />
        </div>
      </Section>
      {/* ---------------------------------------- */}

      {/* --------------------Key benefits-------------------- */}
      <Section section="Section" secName="Key Benefits" secNumber={2}>
        <div className="container py-11">
          <h2 className="mb-2 text-pretty text-center text-xl font-black md:text-3xl lg:text-5xl">
            Why Not To Use a Generated Resume?
          </h2>
          <p className="mx-auto mb-8 text-center md:max-w-3xl lg:mb-12">
            While auto-generated resumes can be a starting point, a custom
            resume is an investment in your job search that can significantly
            increase your chances of landing an interview.
          </p>

          <div className="featureContainer gap-2 lg:grid lg:grid-cols-2">
            <Feature
              imgSrc={featureImg1}
              cardTitle="Tailored for the Job"
              cardDsc="You can highlight skills and experiences directly relevant to the specific job description, making your application more targeted and increasing your chances of getting noticed."
              imgWidth={640}
              imgHeight={427}
              imgAlt=""
              accId="1"
            ></Feature>

            <Feature
              imgSrc={featureImg2}
              cardTitle="Keywords and Achievements"
              cardDsc="You can incorporate keywords from the job description to ensure your resume passes Applicant Tracking Systems (ATS) used by many companies. You can also showcase your achievements using strong action verbs and quantifiable results to make a lasting impression."
              imgWidth={640}
              imgHeight={427}
              imgAlt=""
              accId="2"
            ></Feature>

            <Feature
              imgSrc={featureImg3}
              cardTitle="Unique Selling Proposition"
              cardDsc="A custom resume allows you to craft a compelling narrative that showcases your unique value proposition and sets you apart from other applicants."
              imgWidth={640}
              imgHeight={427}
              imgAlt=""
              accId="3"
            ></Feature>

            <Feature
              imgSrc={featureImg4}
              cardTitle="Well Formatted"
              cardDsc="uto-generated resumes tend to be generic and lack the specific details a hiring manager looks for."
              imgWidth={640}
              imgHeight={427}
              imgAlt=""
              accId="4"
            ></Feature>
          </div>
        </div>
      </Section>
      {/* ---------------------------------------- */}

      {/* --------------------Our mission-------------------- */}
      <Section section="Section" secName="Our Mission" secNumber={3}>
        <div className="container py-11 md:px-6">
          <q className="text-pretty	text-center text-xl font-bold  md:text-2xl lg:text-4xl xl:text-6xl">
            Our Mission is To empower job seekers in Sri Lanka with impactful
            and tailored resumes that land them their dream jobs.
          </q>
        </div>
      </Section>
      {/* ---------------------------------------- */}

      {/* --------------------Services-------------------- */}
      <Section section="Section" secName="Provided Services" secNumber={4}>
        <div className="container py-11 md:max-w-6xl">
          <h2 className="text-pretty pb-2 text-center text-2xl font-black md:pb-4 md:text-3xl lg:text-5xl">
            AIO Solution for Your Job Seeking Journey!
          </h2>
          <Image
            src={serviceImg}
            width={640}
            height={427}
            alt=""
            className="w-full pb-6 md:mb-6 lg:mb-8"
          />

          <div className="cardContainer lg:grid lg:grid-cols-3 lg:gap-2">
            <Service
              cardTtl="Resume Writing"
              cardDsc="Creating powerful and eye catching resumes that stand out from the crowd. Every resume we create are tailored to your job needs we'll highlight your unique skills and experience to land your dream job, not just any job. Leave the resume writing to the experts and focus on what you do best."
            />

            <Service
              cardTtl="Cover Letter Writing"
              cardDsc="Creating powerful and eye catching resumes that stand out from the crowd. Every resume we create are tailored to your job needs we'll highlight your unique skills and experience to land your dream job, not just any job. Leave the resume writing to the experts and focus on what you do best."
            />

            <Service
              cardTtl="Resume Writing"
              cardDsc="Creating powerful and eye catching resumes that stand out from the crowd. Every resume we create are tailored to your job needs we'll highlight your unique skills and experience to land your dream job, not just any job. Leave the resume writing to the experts and focus on what you do best."
            />
          </div>
        </div>
      </Section>
      {/* ---------------------------------------- */}

      {/* --------------------Reviews-------------------- */}
      <Section section="Section" secName="Customer Testimonials" secNumber={5}>
        <div className="container py-11 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
          <div className="textContainer lg:text-start">
            <h2 className="mb-2 text-pretty text-center text-2xl font-black md:text-3xl lg:text-start lg:text-5xl">
              What People Say About Us
            </h2>

            <p className="mx-auto mb-8 text-pretty text-center md:max-w-2xl lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos itaque necessitatibus amet soluta fuga odit recusandae
              eaque quasi dolorem.
            </p>
          </div>

          <div className="testiContainer">
            <Testimonial />
          </div>
        </div>
      </Section>
      {/* ---------------------------------------- */}

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

      {/* --------------------Cta-------------------- */}
      <Section
        section="&copy;The Resume Guy"
        secName="Call To Action"
        secNumber={2024}
      >
        <div className="container flex flex-col justify-between pt-11">
          <Cta />
          <Footer />
        </div>
      </Section>
      {/* ----------------------------------------*/}
    </main>
  );
}
