import { cn } from "@/lib/utils";

interface GraduateTestimonialsProps {
  className?: string;
}

const graduates = [
  {
    name: "Анна Жарова",
    image: "https://ru.hexlet.io/vite/assets/anna_zharova-BkYQPE08.png",
    quote:
      "Подписка - это способ без рисков пробовать новые технологии. Формат идеально подходит тем, кто учится в своём ритме - можно заниматься после работы, в дороге или по выходным. Нет сроков и дедлайнов - только вы, задачи и результат.",
  },
  {
    name: "Никита Шелудяков",
    image: "https://ru.hexlet.io/vite/assets/nikita_sheludyakov-CUGQKP41.png",
    quote:
      "Если вам просто нравится разбираться, как всё работает, решать задачи и прокачивать мозг - подписка станет вашим интеллектуальным спортзалом. Можно учиться без цели сменить работу, просто ради удовольствия и чувства прогресса.",
  },
  {
    name: "Надежда Каменская",
    image: "https://ru.hexlet.io/vite/assets/nadezhda_kamenskaya-BGjcjndr.png",
    quote:
      "Если вы уже проходили курсы или изучали программирование самостоятельно, но чувствуете пробелы, подписка поможет восполнить их и перейти от \"знаний по верхам\" к глубокому пониманию и практике на проектах.",
  },
];

const GraduateTestimonials = ({ className }: GraduateTestimonialsProps) => {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="container mx-auto">
        <div className="rounded-3xl border border-[#d5e4ff] bg-white/90 p-6 shadow-xl shadow-[#2663ec]/10 md:p-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium tracking-wide text-[#2663ec]">
              ОПЫТ ВЫПУСКНИКОВ ХЕКСЛЕТ
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Что мотивирует учиться дальше
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {graduates.map((graduate) => (
              <article
                key={graduate.name}
                className="rounded-2xl border border-[#dbe7ff] bg-[#f8fbff] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={graduate.image}
                  alt={graduate.name}
                  className="mb-4 h-14 w-14 rounded-full object-cover ring-2 ring-[#c9dbff]"
                  loading="lazy"
                />
                <h3 className="mb-2 text-base font-semibold">{graduate.name}</h3>
                <p className="text-sm text-muted-foreground">{graduate.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { GraduateTestimonials };
