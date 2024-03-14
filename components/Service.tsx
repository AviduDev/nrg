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
    <Card className="border-none bg-transparent text-blue-900 shadow-none mb-4">
      <CardTitle className="flex flex-row items-center text-lg pb-1">
        <StarFilledIcon className="mx-1" />
        {cardTtl}
      </CardTitle>
      <CardDescription className="pl-4 text-blue-900">
        {cardDsc}
      </CardDescription>
    </Card>
  );
}
