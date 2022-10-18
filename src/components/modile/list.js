import React from 'react';
import Draggable from 'react-draggable';
const projects = require('../../projects.json');

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionX: 0
        }
        this.handleStop=this.handleStop.bind(this);
        this.handleDrag=this.handleDrag.bind(this);
    }

    handleStop(event) {
        setTimeout(() => {
            this.setState({ positionX: 0})
        }, 1000)
    }

    handleDrag(e, ui) {
        const x = this.state.positionX;
        this.setState({positionX:
            x + ui.deltaX
        })
    }

    render() {
        return(
            <div className="m-project-list">
                {projects.list.map((p, index) => {
                    return(
                        <div className='dragzone' key={index}>
                            <Draggable
                                axis="x"
                                bounds={{left: 0, right: 100}}
                                position={{x: this.state.positionX, y: 0}}
                                onStop={this.handleStop}
                                onDrag={this.handleDrag}
                            >
                                <div className='p-element-m' id={`element${index}`}>
                                    <div>
                                        {p.name}
                                    </div>
                                </div>
                            </Draggable>
                        </div>
                    )
                })}
            </div>
        )
    }
}