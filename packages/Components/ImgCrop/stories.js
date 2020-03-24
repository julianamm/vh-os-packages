import React from 'react'
import { storiesOf } from '@storybook/react'
import UploadChunkManager from './../../util/UploadChunkManager'
const baseDomain = 'https://api.vanhack.dev'
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY1MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJkdXJhbmRAdmFuaGFjay5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImVlMGI0YzIwLTc1NDQtNDU1YS1hMzM1LWI0NmM4YWNiNzE3OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6IjY1MiIsImp0aSI6IjdmODE3NDdjLTRkODktNGQyNy1iODBhLWIxODY4N2IxNDgxOSIsImlhdCI6MTU4NTA2ODg1MSwidG9rZW5fdmFsaWRpdHlfa2V5IjoiM2UxNzEwNjMtZjM5OC00OGVjLWEzYzItYTdjMjlmNzNhNjViIiwidXNlcl9pZGVudGlmaWVyIjoiNjUyQDEiLCJuYmYiOjE1ODUwNjg4NTEsImV4cCI6MTU4NTE1NTI1MSwiaXNzIjoiVmFuSGFjayIsImF1ZCI6IlZhbkhhY2sifQ.hhK8pcRDF4YLTrh7VD6UQ4dJjwy5X0cKPNipyvSueMI"
import VHImg from '.'

storiesOf('Source|Img Crop', module)

.add('VHImg Crop Avatar', () => (
    <VHImg
        source="http://via.placeholder.com/200x200"
        data={{
            context: 2,
        }}
        uploading={100}
        acceptTypes={"image/*"}
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

            AvatarUpload.setAccessToken(accessToken)
            AvatarUpload.setFile(e.src)
            AvatarUpload.upload()
        }}
    />
))
.add('VHImg Crop Certificate', () => (
    <VHImg
        source="http://via.placeholder.com/200x200"
        data={{
            context: 1,
            contextData: 1,
        }}
        acceptTypes={"image/*"}
        onEvent={e => {
            console.log(e)
            let AvatarUpload = new UploadChunkManager({firstName: 'Durand'})
            console.log(AvatarUpload)

            AvatarUpload.setDebugMode()
            AvatarUpload.config({
                context: e.data.context,
                fileName: e.fileName,
                contextData: e.data.contextData,
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

            AvatarUpload.setAccessToken(accessToken)
            AvatarUpload.setFile(e.src)
            AvatarUpload.upload()
        }}
    />
))
