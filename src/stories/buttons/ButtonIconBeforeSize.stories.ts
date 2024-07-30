import { fn } from "@storybook/test";
import ButtonIconBeforeSize from "../../components/buttons/ButtonIconBeforeSize";

export default {
  title: "Example/ButtonIconBeforeSize",
  component: ButtonIconBeforeSize,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Button_Icon_Before_Size = {
  args: {
    appearance: "warning",
  },
};
