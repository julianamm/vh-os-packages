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
        <div style={{ backgroundColor: "#f7f7f7", height: "100vh", padding: "24px" }}>
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
                phone=""
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    )).add("Initial", () => (
        <div style={{ backgroundColor: "#f7f7f7", height: "100vh", padding: "24px" }}>
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
                phone=""
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    )).add("Error", () => (
        <div style={{ backgroundColor: "#f7f7f7", height: "100vh", padding: "24px" }}>
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
                        error: true,
                        success: false,
                        message: 'Database error'
                    },
                    location: {
                        preLoading: false,
                        loading: false,
                        error: true,
                        success: false,
                        message: 'Database error'
                    },
                    phone: {
                        preLoading: false,
                        loading: false,
                        error: true,
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
                phone=""
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    )).add("Success", () => (
        <div style={{ backgroundColor: "#f7f7f7", height: "100vh", padding: "24px" }}>
            <VHGeneralSection
                controls={{
                    gender: {
                        loading: false,
                        preLoading: false,
                        error: false,
                        success: true,
                        message: 'Database error'
                    },
                    citizenship: {
                        preLoading: false,
                        loading: false,
                        error: false,
                        success: true,
                        message: 'Database error'
                    },
                    location: {
                        preLoading: false,
                        loading: false,
                        error: false,
                        success: true,
                        message: 'Database error'
                    },
                    phone: {
                        preLoading: false,
                        loading: false,
                        error: false,
                        success: true,
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
                phone=""
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    )).add("Loading", () => (
        <div style={{ backgroundColor: "#f7f7f7", height: "100vh", padding: "24px" }}>
            <VHGeneralSection
                controls={{
                    gender: {
                        loading: true,
                        preLoading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    citizenship: {
                        loading: true,
                        preLoading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    location: {
                        loading: true,
                        preLoading: false,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    phone: {
                        loading: true,
                        preLoading: false,
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
                phone=""
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    )).add("Pre-loaging", () => (
        <div style={{ backgroundColor: "#f7f7f7", height: "100vh", padding: "24px" }}>
            <VHGeneralSection
                controls={{
                    gender: {
                        loading: false,
                        preLoading: true,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    citizenship: {
                        loading: false,
                        preLoading: true,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    location: {
                        loading: false,
                        preLoading: true,
                        error: false,
                        success: false,
                        message: 'Database error'
                    },
                    phone: {
                        loading: false,
                        preLoading: true,
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
                phone=""
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ));