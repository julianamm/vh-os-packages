function UploadChunkManager(User) {
  this.User = {}
  this.accessToken = ''
  this.createChunkURL = ''
  this.sessionId = ''
  this.uploadChunkURL = ''
  this.File = {}
  this.BlobFile = {}
  this.abort = false
  this.allowResend = false
  this.cb = () => {}
  this.onError = () => {}
  this.config = {}
  this.chunks = 20
  this.chunkSize = 0
  this.buffers = []
  this.uploading = []
  this.buffersSize = 0
  this.buffersTransferedBytes = 0
  this.uploadPercent = 0
  this.bufferCount = 0
  this.loading = false
  this.abortLimit = 5

  const setup = () => {
    this.chunkSize = 20
    this.buffers = []
    this.bufferCount = 0
    log('setup function called by', this.User.firstName)
  }

  const log = (a, b, c, d, e, f) => {

  }

  const resend = () => {
    log('resend function called by', this.User.firstName)
    resetUpload()
  }

  const resetUpload = () => {
    this.sessionId = ''
    this.BlobFile = {}
    this.abort = false
    this.chunkSize = 0
    this.buffers = []
    this.buffersSize = 0
    this.buffersTransferedBytes = 0
    this.bufferCount = 0
    this.uploading = []
    setFile(this.File)
    getSesisonId()
  }

  const getIsLoading = () => {
    log('this.uploading', this.uploading)
    return this.uploading.length
  }
  const getAllowResend = () => {
    this.allowResend = (this.uploading.length === 0 && this.abort)
    return this.allowResend
  }

  const setFile = File => {
    log('setFile function called by', this.User.firstName, 'with File =>', File)
    this.File = File

    this.BlobFile = new Blob([this.File], {type : this.File.type});
    this.chunkSize = Math.ceil(this.File.size/this.chunks)

    for (let index = 0; index < this.chunks; index++) {
      if (index < this.chunks -1) {
        this.buffers.push({
          blob: this.BlobFile.slice(this.bufferCount, this.chunkSize*(index+1)),
          uploading: false,
          error: false,
          resending: false,
          countError: 0,
        });
      } else {
        this.buffers.push({
          blob: this.BlobFile.slice(this.bufferCount,this.File.size),
          uploading: false,
          error: false,
          resending: false,
          countError: 0,
        });

      }
      this.buffersSize += this.buffers[index].blob.size
      this.bufferCount += this.chunkSize
    }
    log('Processed File', this.buffers)
  }

  const setUser = User => {
    this.User = User
    log('setUser function called by', User.firstName)
  }

  const getCurrentSesisonId = () => {
    return this.sessionId
  }
  const getSesisonId = () => {
    this.loading = true;

    fetch(new Request(this.config.createUrl, { method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + this.accessToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        context: this.config.context,
        contextData: this.config.contextData,
      })
    }))
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.result) {
        this.sessionId = data.result.sessionId
        __calback()

        for (let index = 0; index < this.buffers.length; index++) {
          setTimeout(() => {
            uploadChunk(this.buffers[index], index)
          },100)
        }
      } else {
        this.onError(this)
      }

    }).catch(error => {
      this.onError(this)
  })
  }

  const uploadChunk = (chunk, index) => {
    if (this.abort) {
      if (!chunk.uploading) {
        chunk.error = false
        chunk.resending = false
        chunk.aborted = true
      }
      return
    }

    this.uploading.push(`chunk ${index} => name ${chunk.blob.name}`)

    const myHeaders = {
      'Authorization': 'Bearer ' + this.accessToken,
    };

    const formData = new FormData()

    formData.append('inputFile', chunk.blob)
    formData.append('sessionId', this.sessionId)
    formData.append('chunkNumber', index)

    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
    }

    const myRequest = new Request(`${this.config.uploadUrl}/${this.sessionId}/${index}`, myInit)

    fetch(myRequest)
      .then(res => { return res.json() })
      .then(data => {
        chunk.uploading = data.success
        chunk.error = data.error
        if (data.error) {
          setTimeout(() => {
            chunk.countError ++
            chunk.uploading = false
            chunk.error = false
            chunk.resending = true
            this.uploading.pop()
            if (chunk.countError < this.abortLimit) {
              uploadChunk(chunk, index)
            } else {
              chunk.uploading = false
              chunk.error = false
              chunk.resending = false
              chunk.aborted = true
              this.abort = true
              this.onError(this)
            }
            __calback()
          },500 * chunk.countError)
        } else {
          this.uploading.pop()
          this.buffersTransferedBytes += chunk.blob.size
          this.uploadPercent = `${((this.buffersTransferedBytes / this.buffersSize) * 100).toFixed(0)}`
          checkCompletedTask()
          __calback()

        }
      }).catch(error => {
        this.onError(this)
    })
  }

  const checkCompletedTask = () => {
    if (this.uploading.length === 0) {
      this.onComplete(this)
    }
  }

  const getFile = () => {
    log('getFile function called by', this.User.firstName)
    return this.File
  }

  const getUploadPercent = () => {
    log('getUploadPercent function called by', this.User.firstName)
    return this.uploadPercent
  }

  const getUser = () => {
    log('getUser function called by', this.User.firstName)
    setup()
    return this.User
  }

  const getBufferSize = () => {
    log('getBufferSize function called by', this.User.firstName)
    return this.buffersSize
  }

  const getBuffers = () => {
    log('getBuffers function called by', this.User.firstName)
    return this.buffers
  }

  const config = config => {
    this.config = config
    log('set config function called by', this.User.firstName)
  }

  const onChange = cb => {
    this.cb = cb
  }

  const setAccessToken = accessToken => {
    this.accessToken = accessToken
  }

  const onComplete = cb => {
    this.onComplete = cb
  }

  const onError = cb => {
    this.onError = cb
  }

  const __calback = () => {
    this.cb(this)
  }

  setUser(User)

  return {
    setUser,
    setAccessToken,
    getBuffers,
    getUser,
    setFile,
    getFile,
    getBufferSize,
    onChange,
    onComplete,
    onError,
    upload: getSesisonId,
    getCurrentSesisonId,
    config,
    getIsLoading,
    getAllowResend,
    resend,
    getUploadPercent,
  }
}

export default UploadChunkManager