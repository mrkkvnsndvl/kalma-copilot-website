import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="relative py-16 md:py-32" id="pricing">
      <div className="max-w-5xl px-6 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
            Get Started with Kalma Copilot - It's Free!
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Unlock the power of AI for your interviews. Kalma Copilot is free to
            use; simply provide your own API keys for transcription and AI
            processing.
          </p>
        </div>
        <div className="mt-8 md:mt-20">
          <div className="relative border shadow-2xl bg-card rounded-3xl shadow-zinc-950/5">
            <div className="grid items-center gap-12 p-12 divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">
                  Kalma Copilot - Free Plan
                </h3>
                <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400">
                  Empower your interviews at no cost.
                </p>
                <span className="inline-block mt-12 mb-6 text-6xl font-bold">
                  <span className="text-4xl">$</span>0
                </span>

                <div className="flex justify-center">
                  <Button asChild size="lg">
                    <a href="#tutorials">Learn How to Set Up</a>
                  </Button>
                </div>

                <p className="mt-12 text-sm text-muted-foreground">
                  To enable all features, you will need to provide your own API
                  keys for the following services:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="size-3" />
                    <span>Deepgram API Key (for real-time transcription)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-3" />
                    <span>OpenRouter API Key (for AI-powered insights)</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <ul role="list" className="space-y-4">
                  {[
                    "Real-time Interview Transcription",
                    "AI-Powered Question Suggestions",
                    "Sentiment Analysis During Interview",
                    "Post-Interview Transcript Review",
                    "Customizable Interview Profiles",
                    "Integration with Google Meet, Zoom, & Teams",
                    "Secure and Private Data Handling",
                    "Regular Feature Updates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  By using your own API keys, you retain full control over your
                  usage and billing with these external services.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-6 mt-12">
                  <span className="h-5 text-sm w-fit text-muted-foreground">
                    Powered by:
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-5 mx-auto w-fit dark:invert"
                      src="/svgs/deepgram.svg"
                      alt="Deepgram Logo"
                      height="20"
                      width="auto"
                    />
                    <span className="font-semibold">Deepgram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-5 mx-auto w-fit dark:invert"
                      src="/svgs/openrouter.svg"
                      alt="OpenRouter Logo"
                      height="20"
                      width="auto"
                    />
                    <span className="font-semibold">OpenRouter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
