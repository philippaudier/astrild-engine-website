import { Zap, Cpu, Layers } from 'lucide-react'

export default function PerformanceMetrics() {
    const metrics = [
        { icon: Zap, value: '120+', label: 'FPS on Mid-range GPU', color: 'var(--color-yellow)' },
        { icon: Cpu, value: '< 2ms', label: 'Render Thread Latency', color: 'var(--color-red)' },
        { icon: Layers, value: '10k+', label: 'Draw Calls / Frame', color: 'var(--color-blue)' },
    ]

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2 style={{ marginBottom: 'var(--space-sm)' }}>Blazing Fast Performance</h2>
                    <p className="text-gray text-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Built on a modern ECS architecture for maximum efficiency.
                    </p>
                </div>

                <div className="grid grid-3">
                    {metrics.map((metric, index) => (
                        <div key={index} className="card text-center" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'var(--space-2xl) var(--space-xl)'
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                backgroundColor: `${metric.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 'var(--space-lg)',
                                color: metric.color
                            }}>
                                <metric.icon size={32} />
                            </div>
                            <div style={{
                                fontSize: 'var(--text-4xl)',
                                fontWeight: 700,
                                marginBottom: 'var(--space-xs)',
                                background: `linear-gradient(135deg, var(--color-black) 0%, var(--color-gray) 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {metric.value}
                            </div>
                            <div style={{
                                fontSize: 'var(--text-base)',
                                color: 'var(--color-gray)',
                                fontWeight: 500
                            }}>
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
