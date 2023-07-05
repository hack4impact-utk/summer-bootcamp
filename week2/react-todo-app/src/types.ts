export interface Task {
  id: number;
  name: string;
  completedAt: Date | null; // null if not completed
}
