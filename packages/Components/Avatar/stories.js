import React from "react";
import { storiesOf } from "@storybook/react";
import VHAvatar from ".";


storiesOf("Components|Avatar", module)
  .add("VHAvatar cursor pointer", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"md"}
      showCursor={true}
    />
  ))
  .add("VHAvatar cursor default", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"md"}
      showCursor={false}
    />
  ))
  .add("VHAvatar sm", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"sm"}
      showCursor={false}
    />
  ))
  .add("VHAvatar md", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"md"}
      showCursor={false}
    />
  ))
  .add("VHAvatar lg", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"lg"}
      showCursor={false}
    />
  ))
  .add("VHAvatar xs", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xs"}
      showCursor={false}
    />
  ))
  .add("VHAvatar xl", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xl"}
      showCursor={false}
    />
  ))
  .add("VHAvatar xxl", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xxl"}
      showCursor={false}
    />
  ));
