import '../../styles/list.css';

const projects = require('../../projects.json');

export default function Projectlist() {
    return (
        <div className="list">
            {projects.list.map( p => {
                return(
                    <div className="p-element">

                        <div className="text">
                            {p.name}
                        </div>

                        <div className="description only-hov">
                            {p.description}
                        </div>

                        <div className="stack only-hov">
                            {p.stack.map( techno => {
                                return (
                                    <span>
                                        {techno}
                                    </span>
                                )
                            })}
                        </div>

                        <div className="bottom-bar only-hov">
                            {p.src ?
                                <a href={p.url} rel="noreferrer" target="_blank">
                                    SRC
                                </a>
                            : <></>}
                            <a href={p.url} rel="noreferrer" target="_blank">
                                LINK
                            </a>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}