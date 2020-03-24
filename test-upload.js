const fs = require('fs')
const path = require('path')
const baseDomain = 'https://api.vanhack.dev'
const UploadChunkManager = require('./upload-chunk-compiled').default
const AvatarUpload = new UploadChunkManager({firstName: 'Durand'})

const file = fs.readFileSync(path.join(__dirname, 'packages/assets/general/covers/MaskGroup.png'))

AvatarUpload.config =({
    context: 2,
    // contextData: action.TaskNumber,
    createUrl: `${baseDomain}/v1/File/create`,
    uploadUrl: `${baseDomain}/v1/File/upload`,
  })

AvatarUpload.onChange(response => {
    console.log(response.config.contextData, response.uploadPercent)
})

AvatarUpload.onComplete(response => {
    console.log(response.config.contextData)
    process.exit()
})

AvatarUpload.onError(response => {
    console.log(response.config.contextData)
})

AvatarUpload.setFile(file)
AvatarUpload.upload()

// process.exit()
// const isDefault = action.response.data.result.numberOfTasks === state.numberOfTasks
// const tasks = []
// tasks.push(action.response.data.result.tasks[1])
// tasks.push(action.response.data.result.tasks[2])
// tasks.push(action.response.data.result.tasks[3])
// tasks.push(action.response.data.result.tasks[4])

// const defaultTasks = isDefault ? state.tasks : state.oldTasks
// defaultTasks[0].done = action.response.data.result.tasks[1]
// defaultTasks[1].done = action.response.data.result.tasks[2]
// defaultTasks[2].done = action.response.data.result.tasks[3]
// defaultTasks[3].done = action.response.data.result.tasks[4]

// defaultTasks[0].chunk = new UploadChunkManager(action.user)
// defaultTasks[1].chunk = new UploadChunkManager(action.user)
// defaultTasks[2].chunk = new UploadChunkManager(action.user)
// defaultTasks[3].chunk = new UploadChunkManager(action.user)

// if (!isDefault) {
//   tasks.push(action.response.data.result.tasks[5])
//   defaultTasks[4].done = action.response.data.result.tasks[5]
//   defaultTasks[4].chunk = new UploadChunkManager(action.user)
// }

// const currentTask = defaultTasks[tasks.findIndex(o => o === false)]



// const tasksUploaddedRequest = state.tasks
//       tasksUploaddedRequest[action.TaskNumber - 1].uploading = true

//       tasksUploaddedRequest[action.TaskNumber - 1].chunk.config({
//         context: 0,
//         contextData: action.TaskNumber,
//         createUrl: `${baseDomain}/v1/File/create`,
//         uploadUrl: `${baseDomain}/v1/File/upload`,
//       })

//       tasksUploaddedRequest[action.TaskNumber - 1].chunk.onChange(response => {
//         action.onProgress(response.config.contextData, response.uploadPercent)
//       })

//       tasksUploaddedRequest[action.TaskNumber - 1].chunk.onComplete(response => {
//         action.onComplete(response.config.contextData)
//       })

//       tasksUploaddedRequest[action.TaskNumber - 1].chunk.onError(response => {
//         action.onError(response.config.contextData)
//       })

//       tasksUploaddedRequest[action.TaskNumber - 1].chunk.setFile(action.Video)
//       tasksUploaddedRequest[action.TaskNumber - 1].chunk.upload()