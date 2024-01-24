import styles from "./Task.module.css"
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react"

export type TaskType = {
  id: string;
  description: string;
  done?: boolean;
  createdAt: number;
};

export interface TaskProps {
  data: TaskType;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
}

export default function Task({ data, onDelete, onDone }: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        onClick={() => onDone(data.id)}
        className={
          data.done ? styles.checkboxChecked : styles.checkboxUnchecked
        }
      >
        {data.done ? <CheckCircle weight="fill" /> : <Circle />}
      </button>
      <p
        className={
          data.done ? styles.taskDescriptionDone : styles.taskDescriptionUndone
        }
      >
        {data.description}
      </p>
      <button className={styles.removeBtn} onClick={() => onDelete(data.id)}>
        <Trash />
      </button>
    </div>
  );
}
