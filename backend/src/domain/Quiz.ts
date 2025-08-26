import { TQuestion } from "./TQuestion.js";
import { TQuiz } from "./TQuiz.js";

export class Quiz {
  public readonly uuid?: string;
  public readonly title: string;
  public readonly questions: TQuestion[];
  public readonly createdAt: Date;

  constructor(props: TQuiz) {
    this.uuid = props.uuid;
    this.title = props.title;
    this.questions = props.questions;
    this.createdAt = props.createdAt;
  }
}
