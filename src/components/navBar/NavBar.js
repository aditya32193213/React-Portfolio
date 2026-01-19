import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar 
            collapseOnSelect 
            expand="md"
            fixed="top"
            className="animate-navbar nav-theme justify-content-between"
            variant="dark"
        >
            <Navbar.Brand href="#home">
                {/* SVG Logo - Modern Developer Icon */}
                <svg 
                    className="logo" 
                    viewBox="0 0 100 100" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background Circle with Gradient */}
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#66fcf1', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#45a29e', stopOpacity: 1}} />
                        </linearGradient>
                        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#1a1a2e', stopOpacity: 1}} />
                            <stop offset="100%" style={{stopColor: '#16213e', stopOpacity: 1}} />
                        </linearGradient>
                    </defs>
                    
                    {/* Main Circle */}
                    <circle cx="50" cy="50" r="48" fill="url(#codeGradient)" stroke="url(#logoGradient)" strokeWidth="2"/>
                    
                    {/* Code Brackets */}
                    <path d="M 30 35 L 20 50 L 30 65" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 70 35 L 80 50 L 70 65" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    
                    {/* Forward Slash */}
                    <line x1="55" y1="30" x2="45" y2="70" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <span className="brand-text">Aditya</span>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;