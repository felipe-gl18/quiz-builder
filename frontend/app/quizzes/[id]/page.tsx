"use client";

import { use, useEffect, useState } from "react";
import styles from "./quiz.module.css";
import { useParams } from "next/navigation";

interface Option {
  id: number;
  questionId: number;
  text: string;
}

interface Question {
  id: number;
  quizId: string;
  title: string;
  type: "multiple_choice" | "true_false" | "short_answer";
  options: Option[];
}

interface QuizData {
  uuid: string;
  title: string;
  createdAt: string;
  questions: Question[];
}

export default function Quiz() {
  const params = useParams();
  const quizId = params.id;

  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const res = await fetch(`http://localhost:3001/quizzes/${quizId}`); // Exemplo
        if (!res.ok) throw new Error("Error fetching quiz");
        const data = await res.json();
        setQuiz(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuiz();
  }, []);

  const Options = ({
    type,
    options,
  }: {
    type: "multiple_choice" | "true_false" | "short_answer";
    options: Option[];
  }) => {
    switch (type) {
      case "multiple_choice":
        return (
          <div>
            {options.map((option) => (
              <label key={option.id} className={styles.label}>
                <input type="checkbox" value={option.text} />
                <p className={styles.optionLabelText}>{option.text}</p>
              </label>
            ))}
          </div>
        );
      case "true_false":
        return (
          <div>
            <label className={styles.label}>
              <input type="radio" value="true" />
              <p className={styles.optionLabelText}>True</p>
            </label>
            <label className={styles.label}>
              <input type="radio" value="false" />
              <p className={styles.optionLabelText}>False</p>
            </label>
          </div>
        );
      case "short_answer":
        return <input type="text" className={styles.input} />;
      default:
        return null;
    }
  };

  if (loading) return <p className={styles.container}>Loading quiz...</p>;
  if (!quiz) return <p className={styles.container}>Quiz not found.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{quiz.title}</h1>
      <ul className={styles.questionsList}>
        {quiz.questions.map((question) => (
          <li key={question.id} className={styles.questionItem}>
            <p className={styles.questionTitle}>{question.title}</p>
            {question.options.length > 0 && (
              <ul className={styles.optionsList}>
                <Options options={question.options} type={question.type} />
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
