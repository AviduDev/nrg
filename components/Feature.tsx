import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Feature({
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  cardTitle,
  cardDsc,
  accId,
}: {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  cardTitle: string;
  cardDsc: string;
  accId: string;
}) {
  return (
    <Card className="borderk-none bg-transparent text-blue-900 shadow-none mb-4">
      <CardContent className="m-0 p-0 mb-2">
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
        ></Image>
      </CardContent>
      <CardHeader className="m-0 p-0">
        <Accordion type="single" collapsible defaultValue="1">
          <AccordionItem value={accId}>
            <AccordionTrigger className="m-0 p-0 mb-1">
              <CardTitle className="flex flex-row items-center text-lg font-bold capitalize">
                <ArrowRightIcon className="size-4" />
                {cardTitle}
              </CardTitle>
            </AccordionTrigger>
            <AccordionContent>
              <p className="pl-4">{cardDsc}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardHeader>
    </Card>
  );
}
