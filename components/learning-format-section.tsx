"use client";

import { useMemo, useState } from "react";
import { PlayCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type LearningItem = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
};

interface LearningFormatSectionProps {
  className?: string;
}

const items: LearningItem[] = [
  {
    id: "theory",
    title: "Просто и наглядно",
    description:
      "Теория в удобном текстовом формате - легко читать даже с телефона. Живые примеры помогают понять, как всё работает. Материал выстроен так, чтобы вы двигались шаг за шагом, не упуская важных деталей.",
    videoUrl: "https://ru.hexlet.io/vite/assets/theory-ru-CwJCw9iN.mov",
  },
  {
    id: "quizzes",
    title: "Проверяем и закрепляем знания",
    description:
      "После каждой темы вы проходите квизы, которые помогают убедиться, что вы всё поняли. Вопросы разного уровня сложности дают возможность как проверить базу, так и попрактиковаться в применении знаний.",
    videoUrl: "https://ru.hexlet.io/vite/assets/quizzes-ru-DW4SYk5T.mov",
  },
  {
    id: "exercises",
    title: "Учитесь на реальных задачах",
    description:
      "Мы создали удобную виртуальную среду, где вы решаете задачи прямо в браузере. У вас есть редактор кода, консоль и автоматические тесты, которые моментально показывают результат.",
    videoUrl: "https://ru.hexlet.io/vite/assets/exercises-ru-CaAXX0k4.mov",
  },
  {
    id: "totaAI",
    title: "Ваш AI наставник",
    description:
      "Учебный помощник на базе ИИ - это наставник, который всегда под рукой. Он понимает, что нужно сделать и как выглядит ваш код. Если что-то пошло не так, вы сразу получите понятные и полезные подсказки.",
    videoUrl: "https://ru.hexlet.io/vite/assets/totaAI-ru-TrdZqMCy.mov",
  },
];

const LearningFormatSection = ({ className }: LearningFormatSectionProps) => {
  const [activeId, setActiveId] = useState(items[0].id);

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [activeId]
  );

  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-3xl border border-[#d5e4ff] bg-white/90 p-6 shadow-xl shadow-[#2663ec]/10 md:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium tracking-wide text-[#2663ec]">
              ФОРМАТ ОБУЧЕНИЯ
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-5xl">
              Как проходит обучение
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3 md:col-span-1">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    "w-full rounded-xl border px-4 py-3 text-left transition",
                    item.id === activeId
                      ? "border-[#2663ec] bg-[#edf3ff] shadow-sm"
                      : "border-[#dbe7ff] bg-white hover:border-[#9ab6ff] hover:bg-[#f6f9ff]"
                  )}
                >
                  <p className="text-sm font-semibold md:text-base">{item.title}</p>
                </button>
              ))}
            </div>

            <div className="md:col-span-2">
              <div className="mb-4 rounded-xl border border-[#dbe7ff] bg-[#f7faff] p-4 md:p-5">
                <h3 className="text-lg font-semibold md:text-xl">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  {activeItem.description}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-[#dbe7ff] bg-[#eef4ff] pt-[30px] pb-[30px]">
                <video
                  key={activeItem.videoUrl}
                  src={activeItem.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full object-cover -my-[30px]"
                />
                <div className="pointer-events-none absolute top-3 right-3 rounded-full bg-black/45 p-1.5 text-white">
                  <PlayCircle className="size-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LearningFormatSection };
