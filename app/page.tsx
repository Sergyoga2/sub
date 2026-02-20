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
import { Feature15 } from "@/components/feature15";
import { Faq5 } from "@/components/faq5";
import { GraduateTestimonials } from "@/components/graduate-testimonials";
import { Hero243 } from "@/components/hero243";
import { HorizontalPricingCta } from "@/components/horizontal-pricing-cta";
import { Feature43 } from "@/components/feature43";
import { LearningFormatSection } from "@/components/learning-format-section";
import { Pricing2 } from "@/components/pricing2";
import { RevealSection } from "@/components/reveal-section";

const pricingPlans = [
  {
    id: "month",
    name: "Месячный",
    description: "Для знакомства с платформой",
    price: "3 900 ₽",
    period: "/мес",
    features: [
      { text: "56 навыков" },
      { text: "130+ упражнений для развития" },
      { text: "AI-помощник по обучению" },
      { text: "Онлайн-тренажер 24/7 с автопроверками" },
      { text: "Учебные проекты для тренировки" },
      { text: "Доступ в закрытое сообщество" },
    ],
    button: {
      text: "Выбрать",
      url: "https://subscription.hexlet.io/plans",
    },
  },
  {
    id: "year",
    name: "Годовой",
    description: "Для непрерывного роста",
    price: "2 900 ₽",
    period: "/мес",
    recommended: true,
    features: [
      { text: "Выгода 25%" },
      { text: "При оплате 34 800 ₽ за год" },
      { text: "Те же опции, но дешевле" },
    ],
    button: {
      text: "Выбрать",
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
      { text: "Все профессии Хекслета доступны для прохождения" },
      { text: "Лучший тариф для долгосрочного роста" },
    ],
    button: {
      text: "Выбрать",
      url: "https://subscription.hexlet.io/plans",
    },
  },
];

const pricingPaymentHint = {
  text: "Для оплаты картой выпущенной не в РФ",
  linkText: "нажмите здесь",
  linkUrl: "https://hexlet.io/subscription/new",
};

