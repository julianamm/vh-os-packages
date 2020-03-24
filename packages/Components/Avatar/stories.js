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
      onEvent={e => {

      }}
    />
  ))
  .add("VHAvatar cursor default", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"md"}
      showCursor={true}
    />
  ))
  .add("VHAvatar sm", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"sm"}
      showCursor={true}
    />
  ))
  .add("VHAvatar md", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"md"}
      showCursor={true}
    />
  ))
  .add("VHAvatar lg", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"lg"}
      showCursor={true}
    />
  ))
  .add("VHAvatar xs", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xs"}
      showCursor={true}
    />
  ))
  .add("VHAvatar xl", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xl"}
      showCursor={true}
    />
  ))
  .add("VHAvatar xxl", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xxl"}
      showCursor={true}
    />
  ))
  .add("VHAvatar xxl uploading 0", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xxl"}
      showCursor={true}
      uploading={0}
    />
  ))
  .add("VHAvatar xxl uploading 50", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xxl"}
      showCursor={true}
      uploading={50}
    />
  ))

  .add("VHAvatar xxl uploading 96", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xxl"}
      showCursor={true}
      uploading={96}
    />
  ))

  .add("VHAvatar xxl uploading 100", () => (
    <VHAvatar
      image={
        "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
      }
      size={"xxl"}
      showCursor={true}
      uploading={100}
    />
  ))
