import React from "react";
import { storiesOf } from "@storybook/react";
import VHText from ".";

storiesOf("Components|Text", module)
    .add("Types", () => (
        <div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'h1'}  text="H1 - Nunito Sans - 48 - light " onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'h2'} style={{marginBottom: '24px'}} text="H2 - Nunito Sans - 34 - Light" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'h3'} style={{marginBottom: '24px'}} text="H3 - Nunito Sans - 24 - Regular" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'h4'} text="H4 - Nunito Sans - 22 - Bold" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'h5'} text="H5 - Nunito Sans - 22 - Regular" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'h6'} text="H6 - Nunito Sans - 20 - Regular" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'subtitle1'} text="Subtitle1  - Roboto - 18 - Regular" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'subtitle2'} text="Subtitle2 - Roboto - 16 - Bold" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'subtitle3'} text="Subtitle3 - Roboto - 16 - light" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'BodyWeb'} text="BodyWeb - Roboto - 16 - Regular" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'platform1'} text="Platform1 - Roboto - 14 - Regular" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'platform2'} text="Platform2 - Roboto - 14 - Bold" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            <div style={{marginBottom: '12px'}}>
                <VHText variant={'caption'} text="Caption - Roboto - 12 - Regular" onEvent={e => {
                    console.log(e)
                }} />
            </div>
            
            
        </div>
    ));
