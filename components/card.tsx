import * as React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

// Definisi tipe props
interface CustomCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, imageUrl, }) => {
  return (
    <Card className="max-w-[300px] flex flex-col p-2">
      <CardHeader className="flex gap-3 justify-center text-center">
        <Image
        className="text-center "
          alt="Card image"
          height={120}
          radius="sm"
          
          src={imageUrl}
          width={150}
        />
      </CardHeader>

      <CardBody>
        <h1 className="font-bold text-lg text-center">{title}</h1>
        <p className="text-center text-sm">{description}</p>
      </CardBody>

    </Card>
  );
};

export default CustomCard;
