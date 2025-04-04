import { I_TodoItem } from "@/interfaces/todoInterfaces";
import style from "./TodoItem.module.scss";

const TodoItem: React.FC<I_TodoItem> = ({ item, onStatusChange, onDoubleClick }) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className={style.todoItem} onDoubleClick={() => onDoubleClick(item)}>
      <div className={style.todoContent}>
        <input
          type="checkbox"
          checked={item.status}
          onChange={() => onStatusChange(item.id)}
          className={style.checkbox}
        />
        <div>
          <h3 className={item.status ? `${style.title} ${style.completed}` : style.title}>
            {item.title}
          </h3>
          <p
            className={item.status ? `${style.description} ${style.completed}` : style.description}
          >
            {item.description}
          </p>
          <span className={style.date}>Created: {formatDate(item.dateCreate)}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
