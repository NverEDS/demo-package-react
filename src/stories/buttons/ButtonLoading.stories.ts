import { fn } from "@storybook/test";
import ButtonLoading from "../../components/buttons/ButtonLoading";

export default {
  title: "Example/ButtonLoading",
  component: ButtonLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Button_Loading = {};
