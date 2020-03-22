import React from "react";
import { storiesOf } from "@storybook/react";
import VHLanguageList from "./index";

const items = [
    {
        description: "Vue.js"
    },
    {
        description: "Python"
    },
    {
        description: "Ruby on Rails"
    },
    {
        description: "C#"
    },
    {
        description: "Jquery"
    }
]

const values = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

const currentItem = [items[4]]

storiesOf("Components|Secondary List", module)
    .add("Types", () => {
        return (
            <VHLanguageList
                items={items} 
                data="vanhack" />
        );
    });
