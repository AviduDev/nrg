import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs({
  accId,
  question,
  answer,
}: {
  accId: string;
  question: string;
  answer: string;
}) {
  return (
    <Accordion type="single" collapsible defaultValue="1" className="">
      <AccordionItem value={accId} className="border border-blue-900 p-2 mb-2 py-0" key={accId}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
