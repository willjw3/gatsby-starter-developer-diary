import React from "react"

import "./tags.css"
import { Link } from "gatsby";

const TechTag = (props) => {
    const { tag, tech, name, size, color } = props

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button
                    className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} style={{fill: `${color}`}}>
                            <title>{tech}</title>
                            <path
                                d={name} />
                        </svg></div>
                </button>
            </Link>

        </div>

    )
}

export default TechTag