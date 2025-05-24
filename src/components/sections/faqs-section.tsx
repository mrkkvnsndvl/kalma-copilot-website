import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants";

const FaqsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl px-4 mx-auto md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-balance">
            Find answers to common questions about Kalma Copilot and learn how
            to use its features through our helpful video tutorials.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-12">
          <Accordion
            type="single"
            collapsible
            className="w-full px-8 py-3 border shadow-sm bg-card ring-muted rounded-2xl ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="text-base cursor-pointer hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="px-8 mt-6 text-muted-foreground">
            Still have questions? Watch our{" "}
            <a
              href="#tutorials"
              className="font-medium text-primary hover:underline"
            >
              tutorial videos&nbsp;
            </a>
            for more detailed guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
