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
import { Hero243 } from "@/components/hero243";
import { Feature43 } from "@/components/feature43";
import { Pricing2 } from "@/components/pricing2";
import { RevealSection } from "@/components/reveal-section";

export default function Home() {
  return (
    <main className="landing-shell">
      <RevealSection>
        <Hero243
        headingStart="Подписка на курсы"
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
      <RevealSection className="section-soft">
        <Feature43
        title="Что вы получаете в подписке"
        buttonText="Оформить подписку"
        buttonUrl="#pricing"
        className="py-16 md:py-20"
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
      </RevealSection>
      <RevealSection className="section-tint">
        <Feature43
        title="Какие результаты даёт подписка"
        buttonText="Начать обучение"
        buttonUrl="#pricing"
        className="py-16 md:py-20"
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
      </RevealSection>
      <RevealSection>
        <Pricing2
        sectionId="pricing"
        heading="Тарифы подписки Hexlet"
        description="Выберите удобный формат и получите доступ ко всем 56 навыкам каталога."
        className="py-16 md:py-20"
        plans={[
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
        ]}
      />
      </RevealSection>
      <RevealSection className="section-soft">
        <Feature15 className="py-16 md:py-20" />
      </RevealSection>
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
      <RevealSection className="section-soft">
        <Cta10
        className="py-16 md:py-20"
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
      </RevealSection>
    </main>
  );
}
