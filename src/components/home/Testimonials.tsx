import { FC } from "react";
import TestimonialCard from "./TestimonialCard";

interface ITestimonial {
  image?: string;
  name: string;
  comment: string;
  rating?: number;
}

interface TestimonialsProps {}

const testimonials: ITestimonial[] = [
  {
    image: "",
    name: "User 1",
    comment:
      "Outstanding care, compassionate staff. I highly recommend this clinic.",
    rating: 4,
  },
  {
    image: "",
    name: "User 2",
    comment:
      "Exceptional doctors who listen and care. A game-changer for my health.",
    rating: 4,
  },
  {
    image: "",
    name: "User 3",
    comment: "Consistently outstanding. Trust them with my well-being.",
    rating: 5,
  },
];

const Testimonials: FC<TestimonialsProps> = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-neutral-400 mb-6 mt-20 text-center">
        Our Client Says
      </h2>
      <div className="flex flex-row items-center gap-6 justify-center flex-wrap">
        {testimonials &&
          testimonials.map((testimonial: ITestimonial, i: number) => (
            <TestimonialCard
              key={i}
              image={testimonial?.image}
              name={testimonial?.name}
              comment={testimonial?.comment}
              rating={testimonial?.rating}
            />
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
