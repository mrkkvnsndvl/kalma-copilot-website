import { footerLinks } from "@/constants";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";

const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/mrkkvnsndvl",
    icon: <FaGithub className="size-6" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrkkvnsndvl/",
    icon: <FaLinkedin className="size-6" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mrkkvnsndvl",
    icon: <FaFacebook className="size-6" />,
  },
  {
    name: "Messenger",
    url: "https://m.me/mrkkvnsndvl",
    icon: <FaFacebookMessenger className="size-6" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mrkkvnsndvl",
    icon: <FaInstagram className="size-6" />,
  },
];

const Footer = () => {
  return (
    <footer className="py-16 md:py-32">
      <div className="max-w-5xl px-6 mx-auto">
        <a
          href="/"
          aria-label="go home"
          className="flex items-center mx-auto space-x-2 size-fit"
        >
          <img
            src="/svgs/kalma-copilot-light.svg"
            alt="Kalma Copilot logo"
            className="w-5 h-5"
          />
          <span className="font-medium">Kalma Colipot</span>
        </a>
        <div className="flex flex-wrap items-center justify-center gap-6 my-8 text-sm">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block duration-150 text-muted-foreground hover:text-primary"
            >
              <span>{link.title}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 my-8 text-sm">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="block text-muted-foreground hover:text-primary"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <span className="block text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Kalma Copilot, All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
