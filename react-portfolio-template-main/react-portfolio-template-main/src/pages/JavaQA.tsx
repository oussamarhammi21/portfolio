import QuestionAnswer from "../components/QuestionAnswer";
import { qaList } from "@/config/qaData";
import { useI18n } from "@/i18n/LanguageProvider";

function JavaQA() {
  const { t } = useI18n();
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        {t({ en: "Java interview questions and answers", fr: "Questions et réponses d'entrevue Java" })}
      </h1>
      {qaList.map((qa, index) => (
        <QuestionAnswer
          key={index}
          index={index}
          question={t(qa.question)}
          answer={t(qa.answer)}
          code={qa.code}
          htmlAnswer={qa.htmlAnswer}
        />
      ))}
    </main>
  );
}

export default JavaQA;
