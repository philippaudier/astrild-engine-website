import { Github, MessageSquare, Heart } from 'lucide-react'

export default function Community() {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2 style={{ marginBottom: 'var(--space-sm)' }}>Join the Community</h2>
                    <p className="text-gray text-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Connect with other developers, share your work, and contribute to the engine.
                    </p>
                </div>

                <div className="grid grid-2">
                    {/* Discord Card */}
                    <a href="#" className="card" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-lg)',
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: 'var(--radius-lg)',
                            backgroundColor: '#5865F2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <MessageSquare size={32} />
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 'var(--space-xs)' }}>Discord Server</h3>
                            <p className="text-gray" style={{ marginBottom: 'var(--space-xs)' }}>Chat with developers and get help.</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', fontSize: 'var(--text-sm)', color: '#5865F2' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3BA55C' }} />
                                1,200+ Online
                            </div>
                        </div>
                    </a>

                    {/* GitHub Card */}
                    <a href="https://github.com/philippaudier/AstrildApex" target="_blank" rel="noopener noreferrer" className="card" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-lg)',
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: 'var(--radius-lg)',
                            backgroundColor: '#181717',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                        }}>
                            <Github size={32} />
                        </div>
                        <div>
                            <h3 style={{ marginBottom: 'var(--space-xs)' }}>GitHub Repository</h3>
                            <p className="text-gray" style={{ marginBottom: 'var(--space-xs)' }}>Contribute to the source code.</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', fontSize: 'var(--text-sm)' }}>
                                <Heart size={14} fill="currentColor" />
                                Star us on GitHub
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
