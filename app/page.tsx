import {
  Briefcase,
  ChartColumnIncreasing,
  Code2,
  Database,
  Gauge,
  MessageSquareCode,
  Rocket,
  Target,
  Users,
} from "lucide-react";

import { Cta10 } from "@/components/cta10";
import { Faq1 } from "@/components/faq1";
import { Hero243 } from "@/components/hero243";
import { Feature43 } from "@/components/feature43";
import { Pricing2 } from "@/components/pricing2";

export default function Home() {
  return (
    <main>
      <Hero243
        headingStart="Подписка на курсы"
        headingSecondLine="Хекслета для"
        headingFlipWords={[
          "Тестировщиков",
          "Дата аналитиков",
          "Разработчиков",
          "DevOps-инженеров",
        ]}
        description="Систематизируйте свои знания, готовьтесь к техническим собеседованиям, растите в карьере"
        buttonText="Выбрать подписку"
        buttonUrl="#pricing"
        metrics={[
          "56 навыков в каталоге",
          "Понятные треки для роста",
          "Более 2000 заданий",
        ]}
      />
      <Feature43
        title="Что вы получаете в подписке Hexlet"
        buttonText="Оформить подписку"
        buttonUrl="https://subscription.hexlet.io/plans"
        features={[
          {
            heading: "Каталог из 56 навыков",
            description:
              "От JavaScript, Python и SQL до системного дизайна, аналитики и работы с данными.",
            icon: <Code2 className="size-6" />,
          },
          {
            heading: "Фокус на практике",
            description:
              "Каждый навык построен вокруг задач, которые встречаются в реальной работе.",
            icon: <MessageSquareCode className="size-6" />,
          },
          {
            heading: "Гибкая траектория",
            description:
              "Можно учить навыки по профессии, закрывать пробелы точечно или собирать личный план роста.",
            icon: <Target className="size-6" />,
          },
          {
            heading: "Для разработчиков и аналитиков",
            description:
              "Подходит начинающим и mid-level специалистам, которые хотят расти быстрее рынка.",
            icon: <Users className="size-6" />,
          },
          {
            heading: "Короткие учебные циклы",
            description:
              "Занимайтесь по 30-40 минут в день и стабильно усиливайте портфель навыков каждую неделю.",
            icon: <Gauge className="size-6" />,
          },
          {
            heading: "Один платеж - вся библиотека",
            description:
              "Не нужно покупать каждый навык отдельно: подписка открывает весь каталог сразу.",
            icon: <Database className="size-6" />,
          },
        ]}
      />
      <Feature43
        title="Какие результаты даёт подписка"
        buttonText="Начать обучение"
        buttonUrl="#pricing"
        features={[
          {
            heading: "Уверенный рост в коде",
            description:
              "Прокачка ключевых технических компетенций для ежедневной работы в продуктовой команде.",
            icon: <Rocket className="size-6" />,
          },
          {
            heading: "Сильнее в аналитике",
            description:
              "Навыки SQL, метрик, продуктовой логики и принятия решений на основе данных.",
            icon: <ChartColumnIncreasing className="size-6" />,
          },
          {
            heading: "Быстрее к следующему грейду",
            description:
              "Каталог закрывает типовые skill-gap для перехода на новую роль или повышение.",
            icon: <Briefcase className="size-6" />,
          },
          {
            heading: "Меньше хаоса в обучении",
            description:
              "Структурированные навыки помогают не распыляться и двигаться по приоритетам.",
            icon: <Target className="size-6" />,
          },
          {
            heading: "Постоянное обновление знаний",
            description:
              "Вы не застреваете в старом контенте: подписка удобна для регулярного апдейта базы.",
            icon: <Gauge className="size-6" />,
          },
          {
            heading: "Инвестиция в карьеру",
            description:
              "Платите один раз за доступ к библиотеке и развиваете навыки, которые влияют на доход.",
            icon: <ChartColumnIncreasing className="size-6" />,
          },
        ]}
      />
      <Pricing2
        sectionId="pricing"
        heading="Тарифы подписки Hexlet Pro Skills"
        description="Выберите удобный формат и получите доступ ко всем 56 навыкам каталога."
        plans={[
          {
            id: "month",
            name: "Месячный",
            description: "Для знакомства с платформой",
            price: "3 900 ₽",
            period: "/мес",
            features: [
              { text: "Более 45 курсов" },
              { text: "130+ навыков для развития" },
              { text: "AI-помощник по обучению" },
              { text: "Онлайн-тренажер 24/7 с автопроверками" },
              { text: "Учебные проекты для тренировки" },
              { text: "Доступ в закрытое сообщество" },
            ],
            button: {
              text: "Выбрать месячный",
              url: "https://subscription.hexlet.io/plans",
            },
          },
          {
            id: "year",
            name: "Годовой",
            description: "Для непрерывного роста",
            price: "2 900 ₽",
            period: "/мес",
            features: [
              { text: "Выгода 25%" },
              { text: "При оплате 34 800 ₽ за год" },
              { text: "Те же опции, но дешевле" },
            ],
            button: {
              text: "Выбрать годовой",
              url: "https://subscription.hexlet.io/plans",
            },
          },
          {
            id: "three-year",
            name: "Трехлетний",
            description: "Максимальная выгода без ограничений",
            price: "2 400 ₽",
            period: "/мес",
            features: [
              { text: "Выгода 38%" },
              { text: "При оплате 86 400 ₽ за три года" },
              { text: "Все курсы Хекслета доступны для прохождения" },
              { text: "Лучший тариф для долгосрочного роста" },
            ],
            button: {
              text: "Выбрать трехлетний",
              url: "https://subscription.hexlet.io/plans",
            },
          },
        ]}
      />
      <Faq1
        heading="Частые вопросы о подписке"
        items={[
          {
            id: "faq-1",
            question: "Что входит в подписку Hexlet Pro Skills?",
            answer:
              "Подписка открывает полный доступ к каталогу из 56 навыков: программирование, аналитика, SQL, архитектура, продуктовые и карьерные компетенции.",
          },
          {
            id: "faq-2",
            question: "Подписка подходит новичкам?",
            answer:
              "Да. В каталоге есть навыки базового, среднего и продвинутого уровня. Можно начать с основ и постепенно переходить к более сложным темам.",
          },
          {
            id: "faq-3",
            question: "Можно ли отменить подписку?",
            answer:
              "Да, подписку можно отменить в личном кабинете. Доступ сохранится до конца оплаченного периода.",
          },
          {
            id: "faq-4",
            question: "Сколько времени нужно, чтобы увидеть прогресс?",
            answer:
              "При регулярных занятиях 30-40 минут в день большинство студентов замечают рост уверенности и скорости решения задач уже в первые недели.",
          },
          {
            id: "faq-5",
            question: "Чем подписка лучше покупки отдельных курсов?",
            answer:
              "Вы получаете сразу весь каталог навыков и можете быстро закрывать любые пробелы без дополнительных оплат за каждый новый навык.",
          },
        ]}
      />
      <Cta10
        heading="Начните прокачку навыков сегодня"
        description="Оформите подписку и получите доступ ко всем 56 навыкам Hexlet. Чем раньше начнёте, тем быстрее увидите результат в работе и карьере."
        buttons={{
          primary: {
            text: "Оформить подписку",
            url: "#pricing",
          },
          secondary: {
            text: "Посмотреть тарифы",
            url: "#pricing",
          },
        }}
      />
    </main>
  );
}
