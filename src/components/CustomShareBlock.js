import PropTypes from "prop-types";
import React from "react";

import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { ShareBlockStandard, ShareButtonIconOnly } from "react-custom-share";

const CustomShareBlock = props => {
    const { url, title, siteName } = props;

    const shareBlockProps = {
        url: url,
        button: ShareButtonIconOnly,
        buttons: [
            { network: "Twitter", icon: FaTwitter },
            { network: "Facebook", icon: FaFacebook },
            { network: "Linkedin", icon: FaLinkedin },
            { network: "Email", icon: FaEnvelope }
        ],
        text: title,
        longtext: siteName
    };
    return (
        <div className="mt-4">
            <ShareBlockStandard {...shareBlockProps} />
            <p className="text-center"><i>If you like it, share it!</i></p>
        </div>
    )
};

CustomShareBlock.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    siteName: PropTypes.string
};

CustomShareBlock.defaultProps = {
    url: "https://mywebsite.com/page-to-share/",
    title: "Default value of title",
    siteName: "Default value of excerpt"
};

export default CustomShareBlock;

