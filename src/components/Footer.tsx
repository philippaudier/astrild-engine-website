import { Github, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--color-gray-light)',
            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
            padding: 'var(--space-2xl) 0'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--space-lg)',
                    textAlign: 'center'
                }}>
                    {/* Logo */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--space-sm)'
                    }}>
                        <img
                            src="/images/astrild-logo-full.png"
                            alt="Astrild Engine Logo"
                            style={{
                                height: '40px',
                                width: 'auto'
                            }}
                        />
                        <div style={{
                            fontFamily: 'var(--font-brand)',
                            fontSize: 'var(--text-xl)',
                            fontWeight: 400,
                            letterSpacing: '0.05em',
                            color: 'var(--color-black)',
                            textTransform: 'uppercase'
                        }}>
                            Astrild Engine
                        </div>
                    </div>

                    {/* Links */}
                    <div style={{
                        display: 'flex',
                        gap: 'var(--space-xl)',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <a
                            href="https://github.com/philippaudier/AstrildApex"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray)'
                            }}
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                        <a
                            href="https://github.com/philippaudier/AstrildApex/blob/main/README.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray)'
                            }}
                        >
                            Documentation
                        </a>
                        <a
                            href="mailto:contact@example.com"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-gray)'
                            }}
                        >
                            <Mail size={18} />
                            Contact
                        </a>
                    </div>

                    {/* Divider */}
                    <div style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'rgba(0, 0, 0, 0.08)'
                    }} />

                    {/* Copyright */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-xs)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-gray)'
                    }}>
                        <p>Astrild Engine • Version 0.1.0</p>
                        <p>© 2025 Philippe Audier. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
