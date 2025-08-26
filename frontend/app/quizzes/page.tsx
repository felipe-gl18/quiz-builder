"use client";

import { useEffect, useState } from "react";
import styles from "./quizzes.module.css";
import { TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { PiPlusCircle } from "react-icons/pi";

interface Quiz {
  uuid: string;
  title: string;
  createdAt: string;
  _count: { questions: number };
}

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const router = useRouter();

  async function deleteQuiz(uuid: string) {
    try {
      const res = await fetch(`http://localhost:3001/quizzes/${uuid}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        console.log(res.text, res.status, res.statusText);

        throw new Error("Error deleting quiz");
      }
      await refreshQuizzes();
    } catch (err) {
      console.error(err);
    }
  }

  async function redirectToQuiz(uuid: string) {
    router.push(`/quizzes/${uuid}`);
  }

  async function redirectToCreateQuiz() {
    router.push(`/create`);
  }

  async function refreshQuizzes() {
    const res = await fetch("http://localhost:3001/quizzes");
    if (!res.ok) throw new Error("Error fetching quizzes");
    const data = await res.json();
    setQuizzes(data);
  }

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        await refreshQuizzes();
      } catch (err) {
        console.error(err);
      }
    }

    fetchQuizzes();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quizzes</h1>
      <PiPlusCircle
        size={24}
        className={styles.addIcon}
        onClick={redirectToCreateQuiz}
      />
      <ul className={styles.list}>
        {quizzes.map((quiz) => (
          <li
            key={quiz.uuid}
            className={styles.item}
            onClick={() => redirectToQuiz(quiz.uuid)}
          >
            <h2 className={styles.quizTitle}>{quiz.title}</h2>
            <p className={styles.quizInfo}>{quiz._count.questions} questions</p>
            <TbTrash
              className={styles.deleteIcon}
              size={24}
              onClick={(e) => {
                e.stopPropagation();
                deleteQuiz(quiz.uuid);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
