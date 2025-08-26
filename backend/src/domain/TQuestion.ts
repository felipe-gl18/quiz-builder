import { TOptions } from "./TOption.js";

export type TQuestion = {
  id?: number;
  title: string;
  type: "multiple_choice" | "true_false" | "short_answer";
  options: TOptions[];
};
