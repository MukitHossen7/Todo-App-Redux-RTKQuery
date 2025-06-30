export interface ITasks {
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}
