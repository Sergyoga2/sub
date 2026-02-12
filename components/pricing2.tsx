import { CircleCheck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  recommended?: boolean;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
}

interface Pricing2Props {
  sectionId?: string;
  heading?: string;
  description?: string;
  paymentHint?: {
    text: string;
    linkText: string;
    linkUrl: string;
  };
  plans?: PricingPlan[];
  className?: string;
}

const Pricing2 = ({
  sectionId,
  heading = "Pricing",
  description = "Check out our affordable pricing plans",
  paymentHint,
  plans = [
    {
      id: "plus",
      name: "Plus",
      description: "For personal use",
      price: "$19",
      period: "/mo",
      features: [
        { text: "Up to 5 team members" },
        { text: "Basic components library" },
        { text: "Community support" },
        { text: "1GB storage space" },
      ],
      button: {
        text: "Purchase",
        url: "https://shadcnblocks.com",
      },
    },
    {
      id: "pro",
      name: "Pro",
      description: "For professionals",
      price: "$49",
      period: "/mo",
      features: [
        { text: "Unlimited team members" },
        { text: "Advanced components" },
        { text: "Priority support" },
        { text: "Unlimited storage" },
      ],
      button: {
        text: "Purchase",
        url: "https://shadcnblocks.com",
      },
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For teams and companies",
      price: "$99",
      period: "/mo",
      features: [
        { text: "Dedicated success manager" },
        { text: "Custom integrations" },
        { text: "SLA and premium support" },
        { text: "Advanced security controls" },
      ],
      button: {
        text: "Contact sales",
        url: "https://shadcnblocks.com",
      },
    },
  ],
  className,
}: Pricing2Props) => {
  return (
    <section id={sectionId} className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="pricing-highlight mx-auto flex w-full max-w-5xl flex-col items-center gap-6 border border-[#d7e4ff] p-8 text-center md:p-12">
          <h2 className="text-4xl font-semibold text-pretty lg:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-xl">{description}</p>
          <p className="rounded-full border border-[#bfd2ff] bg-[#edf3ff] px-4 py-1 text-sm font-medium text-[#1f3f8f]">
            Без скрытых условий, отмена в любой момент
          </p>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "relative flex w-80 flex-col justify-between border-[#dbe7ff] bg-white/90 text-left shadow-sm",
                  plan.recommended &&
                    "ring-2 ring-primary shadow-xl shadow-primary/25"
                )}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <div className="inline-flex w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                      Рекомендуемый
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>
                    <p>{plan.name}</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="flex items-end">
                    <span className="text-4xl font-semibold">{plan.price}</span>
                    <span className="text-2xl font-semibold text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheck className="size-4" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button
                    asChild
                    className="h-12 w-full bg-[#2663ec] text-base font-semibold text-white transition hover:bg-[#3c64ff] hover:shadow-lg"
                  >
                    <a href={plan.button.url} target="_blank">
                      {plan.button.text}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {paymentHint && (
            <p className="text-sm text-muted-foreground">
              {paymentHint.text}{" "}
              <a
                href={paymentHint.linkUrl}
                className="font-semibold text-[#2663ec] underline-offset-2 hover:text-[#3c64ff] hover:underline"
              >
                {paymentHint.linkText}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export { Pricing2 };
