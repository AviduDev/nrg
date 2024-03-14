"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// -----------------images-----------------
const sasindu =
  "https://res.cloudinary.com/avidu/image/upload/v1709101192/trg/Sasindu_Maduranga_Testimony_kff27v.webp";

const rangana =
  "https://res.cloudinary.com/avidu/image/upload/v1709101193/trg/Rangana_Fernando_Testimony_fs91oa.webp";

const salika =
  "https://res.cloudinary.com/avidu/image/upload/v1709101194/trg/Salika_Lakmal_Testimony_scmj1m.webp";
// -----------------------

export default function Testimonial() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Card className="flex flex-col justify-between rounded-none border border-blue-900 bg-transparent p-2">
            <CardContent>
              <q className="text-sm">
                Creating powerful and eye catching resumes that stand out from
                the crowd. Every resume we create are tailored to your job needs
                we will highlight your unique skills and experience to land your
                dream job, not just any job. Leave the resume writing to the
                experts and focus on what you do best.
              </q>

              <div className="nameContainer mt-4 flex flex-row items-center">
                <Image
                  src={sasindu}
                  width={864}
                  height={864}
                  alt=""
                  className="mr-2 size-12 rounded-full"
                ></Image>

                <p className="flex flex-col">
                  <span className="name">Sasindu Maduranga</span>
                  <span className="position text-xs font-bold">
                    Ex Quality Assurance Engineer
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex flex-col justify-between rounded-none border border-blue-900 bg-transparent p-2">
            <CardContent>
              <q className="text-sm">
                Creating powerful and eye catching resumes that stand out from
                the crowd. Every resume we create are tailored to your job needs
                we will highlight your unique skills and experience to land your
                dream job, not just any job. Leave the resume writing to the
                experts and focus on what you do best.
              </q>

              <div className="nameContainer mt-4 flex flex-row items-center">
                <Image
                  src={salika}
                  width={864}
                  height={864}
                  alt=""
                  className="mr-2 size-12 rounded-full"
                ></Image>

                <p className="flex flex-col">
                  <span className="name">Salika Lakmal</span>
                  <span className="position text-xs font-bold">
                    Ex Quality Assurance Engineer
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex flex-col justify-between rounded-none border border-blue-900 bg-transparent p-2">
            <CardContent>
              <q className="text-sm">
                Creating powerful and eye catching resumes that stand out from
                the crowd. Every resume we create are tailored to your job needs
                we will highlight your unique skills and experience to land your
                dream job, not just any job. Leave the resume writing to the
                experts and focus on what you do best.
              </q>

              <div className="nameContainer mt-4 flex flex-row items-center">
                <Image
                  src={rangana}
                  width={864}
                  height={864}
                  alt=""
                  className="mr-2 size-12 rounded-full"
                ></Image>

                <p className="flex flex-col">
                  <span className="name">Rangana Fernendo</span>
                  <span className="position text-xs font-bold">
                    Ex Quality Assurance Engineer
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
