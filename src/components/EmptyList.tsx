import { Clipboard } from "@phosphor-icons/react";
import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.empty}>
      <Clipboard />
      <div>
        <p><strong>Você ainda não tem tarefas cadastradas</strong><br/>
        Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
