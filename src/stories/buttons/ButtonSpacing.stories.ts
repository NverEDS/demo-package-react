import { fn } from "@storybook/test";
import ButtonSpacing from "../../components/buttons/ButtonSpacing";

export default {
  title: "Example/ButtonSpacing",
  component: ButtonSpacing,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Button_Spacing = {};
