import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hnapi from '../utils/yhnapi';
import Dropzone from 'react-dropzone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import Cropper from 'react-cropper';
import RaisedButton from 'material-ui/RaisedButton';
import DataVisualizer from './DataVisualizer';
import 'cropperjs/dist/cropper.css';
import '../styles/cropimage.css';
class ScanBatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filesToBeSent: [],
            imagePreviewUrl: '',
            isLoading: true,
            cropData: '',
            ocrData:[{
                "ocrname":"firstname",
                "coordinates":"{x:12,y:12,w:12,h:12}"
            },
            {
                "ocrname":"drivinglicense",
                "coordinates":"{x:12,y:12,w:12,h:12}"
            },
            {
                "ocrname":"firstname",
                "coordinates":"{x:12,y:12,w:12,h:12}"
            }
        ]
        }
    }


    _crop(data) {

        this.setState({
            cropData: data.detail,
        })

    }

    getCropAreaImageData() {
        console.log("Clicked", this.state.cropData);

    }

    componentDidMount() {
        this.setState({ isLoading: false })
    }


    onDrop(acceptedFiles, rejectedFiles) {
        let filesToBeSent = this.state.filesToBeSent;
        filesToBeSent.push(acceptedFiles);

        this.setState({
            filesToBeSent: filesToBeSent,
            imagePreviewUrl: acceptedFiles[0].preview
        })


    }



    render() {
        return (
            <div>
                <div className="dropzone">
                    <Dropzone onDrop={(files) => this.onDrop(files)}>
                        <div className="dropsubtext" >Drop a file here or click to upload</div>
                    </Dropzone>
                </div>

                <Cropper
                    src={this.state.imagePreviewUrl}
                    crop={this._crop.bind(this)}
                    aspectRatio={16 / 9}
                    ref='cropper'
                    guides={false} />
                <RaisedButton label="Fix Coordinates" secondary={true} onClick={this.getCropAreaImageData.bind(this)} />
                <DataVisualizer coordinateData={this.state.ocrData}/>
            </div>
        );
    }
}

export default ScanBatch;
