import React from "react";
import { storiesOf } from "@storybook/react";
import VHUserAvatar from ".";
import UploadChunkManager from './../../util/UploadChunkManager'
const baseDomain = 'https://api.vanhack.dev'
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY1MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJkdXJhbmRAdmFuaGFjay5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImVlMGI0YzIwLTc1NDQtNDU1YS1hMzM1LWI0NmM4YWNiNzE3OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6IjY1MiIsImp0aSI6IjdmODE3NDdjLTRkODktNGQyNy1iODBhLWIxODY4N2IxNDgxOSIsImlhdCI6MTU4NTA2ODg1MSwidG9rZW5fdmFsaWRpdHlfa2V5IjoiM2UxNzEwNjMtZjM5OC00OGVjLWEzYzItYTdjMjlmNzNhNjViIiwidXNlcl9pZGVudGlmaWVyIjoiNjUyQDEiLCJuYmYiOjE1ODUwNjg4NTEsImV4cCI6MTU4NTE1NTI1MSwiaXNzIjoiVmFuSGFjayIsImF1ZCI6IlZhbkhhY2sifQ.hhK8pcRDF4YLTrh7VD6UQ4dJjwy5X0cKPNipyvSueMI"
const accessTokenPRD = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY1MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJkdXJhbmRAdmFuaGFjay5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImVlMGI0YzIwLTc1NDQtNDU1YS1hMzM1LWI0NmM4YWNiNzE3OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJBZG1pbiIsIkVuZ2xpc2hUZXN0Q29uc3VsdGFudCJdLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwic3ViIjoiNjUyIiwianRpIjoiODQ4MDUzYTMtYjg4NS00MGQwLTkxNmEtNDY1MzZiYmQ1Y2JiIiwiaWF0IjoxNTg1MDEzNDQ0LCJ0b2tlbl92YWxpZGl0eV9rZXkiOiIxYjZlYjY2Ni0xZmJmLTQxMDAtYjc2Mi03YjhkZDlhY2U2ZGIiLCJ1c2VyX2lkZW50aWZpZXIiOiI2NTJAMSIsIm5iZiI6MTU4NTAxMzQ0NCwiZXhwIjoxNTg1MDk5ODQ0LCJpc3MiOiJWYW5IYWNrIiwiYXVkIjoiVmFuSGFjayJ9.mqpXE0dlK8BWW9d9SS6IJectxvbLqyLMq-6zn58Xnnc"

const candidates = {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Jeff Patterson",
    email: "jeffpatterson@gmail.com",
};

storiesOf("Components|User Avatar", module)
    .add("default", () => (
        <div style={{ padding: "24px" }}>
            <VHUserAvatar
                avatar= {candidates.avatar}
                name= {candidates.name}
                email= {candidates.email}
                uploading={100}
                onEvent={e => {
                    console.log(e)
                    let AvatarUpload = new UploadChunkManager({firstName: 'Durand'})
                    console.log(AvatarUpload)

                    AvatarUpload.setDebugMode()
                    AvatarUpload.config({
                        context: e.data.context,
                        fileName: e.fileName,
                        contextData: '21',
                        createUrl: `${baseDomain}/v1/File/create`,
                        uploadUrl: `${baseDomain}/v1/File/upload`,
                    })

                    AvatarUpload.onChange(response => {
                        console.log('-------------')
                        console.log('ON CHANGE')
                        console.log('')
                        console.log(response.config.contextData, response.uploadPercent)
                        console.log('')
                        console.log('-------------')
                    })

                    AvatarUpload.onComplete(response => {
                        console.log('-------------')
                        console.log('ON COMPLETE')
                        console.log('')
                        console.log(response)
                        console.log('')
                        console.log('-------------')
                    })

                    AvatarUpload.onError(response => {
                        console.log('-------------')
                        console.log('ON ERROR')
                        console.log('')
                        console.log(response)
                        console.log('')
                        console.log('-------------')
                    })

                    AvatarUpload.setAccessToken(accessTokenPRD)
                    AvatarUpload.setFile(e.src)
                    AvatarUpload.upload()
                }}
            />
        </div>
    ));
