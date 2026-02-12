import { TrendingUp, Users, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";

interface Hero243Props {
  badgeText?: string;
  headingStart?: string;
  headingSecondLine?: string;
  headingFlipWords?: string[];
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  metrics?: [string, string, string];
  socialProof?: string[];
  className?: string;
}

const Hero243 = ({
  badgeText = "56 НАВЫКОВ В ОДНОЙ ПОДПИСКЕ",
  headingStart = "Прокачивайте",
  headingSecondLine = "",
  headingFlipWords = ["Программирование", "Аналитику", "Карьеру", "Навыки"],
  description = "Подписка Hexlet открывает каталог из 56 практических навыков: от Python и JavaScript до SQL, Data Analytics и системного мышления.",
  buttonText = "Выбрать подписку",
  buttonUrl = "https://subscription.hexlet.io/plans",
  metrics = [
    "56 навыков в каталоге",
    "Практика на реальных задачах",
    "Рост навыков каждую неделю",
  ],
  socialProof = ["56 навыков", "2000+ заданий", "AI-помощник 24/7"],
  className,
}: Hero243Props) => {
  return (
    <section className={cn("h-full w-full overflow-hidden py-32", className)}>
      <div className="container mx-auto overflow-hidden rounded-3xl border border-[#cfe0ff] bg-white/80 shadow-xl shadow-[#2663ec]/10">
        <div className="relative flex w-full max-w-5xl flex-col justify-start border border-t-0 border-dashed px-5 py-12 md:items-center md:justify-center lg:mx-auto">
          <p className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-block size-2 rounded bg-green-500" />
            {badgeText}
          </p>
          <div className="mt-3 mb-7 w-full max-w-xl text-5xl font-medium font-semibold tracking-tighter md:mb-10 md:text-center md:text-6xl lg:relative lg:mb-0 lg:text-left lg:text-7xl">
            <h1 className="relative z-10 inline md:mr-3">
              {headingStart} <br className="block md:hidden" />
              {headingSecondLine && headingSecondLine}
            </h1>
            <ContainerTextFlip
              className="absolute text-4xl font-medium font-semibold tracking-tighter md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:text-5xl lg:-bottom-4 lg:left-auto lg:translate-x-0 lg:text-7xl"
              words={headingFlipWords}
            />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center border border-t-0 border-b-0 border-dashed py-20">
          <div className="w-full max-w-2xl space-y-5 md:text-center">
            <p className="px-5 text-muted-foreground lg:text-lg">
              {description}
            </p>
            <Button
              className="mx-5 h-14 rounded-lg bg-[#2663ec] px-8 text-base font-semibold text-white transition hover:bg-[#3c64ff] hover:shadow-lg"
              asChild
            >
              <a href={buttonUrl}>{buttonText}</a>
            </Button>
            <ul className="flex flex-wrap items-center justify-center gap-2 px-5 pt-3">
              {socialProof.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#bfd2ff] bg-[#edf3ff] px-3 py-1 text-xs font-medium text-[#1f3f8f]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="px-5 pt-4">
              <Image
                src="/hero-programming.svg"
                alt="Платформа Hexlet с практикой и навыками"
                width={720}
                height={420}
                className="mx-auto rounded-2xl border border-[#d5e4ff] shadow-lg shadow-[#2663ec]/10"
                priority
              />
            </div>
          </div>
        </div>
        <ul className="mx-auto grid h-44 w-full max-w-5xl grid-cols-1 border border-b-0 border-dashed md:h-34 md:grid-cols-2 lg:h-24 lg:grid-cols-3">
          <li className="flex h-full items-center justify-center gap-3 px-5 text-center">
            <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
              <Zap className="size-6 text-muted-foreground" />
            </div>
            <p className="text-lg text-muted-foreground">{metrics[0]}</p>
          </li>
          <li className="flex h-full items-center justify-center gap-3 border-t border-l border-dashed px-5 text-center lg:border-t-0">
            <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
              <Users className="size-6 text-muted-foreground" />
            </div>
            <p className="text-lg text-muted-foreground">{metrics[1]}</p>
          </li>
          <li className="col-span-1 flex h-full items-center justify-center gap-3 border-t border-l border-dashed px-5 text-center md:col-span-2 lg:col-span-1 lg:border-t-0">
            <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
              <TrendingUp className="size-6 text-muted-foreground" />
            </div>
            <p className="text-lg text-muted-foreground">{metrics[2]}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Hero243 };
