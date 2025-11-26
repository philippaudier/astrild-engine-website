import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 60
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container" style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none'
                    }}
                >
                    <img
                        src="/images/astrild-logo-full.png"
                        alt="Astrild Engine"
                        style={{
                            height: '45px',
                            width: 'auto'
                        }}
                    />
                </a>

                {/* Desktop Navigation */}
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                }} className="desktop-nav">
                    <a
                        href="#features"
                        onClick={(e) => { e.preventDefault(); scrollToSection('features') }}
                        style={{ fontSize: '0.9375rem', color: 'var(--color-gray-dark)' }}
                    >
                        Features
                    </a>
                    <a
                        href="#quickstart"
                        onClick={(e) => { e.preventDefault(); scrollToSection('quickstart') }}
                        style={{ fontSize: '0.9375rem', color: 'var(--color-gray-dark)' }}
                    >
                        Quick Start
                    </a>
                    <a
                        href="#documentation"
                        onClick={(e) => { e.preventDefault(); scrollToSection('documentation') }}
                        style={{ fontSize: '0.9375rem', color: 'var(--color-gray-dark)' }}
                    >
                        Docs
                    </a>
                    <a
                        href="https://github.com/philippaudier/AstrildApex"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.9375rem', color: 'var(--color-blue)' }}
                    >
                        GitHub
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                    className="mobile-menu-btn"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 'var(--navbar-height)',
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <a
                            href="#features"
                            onClick={(e) => { e.preventDefault(); scrollToSection('features') }}
                            style={{ fontSize: '1.0625rem', color: 'var(--color-gray-dark)', padding: '0.5rem 0' }}
                        >
                            Features
                        </a>
                        <a
                            href="#quickstart"
                            onClick={(e) => { e.preventDefault(); scrollToSection('quickstart') }}
                            style={{ fontSize: '1.0625rem', color: 'var(--color-gray-dark)', padding: '0.5rem 0' }}
                        >
                            Quick Start
                        </a>
                        <a
                            href="#documentation"
                            onClick={(e) => { e.preventDefault(); scrollToSection('documentation') }}
                            style={{ fontSize: '1.0625rem', color: 'var(--color-gray-dark)', padding: '0.5rem 0' }}
                        >
                            Docs
                        </a>
                        <a
                            href="https://github.com/philippaudier/AstrildApex"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.0625rem', color: 'var(--color-blue)', padding: '0.5rem 0' }}
                        >
                            GitHub
                        </a>
                    </div>
                )}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    )
}
