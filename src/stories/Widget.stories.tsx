import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Widget } from "../components/Widget";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Widget",
  component: Widget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: <div>Tetse</div>,
  },
} as ComponentMeta<typeof Widget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Widget> = (args) => (
  <div style={{ height: "100%", width: "300px" }}>
    <Widget>{args.children}</Widget>
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <div>Tetse</div>,
};
