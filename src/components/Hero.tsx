import { ArrowRight, Github, BookOpen, ChevronDown } from 'lucide-react'

export default function Hero() {
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
        }
    }

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--navbar-height)',
            background: 'linear-gradient(180deg, rgba(245, 245, 247, 0.4) 0%, rgba(255, 255, 255, 1) 100%)',
            position: 'relative'
        }}>
            <div className="container text-center">
                {/* Main Title - Logo + Brand */}
                <div style={{
                    marginBottom: 'var(--space-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--space-md)'
                }}>
                    <img
                        src="/images/astrild-logo-full.png"
                        alt="Astrild Engine Logo"
                        style={{
                            height: '200px',
                            width: 'auto',
                            filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12))'
                        }}
                    />
                    <h1 style={{
                        fontFamily: 'var(--font-brand)',
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        color: 'var(--color-black)',
                        margin: 0,
                        textTransform: 'uppercase'
                    }}>
                        Astrild Engine
                    </h1>
                </div>

                {/* Tagline */}
                <p style={{
                    fontSize: 'var(--text-lg)',
                    color: 'var(--color-gray-dark)',
                    marginBottom: 'var(--space-lg)',
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    Moteur de jeu 3D moderne en C# avec OpenGL
                </p>

                {/* Features List */}
                <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-gray)',
                    marginBottom: 'var(--space-2xl)',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    Architecture ECS • Rendu PBR avancé • Astrild Editor • AstrildUI System
                </p>

                {/* CTA Buttons */}
                <div style={{
                    display: 'flex',
                    gap: 'var(--space-md)',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: 'var(--space-3xl)'
                }}>
                    <button
                        onClick={() => scrollToSection('quickstart')}
                        className="btn btn-primary btn-large"
                    >
                        Get Started
                        <ArrowRight size={20} />
                    </button>
                    <a
                        href="https://github.com/philippaudier/AstrildApex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-large"
                    >
                        <Github size={20} />
                        View on GitHub
                    </a>
                    <button
                        onClick={() => scrollToSection('documentation')}
                        className="btn btn-secondary btn-large"
                    >
                        <BookOpen size={20} />
                        Documentation
                    </button>
                </div>

                {/* Version Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-gray)',
                    marginBottom: 'var(--space-xl)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
                }}>
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-green)',
                        boxShadow: '0 0 8px var(--color-green)'
                    }} />
                    Version 0.1.0 • In Development
                </div>

                {/* Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: 'var(--space-xl)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: 0.5,
                    cursor: 'pointer'
                }}
                    onClick={() => scrollToSection('features')}
                >
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray)' }}>
                        Scroll to explore
                    </span>
                    <ChevronDown
                        size={24}
                        style={{
                            animation: 'bounce 2s infinite',
                            color: 'var(--color-gray)'
                        }}
                    />
                </div>
            </div>

            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>
        </section>
    )
}
