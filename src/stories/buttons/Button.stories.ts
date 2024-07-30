import { fn } from "@storybook/test";
import Button from "../../components/buttons";
import StarFilledIcon from "@atlaskit/icon/glyph/star-filled";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    primary: true,
    label: "Button",
    background: "#222222",
  },
};
export const Primary = {
  args: {
    primary: true,
    label: "Button",
    appearance: "primary",
  },
};
export const Subtle = {
  args: {
    subtle: true,
    label: "Button",
    appearance: "subtle",
  },
};
export const Warning = {
  args: {
    warning: true,
    label: "Button",
    appearance: "warning",
  },
};
export const Danger = {
  args: {
    danger: true,
    label: "Button",
    appearance: "danger",
  },
};
export const Disable = {
  args: {
    appearance: "primary",
    label: "Button",
    isDisabled: true,
  },
};

export const Selected = {
  args: {
    label: "Button",
    isSelected: true,
  },
};

export const FullWidthButton = {
  args: {
    shouldFitContainer: true,
    appearance: "primary",
  },
};
export const IconBefore = {
  args: {
    iconBefore: StarFilledIcon,
    appearance: "primary",
  },
};
export const IconAfter = {
  args: {
    iconAfter: StarFilledIcon,
    appearance: "primary",
  },
};
