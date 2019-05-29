import React from "react"
import { Link } from "gatsby"

const MobileBio = () => {
    return (
        <div className="mobile-bio-main">
            <div className="text-center">
                <p className="d-inline p-4"><Link to="/"><span className="text-dark">Blog Home</span></Link></p>
                <p className="d-inline p-4"><Link to="/"><span className="text-dark">About</span></Link></p>
                <p className="d-inline p-4"><Link to="/"><span className="text-dark">Archives</span></Link></p>
            </div>
        </div>
    )
}

export default MobileBio


