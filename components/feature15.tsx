import {
  Brain,
  Compass,
  GraduationCap,
  Rocket,
} from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const feature = [
  {
    title: "Разработчикам, которые хотят расти",
    description:
      "Если вы уже в профессии и хотите систематизировать знания, закрыть пробелы или подготовиться к интервью на Middle+, подписка даст практику по актуальным темам: от алгоритмов до DevOps.",
    icon: <Rocket className="size-6" />,
  },
  {
    title: "Выпускникам школ и самоучкам",
    description:
      "Если вы уже учились, но чувствуете фрагментарность знаний, формат подписки поможет перейти от поверхностного понимания к уверенной практике на задачах и проектах.",
    icon: <GraduationCap className="size-6" />,
  },
  {
    title: "Тем, кто ценит гибкость",
    description:
      "Учитесь в своем ритме: после работы, в дороге или по выходным. Можно спокойно пробовать новые технологии без дедлайнов и двигаться к результату в комфортном темпе.",
    icon: <Compass className="size-6" />,
  },
  {
    title: "Тем, кто учится для себя",
    description:
      "Если вам нравится разбираться, как все устроено, подписка станет интеллектуальным спортзалом: решайте задачи, развивайте мышление и получайте удовольствие от прогресса.",
    icon: <Brain className="size-6" />,
  },
];

interface Feature15Props {
  className?: string;
}

const Feature15 = ({ className }: Feature15Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <p className="text-sm text-muted-foreground">КОМУ ПОДХОДИТ ФОРМАТ</p>
            <h2 className="text-3xl font-medium md:text-5xl">
              Кому будет полезна подписка Hexlet
            </h2>

            <p className="text-muted-foreground md:max-w-2xl">
              Формат подписки помогает расти в профессии, закрывать пробелы и
              учиться в удобном темпе: с фокусом на практику, системность и
              реальный результат.
            </p>
            <Image
              src="/feature-format.svg"
              alt="Траектории обучения в подписке"
              width={420}
              height={260}
              className="mt-4 w-full max-w-md"
            />
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col items-center justify-between rounded-lg border border-[#dbe7ff] bg-white/90 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2663ec]/15 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-[#e8f0ff] text-[#2663ec]">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature15 };
