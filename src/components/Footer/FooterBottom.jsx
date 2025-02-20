import React from 'react'
import { Link } from 'react-router'

const FooterBottom = () => {
    return (
        <div className="footer-bottom py-4" style={{ background: '#2a2a2a' }}>
            <p className="mb-0 text-center">
                Copyright 2025{" "}
                <span style={{ color: "#E9A031" }}>
                    <Link to="/">Btcash NFT</Link>
                </span>{" "}
                All Rights Reserved.
            </p>
        </div>
    )
}

export default FooterBottom