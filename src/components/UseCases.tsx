export default function UseCases() {
    const projects = [
        { title: 'Neon Racer', category: 'Racing', image: '/images/usecase-neon-racer.png' },
        { title: 'Forest Mystery', category: 'Adventure', image: '/images/usecase-forest-mystery.jpg' },
        { title: 'Space Odyssey', category: 'Sci-Fi', image: '/images/usecase-space-odyssey.jpg' },
    ]

    return (
        <section className="section section-gray">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2 style={{ marginBottom: 'var(--space-sm)' }}>Made with Astrild</h2>
                    <p className="text-gray text-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        See what developers are building with Astrild Engine.
                    </p>
                </div>

                <div className="grid grid-3">
                    {projects.map((project, index) => (
                        <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform var(--transition-base)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: 'var(--space-lg)' }}>
                                <div style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-blue)',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    marginBottom: 'var(--space-xs)'
                                }}>
                                    {project.category}
                                </div>
                                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 0 }}>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
