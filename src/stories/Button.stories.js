import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'SYNDEX/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'CENTER',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button Primary",
    background: "brandRed",
    backgroundColor: "#F24137",
  },
};

export const Secondary = {
  args: {
    label: "Button Secondary",
    backgroundColor: "#ffffff",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
    backgroundColor: "#F24137",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
    backgroundColor: "#F24137",
  
  },
};
