import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i>Developer Diary is a Gatsby Starter blog template created with web developers in mind, but really, anyone can use it. It's totally usable right out of the box, but minimalist enough to be easily modifiable to suit your needs.</i></p>
                        <br />
                        <h4>Features</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Blazing fast, as you'd expect from a Gatsby site</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Tech tags designed for web developers</p>
                            <div className="ml-5">
                                <TechTag tag="react" tech="React" name="DiReact" size={20} color="deepskyblue" />
                                <TechTag tag="nodejs" tech="Node.js" name="DiNodejsSmall" size={20} color="lightgreen" />
                                <TechTag tag="html" tech="HTML" name="FaHtml5" size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name="DiCss3Full" size={20} color="teal" />
                            </div>  
                        </div>
                        <div className="mt-4">
                            <span className="text-success d-inline-block" title="prism">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Includes Prism for code block styling in markdown files</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="icons">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Developer-relevant social-media icon links including GitHub, Stack Overflow and freeCodeCamp</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="mobile">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Mobile responsive, of course</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage

