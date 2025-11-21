import { useState } from 'react'
import { X } from 'lucide-react'

export default function Showcase() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Placeholder data for showcase items
    const showcaseItems = [
        { id: 1, title: 'Real-time Lighting', size: 'large', image: 'https://placehold.co/800x600/1a1a1a/FFF?text=Real-time+Lighting' },
        { id: 2, title: 'Particle System', size: 'small', image: 'https://placehold.co/400x300/2a2a2a/FFF?text=Particles' },
        { id: 3, title: 'Physics Engine', size: 'small', image: 'https://placehold.co/400x300/333/FFF?text=Physics' },
        { id: 4, title: 'Material Editor', size: 'medium', image: 'https://placehold.co/600x400/222/FFF?text=Material+Editor' },
        { id: 5, title: 'Terrain Tools', size: 'medium', image: 'https://placehold.co/600x400/111/FFF?text=Terrain+Tools' },
    ]

    return (
        <section id="showcase" className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2 style={{ marginBottom: 'var(--space-sm)' }}>Made with Astrild</h2>
                    <p className="text-gray text-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Explore stunning visuals created with our advanced rendering engine.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridAutoRows: '200px',
                    gap: 'var(--space-md)',
                }}>
                    {showcaseItems.map((item) => (
                        <div
                            key={item.id}
                            className="card"
                            style={{
                                gridColumn: item.size === 'large' ? 'span 2' : item.size === 'medium' ? 'span 2' : 'span 1',
                                gridRow: item.size === 'large' ? 'span 2' : 'span 1',
                                padding: 0,
                                overflow: 'hidden',
                                position: 'relative',
                                cursor: 'pointer',
                                border: 'none'
                            }}
                            onClick={() => setSelectedImage(item.image)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform var(--transition-slow)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 'var(--space-md)',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                color: 'white',
                                opacity: 0,
                                transition: 'opacity var(--transition-base)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                                className="showcase-overlay"
                            >
                                <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 0, color: 'white' }}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-xl)'
                }}
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        style={{
                            position: 'absolute',
                            top: 'var(--space-lg)',
                            right: 'var(--space-lg)',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full size"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-xl)'
                        }}
                    />
                </div>
            )}
        </section>
    )
}
