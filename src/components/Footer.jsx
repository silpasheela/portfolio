import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/silpasheela" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/silpu_sk/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/silpa-sreekumar-a352611b5/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                <FaLinkedin />
            </a>
            <a href="https://twitter.com/SskSreekumar" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                <FaTwitter />
            </a>
            </div>
            <div style={{ fontSize: '0.875rem', marginTop: '1rem' }}>
            <p>© 2023 Silpa Sreekumar. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
