import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
}

const Feature43 = ({
  title = "Fully featured components for Shadcn UI & Tailwind",
  features = [
    {
      heading: "Quality",
      description:
        "Built with attention to detail and best practices. Every component is thoroughly tested and follows modern React patterns for reliability and performance.",
      icon: <GitPullRequest className="size-6" />,
    },
    {
      heading: "Experience",
      description:
        "Crafted with user experience in mind. Each component is designed to be intuitive, accessible, and provide smooth interactions across all devices.",
      icon: <SquareKanban className="size-6" />,
    },
    {
      heading: "Support",
      description:
        "Comprehensive documentation and community support. Get help when you need it with detailed guides, examples, and active community assistance.",
      icon: <RadioTower className="size-6" />,
    },
    {
      heading: "Innovation",
      description:
        "Cutting-edge design patterns and modern web technologies. Stay ahead with the latest trends in UI/UX design and development practices.",
      icon: <WandSparkles className="size-6" />,
    },
    {
      heading: "Results",
      description:
        "Proven track record of successful implementations. These components have been battle-tested in real-world applications and deliver consistent results.",
      icon: <Layers className="size-6" />,
    },
    {
      heading: "Efficiency",
      description:
        "Optimized for performance and developer productivity. Lightweight, fast-loading components that help you build faster without compromising on quality.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
  buttonText = "More Features",
  buttonUrl = "https://shadcnblocks.com",
  className,
}: Feature43Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-5xl">
          {title && (
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-4xl font-medium text-pretty lg:text-5xl">
                {title}
              </h2>
            </div>
          )}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-2xl border border-[#dbe7ff] bg-white/80 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2663ec]/15"
              >
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-[#e8f0ff] text-[#2663ec]">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          {buttonUrl && (
            <div className="mt-16 flex justify-center">
              <Button
                size="lg"
                className="h-14 bg-[#2663ec] px-8 text-base font-semibold text-white transition hover:bg-[#3c64ff] hover:shadow-lg"
                asChild
              >
                <a href={buttonUrl}>{buttonText}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Feature43 };
