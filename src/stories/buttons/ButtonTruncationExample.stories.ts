import { fn } from "@storybook/test";
import ButtonTruncation from "../../components/buttons/ButtonTruncation";

export default {
  title: "Example/ButtonTruncation",
  component: ButtonTruncation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Button_Truncation = {};
