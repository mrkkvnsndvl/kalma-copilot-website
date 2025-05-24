import { ChevronRight } from "lucide-react";

import FloatingPaths from "@/components/shared/floating-paths";
import { InfiniteSlider } from "@/components/shared/infinite-slider";
import { ProgressiveBlur } from "@/components/shared/progressive-blur";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden">
      <section>
        <div className="py-24 md:pb-32 lg:pb-36">
          <div className="relative flex flex-col px-6 mx-auto max-w-7xl lg:block lg:px-12">
            <div className="max-w-lg mx-auto text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="max-w-2xl mt-8 text-5xl text-balance md:text-6xl lg:mt-16 xl:text-7xl">
                Empower Your Interviews with Kalma Copilot
              </h1>
              <p className="max-w-2xl mt-8 text-lg text-balance text-zinc-500 dark:text-zinc-400">
                Real-time AI assistance and transcription to help you ace your
                job interviews on Google Meet, Zoom, and Microsoft Teams.
              </p>
              <div className="flex flex-col items-center justify-center gap-2 mt-12 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 pl-5 pr-3 text-base rounded-full"
                >
                  <a href="#demo">
                    <span className="text-nowrap">Watch Demo</span>
                    <ChevronRight className="ml-1" />
                  </a>
                </Button>
                <Button
                  key={2}
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 px-5 text-base rounded-full hover:bg-zinc-950/5 dark:hover:bg-white/5"
                >
                  <a href="#features">
                    <span className="text-nowrap">Explore Features</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
            <FloatingPaths position={-4} />
          </div>
        </div>
      </section>
      <section className="pb-2 bg-background">
        <div className="relative px-6 m-auto group max-w-7xl">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-sm text-end text-zinc-500 dark:text-zinc-400">
                Enhancing interview performance
              </p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                <div className="flex items-center gap-2">
                  <img
                    className="h-5 mx-auto w-fit dark:invert"
                    src="/svgs/google-meet.svg"
                    alt="Google Meet Logo"
                    height="20"
                    width="auto"
                  />
                  <span className="font-semibold">Google Meet</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="h-5 mx-auto w-fit dark:invert"
                    src="/svgs/zoom.svg"
                    alt="Zoom Logo"
                    height="20"
                    width="auto"
                  />
                  <span className="font-semibold">Zoom</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="h-5 mx-auto w-fit dark:invert"
                    src="/svgs/microsoft-office-teams.svg"
                    alt="Microsoft Office Teams Logo"
                    height="20"
                    width="auto"
                  />
                  <span className="font-semibold">Microsoft Office Teams</span>
                </div>
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
                <div className="flex items-center gap-2">
                  <img
                    className="h-5 mx-auto w-fit dark:invert"
                    src="/svgs/wxt.svg"
                    alt="WXT Logo"
                    height="20"
                    width="auto"
                  />
                  <span className="font-semibold">WXT</span>
                </div>
              </InfiniteSlider>
              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"></div>
              <ProgressiveBlur
                className="absolute top-0 left-0 w-20 h-full pointer-events-none"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="absolute top-0 right-0 w-20 h-full pointer-events-none"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
