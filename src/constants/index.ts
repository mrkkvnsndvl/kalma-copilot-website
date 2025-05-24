import type { Testimonial } from "@/types";
import {
  Headphones,
  ListChecks,
  MessageSquare,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Pricing", href: "#pricing" },
];

export const features = [
  {
    icon: Zap,
    title: "Real-time Transcription",
    description:
      "Get accurate, live transcription of your interview on Google Meet, Zoom, and Microsoft Teams. Review key points instantly.",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Insights",
    description:
      "Receive real-time analysis of the conversation, potential questions, and sentiment cues to guide your responses.",
  },
  {
    icon: Headphones,
    title: "Seamless Audio Integration",
    description:
      "Effortlessly captures audio from your interview tab, powering transcription and AI features without complex setup.",
  },
  {
    icon: Settings2,
    title: "Customizable Interview Profiles",
    description:
      "Configure interview details (job title, company, resume) for more contextual and relevant AI assistance.",
  },
  {
    icon: ListChecks,
    title: "Post-Interview Review Tools",
    description:
      "Access and review the full interview transcript and AI insights after the call to analyze your performance.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-Focused Design",
    description:
      "Built with your privacy in mind. Your interview data is handled securely and responsibly.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aaliyah M.",
    role: "Recent Graduate",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote:
      "As a new graduate, interview jitters were real. Kalma Copilot's real-time transcription helped me stay present, and the AI hints boosted my confidence!",
  },
  {
    name: "Ethan J.",
    role: "Experienced Developer",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    quote:
      "I've done many interviews, but Kalma Copilot's insights on the interviewer's cues were a game-changer. It helped me tailor my responses more effectively.",
  },
  {
    name: "Sofia L.",
    role: "HR Professional",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    quote:
      "From an interviewer's perspective, the post-interview review tools are invaluable for comparing candidate responses and identifying key strengths.",
  },
  {
    name: "Caleb K.",
    role: "Career Transitioner",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    quote:
      "Switching careers is tough. Kalma Copilot's customizable profiles allowed me to highlight relevant skills, even when my background wasn't a direct match.",
  },
  {
    name: "Olivia R.",
    role: "University Student",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    quote:
      "The seamless integration with Zoom made using Kalma Copilot so easy during my virtual interviews. It felt like having a helpful assistant right there.",
  },
  {
    name: "Noah S.",
    role: "Senior Manager",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    quote:
      "Privacy is crucial for sensitive discussions. I appreciate Kalma Copilot's focus on secure data handling during the interview process.",
  },
  {
    name: "Isabella G.",
    role: "Software Engineer Lead",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    quote:
      "The ability to review the full transcript after the interview has been incredibly helpful for reflecting on my communication and identifying areas for improvement.",
  },
  {
    name: "Jackson B.",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    quote:
      "Kalma Copilot's AI-powered suggestions often prompted me to elaborate on key points that I might have otherwise overlooked.",
  },
  {
    name: "Mia H.",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    quote:
      "I love how Kalma Copilot works quietly in the background, providing assistance without distracting from the natural flow of the conversation.",
  },
  {
    name: "Lucas W.",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "The audio capture is flawless. The transcription is surprisingly accurate, even with technical jargon.",
  },
  {
    name: "Ava P.",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "As someone focused on user experience, I found Kalma Copilot's interface intuitive and easy to use right from the start.",
  },
  {
    name: "Owen D.",
    role: "Finance Analyst",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    quote:
      "Preparing for interviews can be stressful. Kalma Copilot provides a sense of having a supportive tool that helps me feel more prepared and confident.",
  },
];

export const faqItems = [
  {
    id: "faq-1",
    question: "What platforms does Kalma Copilot support?",
    answer:
      "Kalma Copilot seamlessly integrates with Google Meet, Zoom, and Microsoft Teams for real-time interview assistance. Watch our tutorial videos for a step-by-step guide.",
  },
  {
    id: "faq-2",
    question: "Do I need to create an account to use Kalma Copilot?",
    answer:
      "Currently, Kalma Copilot operates as a browser extension. You do not need a separate account, but you will need to provide your own API keys for Deepgram and OpenRouter to enable all features. Our tutorial videos explain this process clearly.",
  },
  {
    id: "faq-3",
    question: "Is Kalma Copilot really free to use?",
    answer:
      "Yes, Kalma Copilot itself is offered for free. However, to utilize the live transcription and AI-powered features, you will need to provide your own API keys from Deepgram (for audio transcription) and OpenRouter (for AI processing). See our tutorial on setting up your API keys for details.",
  },
  {
    id: "faq-4",
    question: "How do I get API keys for Deepgram and OpenRouter?",
    answer:
      "Our video tutorials walk you through the process of signing up for accounts on the Deepgram and OpenRouter platforms and generating your API keys. Refer to the 'Setting Up Your API Keys' tutorial.",
  },
  {
    id: "faq-5",
    question: "What kind of AI assistance does Kalma Copilot provide?",
    answer:
      "Kalma Copilot can offer real-time insights, suggest potential follow-up questions, and analyze the sentiment of the interview conversation, helping you respond more effectively. Watch our feature highlight videos to see this in action.",
  },
  {
    id: "faq-6",
    question: "Is my interview data secure when using Kalma Copilot?",
    answer:
      "Kalma Copilot is designed with privacy in mind. Your interview audio is processed by Deepgram for transcription, and the text is analyzed by AI through OpenRouter, using your own API keys. Our security overview video explains how we prioritize your privacy.",
  },
  {
    id: "faq-7",
    question: "Can I review the interview transcript after the call?",
    answer:
      "Yes, Kalma Copilot allows you to access and review the complete transcript of your interview after it has concluded, helping you analyze your performance. Our 'Post-Interview Review' tutorial shows you how.",
  },
  {
    id: "faq-8",
    question:
      "Can I customize Kalma Copilot for different types of interviews?",
    answer:
      "Yes, you can create customizable interview profiles within Kalma Copilot, allowing you to provide context about the job role and company for more relevant AI assistance. See the 'Creating Interview Profiles' video for a demonstration.",
  },
  {
    id: "faq-9",
    question:
      "What if I encounter issues or have questions about Kalma Copilot?",
    answer:
      "Please refer to our tutorial videos for comprehensive guides on using Kalma Copilot. If you still need assistance, you can contact our support team through the channels mentioned in the 'Getting Help' video.",
  },
  {
    id: "faq-10",
    question:
      "Will Kalma Copilot be available on other browsers or platforms in the future?",
    answer:
      "Currently, Kalma Copilot is designed as a browser extension for Chrome, Edge, and potentially other Chromium-based browsers. Stay tuned to our tutorial channel for updates on future platform support.",
  },
];

export const footerLinks = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Demo",
    href: "#demo",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];
