import { Check, Minus } from 'lucide-react'

export default function ComparisonTable() {
    const features = [
        { name: 'ECS Architecture', astrild: true, others: true },
        { name: 'C# Scripting', astrild: true, others: true },
        { name: 'Lightweight (<50MB)', astrild: true, others: false },
        { name: 'No Royalties', astrild: true, others: false },
        { name: 'Modern UI System', astrild: true, others: true },
        { name: 'Hot Reload', astrild: true, others: true },
    ]

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2 style={{ marginBottom: 'var(--space-sm)' }}>Why Astrild?</h2>
                    <p className="text-gray text-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Designed for modern development workflows.
                    </p>
                </div>

                <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <th style={{ padding: 'var(--space-lg)', textAlign: 'left', width: '40%' }}>Feature</th>
                                <th style={{ padding: 'var(--space-lg)', textAlign: 'center', width: '30%', background: 'rgba(0, 113, 227, 0.05)', color: 'var(--color-blue)' }}>Astrild Engine</th>
                                <th style={{ padding: 'var(--space-lg)', textAlign: 'center', width: '30%', color: 'var(--color-gray)' }}>Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} style={{ borderBottom: index !== features.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                                    <td style={{ padding: 'var(--space-md) var(--space-lg)', fontWeight: 500 }}>{feature.name}</td>
                                    <td style={{ padding: 'var(--space-md) var(--space-lg)', textAlign: 'center', background: 'rgba(0, 113, 227, 0.02)' }}>
                                        {feature.astrild ? <Check size={20} color="var(--color-blue)" style={{ margin: '0 auto' }} /> : <Minus size={20} color="var(--color-gray)" style={{ margin: '0 auto' }} />}
                                    </td>
                                    <td style={{ padding: 'var(--space-md) var(--space-lg)', textAlign: 'center' }}>
                                        {feature.others ? <Check size={20} color="var(--color-gray)" style={{ margin: '0 auto' }} /> : <Minus size={20} color="var(--color-gray)" style={{ margin: '0 auto' }} />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
