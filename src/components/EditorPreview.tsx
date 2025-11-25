import { useState } from 'react'
import { Layers, Settings, Play, Box } from 'lucide-react'

export default function EditorPreview() {
    const [activeTooltip, setActiveTooltip] = useState<number | null>(null)

    const features = [
        { id: 1, icon: Layers, title: 'Scene Hierarchy', x: '15%', y: '30%', description: 'Organize your game objects efficiently.' },
        { id: 2, icon: Box, title: 'Viewport', x: '50%', y: '50%', description: 'Real-time PBR rendering preview.' },
        { id: 3, icon: Settings, title: 'Inspector', x: '85%', y: '40%', description: 'Tweak properties instantly.' },
        { id: 4, icon: Play, title: 'Game View', x: '50%', y: '10%', description: 'Playtest directly in the editor.' },
    ]

    return (
        <section className="section section-gray" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2 style={{ marginBottom: 'var(--space-sm)' }}>Designed for Creators</h2>
                    <p className="text-gray text-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        An intuitive interface that gets out of your way and lets you focus on creating.
                    </p>
                </div>

                <div style={{
                    position: 'relative',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-xl)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                }}>
                    {/* Mockup Image */}
                    <img
                        src="/images/editor-interface.png"
                        alt="Astrild Editor Interface"
                        style={{
                            width: '100%',
                            display: 'block',
                            transition: 'transform 0.5s ease-out'
                        }}
                    />

                    {/* Interactive Hotspots */}
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            style={{
                                position: 'absolute',
                                top: feature.y,
                                left: feature.x,
                                transform: 'translate(-50%, -50%)',
                                zIndex: 10
                            }}
                            onMouseEnter={() => setActiveTooltip(feature.id)}
                            onMouseLeave={() => setActiveTooltip(null)}
                        >
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-blue)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                cursor: 'pointer',
                                boxShadow: '0 0 0 4px rgba(0, 113, 227, 0.3)',
                                animation: 'pulse 2s infinite'
                            }}>
                                <feature.icon size={16} />
                            </div>

                            {/* Tooltip */}
                            <div style={{
                                position: 'absolute',
                                bottom: '100%',
                                left: '50%',
                                transform: `translateX(-50%) translateY(${activeTooltip === feature.id ? '-10px' : '0'})`,
                                opacity: activeTooltip === feature.id ? 1 : 0,
                                pointerEvents: activeTooltip === feature.id ? 'auto' : 'none',
                                transition: 'all var(--transition-base)',
                                width: '200px',
                                padding: 'var(--space-md)',
                                background: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-lg)',
                                textAlign: 'center',
                                marginBottom: '10px'
                            }}>
                                <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: '4px' }}>{feature.title}</h4>
                                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray)' }}>{feature.description}</p>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-6px',
                                    left: '50%',
                                    transform: 'translateX(-50%) rotate(45deg)',
                                    width: '12px',
                                    height: '12px',
                                    background: 'rgba(255, 255, 255, 0.9)'
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(0, 113, 227, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(0, 113, 227, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(0, 113, 227, 0); }
                }
            `}</style>
        </section>
    )
}
