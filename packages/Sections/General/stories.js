import React from "react";
import { storiesOf } from "@storybook/react";
import VHGeneralSection from ".";

const items = [
    {
      color: '#00B8D9',
      isFixed: true,
      label: 'Item 1',
      value: 'c'
    },
    {
      color: '#0052CC',
      isDisabled: false,
      label: 'Item 2',
      value: 'b'
    },
    {
      color: '#0052CC',
      isDisabled: true,
      label: 'Item 3',
      value: 'o'
    },
  ]

storiesOf("Sections|General", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHGeneralSection
                controls={{
                    gender: {
                        loading: false,
                        preLoading: false,
                        error: true,
                        success: false,
                        message: 'Database error'
                    },
                    citizenship: {
                        preLoading: false,
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    location: {
                        preLoading: false,
                        loading: true,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    phone: {
                        preLoading: true,
                        loading: true,
                        error: false,
                        success: false,
                        message: 'Database error'
                    }
                }}
                options={{
                    gender: {
                        items: items,
                        currentItem: [items[1]]
                    },
                    currentLocation: {
                        items: items,
                        currentItem: [items[0]]
                    },
                    citizenship: {
                        items: items,
                        currentItem: [items[2]]
                    },
                }}
                phone="+1 778 834 7347"
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    )).add("Initial", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHGeneralSection
                controls={{
                    gender: {
                        loading: false,
                        preLoading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    citizenship: {
                        preLoading: false,
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    location: {
                        preLoading: false,
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    phone: {
                        preLoading: false,
                        loading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    }
                }}
                options={{
                    gender: {
                        items: items,
                        currentItem: [items[1]]
                    },
                    currentLocation: {
                        items: items,
                        currentItem: [items[0]]
                    },
                    citizenship: {
                        items: items,
                        currentItem: [items[2]]
                    },
                }}
                phone="+1 778 834 7347"
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ));