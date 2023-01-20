import { Button, ButtonProps } from "./button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    text: {
      description: "The text for the button",
      control: {
        type: "text",
      },
    },
  },
};

const defaultArgs = {
  text: "Button",
  link: "#0",
};

export const Default = {
  args: {
    ...defaultArgs,
  },
};

export const Outline = {
  args: {
    variant: "Outline",
    ...defaultArgs,
  },
};

export const Pill = {
  args: {
    variant: "Pill",
    ...defaultArgs,
  },
};

export const WithIcon = {
  args: {
    variant: "WithIcon",
    ...defaultArgs,
  },
};

export const WithIconOutline = {
  args: {
    variant: "WithIconOutline",
    ...defaultArgs,
  },
};

export const GradientBorder = {
  args: {
    variant: "GradientBorder",
    ...defaultArgs,
  },
};

export const WithIconPill = {
  args: {
    variant: "WithIconPill",
    ...defaultArgs,
  },
};

export const WithIconOutlinePill = {
  args: {
    variant: "WithIconOutlinePill",
    ...defaultArgs,
  },
};

export const GradientBorderPill = {
  args: {
    variant: "GradientBorderPill",
    ...defaultArgs,
  },
};
