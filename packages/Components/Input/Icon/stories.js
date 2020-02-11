import React from "react";
import { storiesOf } from "@storybook/react";
import VHInputIcon from ".";

storiesOf("Components|Input/Icon", module)
  .add("default", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHInputIcon
        placeholder="http://Isobelle.com/"
        value="http://Isobelle.com/"
        icon="world"
        data={{}}
        onEvent={() => console.log(event)}
      />
    </div>
  ))
  .add("gitHub", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHInputIcon
        placeholder="http://github.com/"
        value="http://github.com/"
        icon="github"
        data={{}}
        onEvent={() => console.log(event)}
      />
    </div>
  ))
  .add("linkedIn", () => (
    <div style={{width: '80%', marginLeft:'1%', padding: '9px'}}>
      <VHInputIcon
        placeholder="http://linkedIn.com/"
        value="http://linkedIn.com/"
        icon="linkedin"
        data={{}}
        onEvent={() => console.log(event)}
      />
    </div>
  ));
