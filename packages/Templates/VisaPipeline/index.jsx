import React, { Component } from 'react';
import PropTypes from 'prop-types'
import VHColumn from '../../Components/Column/index'
import * as S from './styles';
import { Row } from '../../Grid';

class VHVisaPipelineTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 0,
            currentIndex: -1,
            droppedBoard: -1,
            draggedBoard: -1,
            draggedTarget: '',
            droppedTarget: '',
            currentDrag: -1,
            addPosition: 'fistAll',
            render: true
        }
    }

    shouldComponentUpdate = (np, ne) => {
        return true
    }

    _resetActionsHandle = () => {
        this.setState({
          currentPosition: 0,
          currentIndex: -1,
          droppedBoard: -1,
          draggedBoard: -1,
          draggedTarget: '',
          droppedTarget: '',
          currentDrag: -1,
          addPosition: 'fistAll',
          render: false
        })
      }
    
    
      _eventHandle = e => {
        this.props.appHandleEvents(e)
        // switch (true) {
        // }
      }
    
      _onDragOver = ev => {
        ev.preventDefault();
      }
    
      _onDragStart = (ev, id, index, draggedBoard, draggedTarget) => {
        this.setState({currentDrag: id, currentIndex: index, draggedBoard, draggedTarget})
        ev.dataTransfer.setData("text", ev.target.id);
        ev.dataTransfer.dropEffect = "move";
      }
    
      _onDragEnter = (droppedBoard, droppedTarget) => {
        this.setState({droppedBoard, droppedTarget})
      }
    
      _onDragLeave = ev => {
          // console.log('dragLeave', ev.target.offsetTop, ev.clientY)
        if (ev.target.offsetTop < ev.clientY) {
            // console.log('vou inserir em baixo')
            this.setState({addPosition: 'bottom'})
        } else {
            // console.log('vou inserir em cima')
            this.setState({addPosition: 'top'})
        }
      }
    
      _onDrop = ev => {
        ev.preventDefault();
    
        this.props.changeVisaPipelineCardPosirion(
            this.state.addPosition
          , this.state.draggedBoard
          , this.state.draggedTarget
          , this.state.currentIndex
          , this.state.droppedTarget
          , this.state.droppedBoard
          , this.state.currentPosition
        )
    
      }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {this.props.data.map((column) =>
                        <VHColumn column={column}
                            onDrop={this._onDrop}
                            onDragLeave={this._onDragLeave}
                            onDragOver={this._onDragOver}
                            onDragStart={this._onDragStart}
                            onDragEnter={this._onDragEnter}></VHColumn>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

VHVisaPipelineTemplate.defaultProps = {
}

VHVisaPipelineTemplate.propTypes = {
}

export default VHVisaPipelineTemplate
