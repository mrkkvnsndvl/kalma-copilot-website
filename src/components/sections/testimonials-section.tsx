import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/constants";

import type { Testimonial } from "@/types";

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

const TestimonialsSection = () => {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="max-w-6xl px-6 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-title">
              What Our Users Are Saying About Kalma Copilot
            </h2>
            <p className="mt-4 text-body text-zinc-500 dark:text-zinc-400">
              Read testimonials from job seekers, interviewers, and
              professionals who have experienced the benefits of Kalma Copilot.
            </p>
          </div>
          <div className="grid gap-3 mt-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>
                          {name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="block text-sm tracking-wide text-muted-foreground">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="italic text-gray-700 dark:text-gray-300">
                            "{quote}"
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
