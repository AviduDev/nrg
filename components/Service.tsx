import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Service({
  cardTtl,
  cardDsc,
}: {
  cardTtl: string;
  cardDsc: string;
}) {
  return (
    <Card className="mb-4 border-none bg-transparent text-blue-900 shadow-none lg:flex lg:flex-col lg:justify-between">
      <CardTitle className="flex flex-row items-center pb-1 text-lg">
        <StarFilledIcon className="mx-1 md:mx-2 md:size-6" />
        {cardTtl}
      </CardTitle>
      <CardDescription className="text-pretty pl-4 text-blue-900 md:max-w-2xl">
        {cardDsc}
      </CardDescription>
    </Card>
  );
}
