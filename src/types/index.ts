import type { ReactNode } from "react";

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface SocialMediaItem {
  name: string;
  url: string;
  icon: ReactNode;
}
