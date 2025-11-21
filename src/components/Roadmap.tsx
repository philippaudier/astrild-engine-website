import { CheckCircle, Circle, Clock } from 'lucide-react'

export default function Roadmap() {
    const milestones = [
        { status: 'completed', date: 'Q3 2024', title: 'Core Engine', description: 'ECS Architecture & Basic Rendering' },
        { status: 'completed', date: 'Q4 2024', title: 'Editor Alpha', description: 'Scene Graph & Inspector' },
        { status: 'current', date: 'Q1 2025', title: 'PBR System', description: 'Advanced Materials & Lighting' },
        { status: 'planned', date: 'Q2 2025', title: 'Scripting API', description: 'C# Hot Reload Support' },
        { status: 'planned', date: 'Q3 2025', title: 'Asset Store', description: 'Community Marketplace' },
    ]

    return (
        <section className="section section-gray">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2 style={{ marginBottom: 'var(--space-sm)' }}>Roadmap</h2>
                    <p className="text-gray text-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Our journey to build the next generation game engine.
                    </p>
                </div>

                <div style={{ position: 'relative', padding: 'var(--space-xl) 0' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'rgba(0,0,0,0.1)',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                    }} />

                    <div className="grid grid-4" style={{ position: 'relative', zIndex: 1, gap: 'var(--space-md)' }}>
                        {milestones.slice(0, 4).map((milestone, index) => (
                            <div key={index} className="card" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-sm)',
                                opacity: milestone.status === 'planned' ? 0.7 : 1,
                                border: milestone.status === 'current' ? '1px solid var(--color-blue)' : '1px solid var(--glass-border)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'var(--space-xs)',
                                    color: milestone.status === 'completed' ? 'var(--color-green)' :
                                        milestone.status === 'current' ? 'var(--color-blue)' : 'var(--color-gray)'
                                }}>
                                    {milestone.status === 'completed' ? <CheckCircle size={16} /> :
                                        milestone.status === 'current' ? <Clock size={16} /> : <Circle size={16} />}
                                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase' }}>{milestone.date}</span>
                                </div>
                                <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 0 }}>{milestone.title}</h3>
                                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gray)' }}>{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
