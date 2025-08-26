"use client";

import { FormEvent, useState } from "react";
import styles from "./create.module.css";
import { TbTrash } from "react-icons/tb";
import { PiPlusCircle } from "react-icons/pi";
import { BiSave } from "react-icons/bi";

interface Option {
  id: number;
  text: string;
}

interface Question {
  id: number;
  title: string;
  type: "multiple_choice" | "true_false" | "short_answer";
  options: Option[];
}

export default function Create() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { id: Date.now(), title: "", type: "multiple_choice", options: [] },
    ]);
  };

  const removeQuestion = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const updateQuestionTitle = (id: number, value: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, title: value } : q))
    );
  };

  const addOption = (questionId: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, options: [...q.options, { id: Date.now(), text: "" }] }
          : q
      )
    );
  };

  const removeOption = (questionId: number, optionId: number) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? { ...q, options: q.options.filter((o) => o.id !== optionId) }
          : q
      )
    );
  };

  const updateOptionText = (
    questionId: number,
    optionId: number,
    value: string
  ) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((o) =>
                o.id === optionId ? { ...o, text: value } : o
              ),
            }
          : q
      )
    );
  };

  const updateQuestionType = (
    id: number,
    value: "multiple_choice" | "true_false" | "short_answer"
  ) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, type: value } : q))
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/quizzes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, questions }),
      });

      if (!res.ok) throw new Error("Failed to create quiz");

      // Aqui podemos só exibir mensagem sem tentar ler JSON
      alert("Your quiz has been created successfully!");

      // resetar formulário
      setTitle("");
      setQuestions([]);
    } catch (err) {
      console.error(err);
      alert("Failed to create quiz.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Quiz</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {questions.map((question) => (
          <div key={question.id} className={styles.questionCard}>
            <input
              className={styles.input}
              placeholder="Question Title"
              value={question.title}
              onChange={(e) => updateQuestionTitle(question.id, e.target.value)}
            />

            <TbTrash
              className={styles.deleteIcon}
              size={24}
              onClick={() => removeQuestion(question.id)}
            />

            <select
              className={styles.input}
              value={question.type || "multiple_choice"}
              onChange={(e) =>
                updateQuestionType(
                  question.id,
                  e.target.value as
                    | "multiple_choice"
                    | "true_false"
                    | "short_answer"
                )
              }
            >
              <option value="multiple_choice">Multiple Choice</option>
              <option value="true_false">True / False</option>
              <option value="short_answer">Short Answer</option>
            </select>

            {question.options.map((option) => (
              <div key={option.id} className={styles.optionRow}>
                <input
                  className={styles.input}
                  placeholder="Option Text"
                  value={option.text}
                  onChange={(e) =>
                    updateOptionText(question.id, option.id, e.target.value)
                  }
                />
              </div>
            ))}
            <button
              type="button"
              className={styles.addButton}
              onClick={() => addOption(question.id)}
            >
              <PiPlusCircle size={24} className={styles.addIcon} />
              Add Option
            </button>
          </div>
        ))}

        <button
          type="button"
          className={styles.addButton}
          onClick={addQuestion}
        >
          <PiPlusCircle size={24} className={styles.addIcon} />
          Add Question
        </button>
        <button type="submit" className={styles.button}>
          <BiSave size={24} className={styles.addIcon} />
          Save Quiz
        </button>
      </form>
    </div>
  );
}
