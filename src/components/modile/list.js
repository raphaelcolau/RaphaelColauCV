import React from 'react';
import Draggable from 'react-draggable';
import Projectmodal from './modal.js';
const projects = require('../../projects.json');

//TODO Le scroll est réparer mais il y a des problèmes de saccades sur l'axe Y dans la liste

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionX: Array(projects.list.length).fill(0)
        }
        this.handleStop=this.handleStop.bind(this);
        this.handleDrag=this.handleDrag.bind(this);
        this.scrollRef = React.createRef();
    }

    handleStop(e, ui) {
        setTimeout(() => {
            const index = Number(ui.node.id);
            var { positionX } = this.state;
    
            positionX[index] = 0; 
            this.setState({ positionX: [...positionX]})
        }, 2000)
    }

    handleDrag(e, ui) {
        if ((ui.deltaY > 1) || (ui.deltaY < -1)) {
            this.scrollRef.current.scrollTop += (ui.deltaY * -1);
        }

        const index = Number(ui.node.id);
        var { positionX } = this.state;

        positionX[index] += ui.deltaX; 
        this.setState({ positionX: [...positionX]})
    }

    render() {
        return(
            <div className="m-project-list" ref={this.scrollRef}>
                {projects.list.map((p, index) => {
                    return(
                        <div className='dragzone' key={index}>
                            <Projectmodal project={p} index={index} positionX={this.state.positionX[index]}/>

                            <Draggable
                                axis="x"
                                bounds={{left: 0, right: 100}}
                                position={{x: this.state.positionX[index], y: 0}}
                                onStop={this.handleStop}
                                onDrag={this.handleDrag}
                            >
                                
                                <div className='p-element-m' id={`${index}`}>
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