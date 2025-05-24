import type { ReactNode } from "react";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { features } from '@/constants';

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-52 dark:bg-transparent" id="features">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-balance lg:text-4xl">
            Elevate Your Interviews with Kalma Copilot
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Discover the powerful features designed to give you a confident edge
            in your online job interviews.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="group shadow-zinc-950/5">
              <CardHeader className="pb-3">
                <CardDecorator>
                  <feature.icon className="size-6" aria-hidden />
                </CardDecorator>
                <h3 className="mt-6 font-medium">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="absolute inset-0 flex items-center justify-center m-auto border-t border-l bg-background size-12">
      {children}
    </div>
  </div>
);