export default function Home() {
  return (
    <main className="landing-shell">
      <RevealSection>
        <Hero243
          headingStart="Подписка на навыки"
          headingSecondLine="Хекслета для"
          headingFlipWords={[
            "Тестировщиков",
            "Аналитиков",
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
          className="py-20 md:py-24"
        />
      </RevealSection>

      {/* 1. Тарифы подписки Хекслит */}
      <RevealSection>
        <Pricing2
          sectionId="pricing"
          heading="Тарифы подписки Hexlet"
          description="Выберите удобный формат и получите доступ ко всем 56 навыкам каталога."
          paymentHint={pricingPaymentHint}
          className="py-16 md:py-20"
          plans={pricingPlans}
        />
      </RevealSection>

      {/* 2. Как проходит обучение */}
      <RevealSection className="section-soft">
        <LearningFormatSection />
      </RevealSection>

      {/* 3. Что мотивирует учиться дальше */}
      <RevealSection className="section-soft">
        <GraduateTestimonials />
      </RevealSection>

      {/* 4. Подписка позволит вам */}
      <RevealSection className="section-tint">
        <Feature43
          title="Подписка позволит вам"
          buttonText="Выбрать подписку"
          buttonUrl="#pricing"
          className="py-16 md:py-20"
          features={[
            {
              heading: "Быстрее расти в профессии",
              description:
                "Прокачивать ключевые навыки без хаотичного обучения и двигаться к стабильному результату.",
              icon: <Rocket className="size-6" />,
            },
            {
              heading: "Увереннее проходить интервью",
              description:
                "Закреплять теорию практикой и лучше отвечать на вопросы на технических собеседованиях.",
              icon: <ChartColumnIncreasing className="size-6" />,
            },
            {
              heading: "Быстрее выходить на новый грейд",
              description:
                "Закрывать типовые skill-gap и готовиться к повышению или переходу в более сильную роль.",
              icon: <Briefcase className="size-6" />,
            },
            {
              heading: "Учиться системно, а не урывками",
              description:
                "Двигаться по приоритетам и не тратить время на бессвязные материалы.",
              icon: <Target className="size-6" />,
            },
            {
              heading: "Поддерживать знания в актуальном состоянии",
              description:
                "Регулярно обновлять базу навыков и не застревать в устаревшем контенте.",
              icon: <Gauge className="size-6" />,
            },
            {
              heading: "Сделать прокачку привычкой",
              description:
                "Учиться в своем темпе и стабильно усиливать навыки, которые влияют на карьеру и доход.",
              icon: <ChartColumnIncreasing className="size-6" />,
            },
          ]}
        />
      </RevealSection>

      {/* 5. Хотите быстрее выйти на новый уровень? */}
      <RevealSection className="section-soft">
        <HorizontalPricingCta />
      </RevealSection>

      {/* 6. Кому будет полезна подписка */}
      <RevealSection className="section-soft">
        <Feature15 className="py-16 md:py-20" />
      </RevealSection>

      {/* 7. Подписка – это для прокачки */}
      <RevealSection className="section-soft">
        <Feature43
          title="Подписка - это для прокачки"
          buttonText="Выбрать подписку"
          buttonUrl="#pricing"
          className="py-16 md:py-20"
          features={[
            {
              heading: "Технической базы",
              description:
                "56 навыков в одном каталоге: разработка, аналитика, DevOps, базы данных и архитектура.",
              icon: <Code2 className="size-6" />,
            },
            {
              heading: "Практики на реальных задачах",
              description:
                "Каждый навык построен вокруг кейсов, которые реально встречаются в работе.",
              icon: <MessageSquareCode className="size-6" />,
            },
            {
              heading: "Гибкой траектории роста",
              description:
                "Можно закрывать пробелы точечно или идти по полной траектории для следующего шага в карьере.",
              icon: <Target className="size-6" />,
            },
            {
              heading: "Обучения в удобном ритме",
              description:
                "Учитесь после работы, в дороге или по выходным, без жестких дедлайнов.",
              icon: <Users className="size-6" />,
            },
            {
              heading: "Поддержки в процессе",
              description:
                "AI-помощник и сообщество помогают быстрее разбираться со сложными темами.",
              icon: <Gauge className="size-6" />,
            },
            {
              heading: "Прокачки без лишних покупок",
              description:
                "Один платеж открывает весь каталог навыков без покупки отдельных курсов.",
              icon: <Database className="size-6" />,
            },
          ]}
        />
      </RevealSection>

      {/* 8. Тарифы подписки Хекслит (второй раз) */}
      <RevealSection>
        <Pricing2
          sectionId="pricing-bottom"
          heading="Тарифы подписки Hexlet"
          description="Выберите удобный формат и получите доступ ко всем 56 навыкам каталога."
          paymentHint={pricingPaymentHint}
          className="py-16 md:py-20"
          plans={pricingPlans}
        />
      </RevealSection>

      {/* 9. Частые вопросы о подписке */}
      <RevealSection className="section-tint">
        <Faq5
          className="py-16 md:py-20"
          badge="FAQ"
          heading="Частые вопросы о подписке"
          description="Ответы на ключевые вопросы по оплате, содержанию подписки, поддержке и условиям обучения."
          faqs={[
            {
              question: "Как происходят списания по подписке?",
              answer:
                "Списания происходят автоматически с привязанной карты раз в месяц или раз в год, в зависимости от выбранного плана. Если оформили месячный план 20 числа, следующее списание будет через 30 дней. Проверить дату следующего списания и отменить подписку можно в разделе «Оплата» аккаунта.",
            },
            {
              question: "Что входит в подписку?",
              answer:
                "Подписка открывает доступ к библиотеке продвинутых материалов Хекслета (кроме профессий): 56 навыков, упражнения, тесты и учебные проекты по Python, Frontend и JavaScript, DevOps, базам данных, тестированию и другим направлениям.",
            },
            {
              question: "Что будет, если я хочу начать с нуля?",
              answer:
                "Если вы только начинаете путь в IT и хотите освоить профессию с трудоустройством, лучше начать с профориентационного теста: https://special.hexlet.io/career-guidance-test. После этого выбрать подходящее направление и формат обучения с наставником.",
            },
            {
              question: "Есть ли пробный период?",
              answer:
                "Да, можно начать с бесплатных курсов и упражнений: https://ru.hexlet.io/courses_free. Затем оформить подписку, чтобы открыть весь каталог и дополнительную практику.",
            },
            {
              question: "Есть ли поддержка и проверка кода?",
              answer:
                "Да. В подписку входит AI-ассистент, который помогает разбирать ошибки, объясняет решения и поддерживает в сложных темах 24/7. Если нужна живая помощь, можно обратиться в техподдержку и сообщество разработчиков.",
            },
            {
              question: "Можно ли отменить подписку в любой момент?",
              answer:
                "Да. Подписка работает по SaaS-модели: отменить ее можно в любое время в личном кабинете без штрафов и скрытых условий. После отмены следующее списание не произойдет.",
            },
          ]}
        />
      </RevealSection>

      {/* 10. Начните прокачку навыков сегодня */}
      <RevealSection className="section-soft">
        <Cta10
          className="py-16 md:py-20"
          heading="Начните прокачку навыков сегодня!"
          description="Оформите подписку и получите доступ ко всем 56 навыкам Hexlet. Чем раньше начнёте, тем быстрее увидите результат в работе и карьере."
          buttons={{
            primary: {
              text: "Хочу прокачаться!",
              url: "#pricing",
            },
          }}
        />
      </RevealSection>
    </main>
  );
}
