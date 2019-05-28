import React from "react"

const MobileBio = ({ tagline, author }) => {
    return (
        <div className="mobile-bio-main">
            <div className="text-center">
                <p className="d-inline p-4"><a className="text-dark" href="/">Blog Home</a></p>
                <p className="d-inline p-4"><a className="text-dark" href="/">About</a></p>
                <p className="d-inline p-4"><a className="text-dark" href="/">Contact</a></p>
            </div>
        </div>
    )
}

export default MobileBio