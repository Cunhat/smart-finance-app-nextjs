import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SideBar } from "../components/SideBar";

export default {
  title: "Example/SideBar",
  component: SideBar,
  argTypes: {
    data: [
      {
        title: "Dashboard",
        path: "/dashboard",
      },
      {
        title: "Transactions",
        path: "/transactions",
      },
      {
        title: "Settings",
        path: "/settings",
      },
    ],
  },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Transactions",
      path: "/transactions",
    },
    {
      title: "Settings",
      path: "/settings",
    },
  ],
};
