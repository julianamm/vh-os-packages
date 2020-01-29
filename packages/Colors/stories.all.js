import React from 'react';
import { storiesOf } from '@storybook/react';
import Color from '.';

storiesOf('Colors|All', module)
  .add('All VHcolors', () => (
    <div>
        <div style={{display: 'flex'}}>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.gradient.h,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        gradient/ H:
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.gradient.v,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        gradient/ V:
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.gradient.d,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        gradient/ D:
    </div>
    </div>
        <div style={{display: 'flex'}}>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.primary.light,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        Primay/ light
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.primary.main,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        Primay/ main
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.primary.dark,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        Primay/ Dark
    </div>

    </div>
    <div style={{display: 'flex'}}>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.tertiary.light,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        tertiary/ light
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.tertiary.main,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        tertiary/ main
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.tertiary.dark,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        tertiary/ Dark
    </div>
    </div>
        <div style={{display: 'flex'}}>
        <div style={{
            height: "120px",
            width: "120px",
            borderRadius: "6px",
            background: Color.warning.light,
            color: "#fff",
            padding: "8px",
            margin: "8px"
        }}>
            warning/ light
        </div>
        <div style={{
            height: "120px",
            width: "120px",
            borderRadius: "6px",
            background: Color.warning.main,
            color: "#fff",
            padding: "8px",
            margin: "8px"
        }}>
            warning/ main
        </div>
        <div style={{
            height: "120px",
            width: "120px",
            borderRadius: "6px",
            background: Color.warning.dark,
            color: "#fff",
            padding: "8px",
            margin: "8px"
        }}>
            warning/ Dark
        </div>
    </div>
    <div style={{display: 'flex'}}>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.secondary.light,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        secondary/ light
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.secondary.main,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        secondary/ main
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.secondary.dark,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        secondary/ Dark
    </div>
    </div>
    <div style={{display: 'flex'}}>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.danger.light,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        Danger/ light
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.danger.main,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        Danger/ main
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.danger.dark,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        Danger/ Dark
    </div>
    </div>
    <div style={{display: 'flex'}}>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.success.light,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        success/ light
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.success.main,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        success/ main
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.success.dark,
        color: "#fff",
        padding: "8px",
        margin: "8px"
    }}>
        success/ Dark
    </div>
    </div>
    <div style={{display: 'flex'}}>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A100,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A100`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A90,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A90`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A80,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A80`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A70,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A70`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A60,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A60`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A50,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A50`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A40,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A40`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A30,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A30`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A20,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A20`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A10,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A10`}
    </div>
    <div style={{
        height: "120px",
        width: "120px",
        borderRadius: "6px",
        background: Color.black.A5,
        color: "#fff",
        padding: "8px",
        marginRight: "8px"
    }}>
        {`black/ A5`}
    </div>


    </div>
    </div>
  ))