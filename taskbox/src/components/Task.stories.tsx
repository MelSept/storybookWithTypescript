import Task from "./Task";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Task,
  title: "Task",
} as ComponentMeta<typeof Task>;

// template -> molde (base del documento)
// args argumentos

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

// "..." spread operator copia el contenido de la variable

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task!,
    state: "TASK_PINNED",
  },
};

// ! del lado derecho al finalizar una palabra significa que le aseguras que le vas a pasar ese valor
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task!,
    state: "TASK_ARCHIVED",
  },
};
