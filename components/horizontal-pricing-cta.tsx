import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface HorizontalPricingCtaProps {
  className?: string;
}

const HorizontalPricingCta = ({ className }: HorizontalPricingCtaProps) => {
  return (
    <section className={cn("py-10", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#d5e4ff] bg-gradient-to-r from-[#edf3ff] to-[#e8f8f6] p-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xl font-semibold md:text-2xl">
              Хотите быстрее выйти на новый уровень?
            </p>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">
              Откройте доступ к каталогу навыков и начните прокачку уже сегодня!
            </p>
          </div>
          <Button
            asChild
            className="h-12 bg-[#2663ec] px-7 text-base font-semibold text-white transition hover:bg-[#3c64ff] hover:shadow-lg"
          >
            <a href="#pricing">Выбрать подписку</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HorizontalPricingCta };
