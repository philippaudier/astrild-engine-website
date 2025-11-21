import { Download, Package, Play, CheckCircle2 } from 'lucide-react'

export default function QuickStart() {
    const prerequisites = [
        '.NET 8.0 SDK ou supérieur',
        'Visual Studio 2022 ou Rider (recommandé)',
        'GPU compatible OpenGL 4.6'
    ]

    const steps = [
        {
            title: 'Cloner le repository',
            icon: Download,
            color: '#007AFF',
            code: `git clone https://github.com/philippaudier/AstrildApex.git
cd AstrildApex`
        },
        {
            title: 'Restaurer les packages',
            icon: Package,
            color: '#34C759',
            code: `dotnet restore`
        },
        {
            title: 'Lancer l\'éditeur',
            icon: Play,
            color: '#FF9500',
            code: `dotnet run --project AstrildApex`
        }
    ]

    return (
        <section id="quickstart" className="section">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-2xl">
                    <h2 className="mb-md">Get Started in Minutes</h2>
                    <p className="text-large text-gray" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Commencez à développer avec Astrild Engine en quelques minutes.
                    </p>
                </div>

                {/* Prerequisites */}
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto var(--space-2xl) auto',
                    background: 'rgba(245, 245, 247, 0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-xl)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
                }}>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 600,
                        marginBottom: 'var(--space-md)',
                        color: 'var(--color-black)'
                    }}>
                        Prérequis
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                        {prerequisites.map((prereq, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                <CheckCircle2 size={20} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                                <span style={{ fontSize: 'var(--text-base)', color: 'var(--color-gray-dark)' }}>
                                    {prereq}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Installation Steps */}
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <div key={index} style={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255, 255, 255, 0.18)',
                                    borderRadius: 'var(--radius-xl)',
                                    padding: 'var(--space-xl)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                                    transition: 'all var(--transition-base)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)'
                                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)'
                                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: 'var(--radius-md)',
                                            backgroundColor: `${step.color}15`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <Icon size={24} style={{ color: step.color }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontSize: 'var(--text-xl)',
                                                fontWeight: 600,
                                                marginBottom: 'var(--space-md)',
                                                color: 'var(--color-black)'
                                            }}>
                                                {index + 1}. {step.title}
                                            </h3>
                                            <pre style={{
                                                backgroundColor: 'var(--color-gray-light)',
                                                border: '1px solid rgba(0, 0, 0, 0.08)',
                                                borderRadius: 'var(--radius-lg)',
                                                padding: 'var(--space-md)',
                                                fontSize: 'var(--text-sm)',
                                                fontFamily: 'var(--font-mono)',
                                                overflow: 'auto',
                                                margin: 0,
                                                whiteSpace: 'pre-wrap',
                                                wordBreak: 'break-word'
                                            }}>
                                                <code>{step.code}</code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Link to Full Docs */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: 'var(--space-2xl)'
                    }}>
                        <p style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-gray)',
                            marginBottom: 'var(--space-md)'
                        }}>
                            Prêt à créer votre premier jeu ?
                        </p>
                        <a
                            href="#documentation"
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById('documentation')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="btn btn-primary"
                        >
                            Voir la Documentation Complète
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
