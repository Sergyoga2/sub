import { cn } from "@/lib/utils";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface Cta10Props {
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Cta10 = ({
  heading = "Call to Action",
  description = "Build faster with our collection of pre-built blocks. Speed up your development and ship features in record time.",
  buttons = {
    primary: {
      text: "Buy Now",
      url: "https://www.shadcnblocks.com",
    },
  },
  className,
}: Cta10Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex w-full flex-col items-center gap-6 overflow-hidden rounded-2xl border border-[#d5e4ff] bg-gradient-to-br from-[#eaf1ff] via-[#f4f8ff] to-[#e7fbf8] p-8 text-center shadow-xl shadow-[#2663ec]/10 md:rounded-3xl lg:p-12">
          <h3 className="text-2xl font-semibold md:text-4xl">{heading}</h3>
          <p className="max-w-xl text-muted-foreground lg:text-lg">{description}</p>
          <Image
            src="/cta-zone.svg"
            alt="Обучение в комфортном ритме"
            width={280}
            height={180}
            className="rounded-xl border border-[#d5e4ff] shadow-md"
          />
          <div className="flex shrink-0 flex-col items-center gap-2">
            {buttons.primary && (
              <Button
                asChild
                variant="default"
                size="lg"
                className="h-14 bg-[#2663ec] px-8 text-base font-semibold text-white transition hover:bg-[#3c64ff] hover:shadow-lg"
              >
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
          {buttons.secondary && (
            <div className="text-sm text-muted-foreground">
              <a href={buttons.secondary.url} className="underline-offset-2 hover:underline">
                {buttons.secondary.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Cta10 };
