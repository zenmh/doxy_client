import { avater } from "@/assets/images";
import Image from "next/image";
import { FC } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface TestimonialCardProps {
  image?: string;
  name: string;
  comment: string;
  rating?: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  image,
  name,
  comment,
  rating,
}) => {
  return (
    <div className="border-2 border-neutral-700 h-[160px] w-[300px] p-3 rounded-lg shadow-md">
      <div className="flex flex-row items-center">
        <Image
          src={image ? image : avater}
          alt="image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h4 className="text-lg font-bold text-cyan-500 ml-4">{name}</h4>
      </div>
      <p className="text-gray-300 mt-3">
        {comment.length > 70 ? comment.slice(0, 70) + "..." : comment}
      </p>
      {rating && (
        <div className="flex flex-row gap-2 items-center justify-center mt-2">
          {Array(rating)
            .fill(null)
            .map((_, i: number) => (
              <AiFillStar fill="cyan" key={i} />
            ))}
          {Array(5 - rating)
            .fill(null)
            .map((_, i: number) => (
              <AiOutlineStar fill="cyan" key={i} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
