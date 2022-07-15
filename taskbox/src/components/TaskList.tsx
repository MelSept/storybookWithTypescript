import { ReactElement } from "react";
import Task, { TaskProps } from "./Task";

export interface TaskList {
  loading: boolean;
  tasks: Array<TaskProps["task"]>;
  onPinTask: TaskProps["onPinTask"];
  onArchiveTask: TaskProps["onArchiveTask"];
}

const TaskList = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskList): ReactElement => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;
