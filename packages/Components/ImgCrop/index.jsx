import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import { createGlobalStyle } from 'styled-components'
import reactImageCropCss from 'react-image-crop/dist/ReactCrop.css'
const GlobalStyle = createGlobalStyle`
${reactImageCropCss};
`
import { Container, Row } from '../../Grid'
import VHAvatar from '../Avatar'
import VHButton from '../Button'

class VHImgCrop extends PureComponent {
  state = {
    src: null,
    croppedImageUrlSent: null,
    cropped: false,
    showCropper: false,
    crop: {
      unit: '%',
      width: 10,
      aspect: 1,
    },
    inputFile: React.createRef()
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.setState({showCropper: true, cropped: false}, () => {
      this.imageRef = image;
    })
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, cropped, croppedImageUrlSent, showCropper, croppedImageUrl, src } = this.state;
    // console.log('reactImageCropCss', reactImageCropCss)
    return (
      <div className="imgCrop">
        <GlobalStyle />
        <VHAvatar
          content=""
          image={ croppedImageUrlSent || this.props.source}
          showCursor
          size="xl"
          onEvent={ e => {
            this.setState({cropped: false, src: null, showCropper: false}, () => {
              this.state.inputFile.current.click();
            })
          }}
        />
        {
          showCropper && (
              <VHButton
              className=""
              label="Send"
              onEvent={ e => {
                this.setState({cropped: false, src: null, showCropper: false, croppedImageUrlSent: croppedImageUrl})
                this.props.onEvent({
                  data: this.props.data,
                  src: croppedImageUrl,
                  type: 'onCropped',
                  target: 'VHImgCrop'
                })
              }}
              primary
            />
          )
        }
        <div style={{display: 'none'}}>
          <input ref={this.state.inputFile}  type="file" accept="image/*" onChange={this.onSelectFile} />
        </div>
        {src && !cropped && (
          <ReactCrop
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && cropped && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
      </div>
    );
  }
}

export default VHImgCrop
