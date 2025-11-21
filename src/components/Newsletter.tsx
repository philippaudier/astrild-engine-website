import { Send } from 'lucide-react'

export default function Newsletter() {
    return (
        <section className="section section-gray">
            <div className="container">
                <div className="card" style={{
                    background: 'linear-gradient(135deg, var(--color-black) 0%, var(--color-gray-dark) 100%)',
                    color: 'white',
                    padding: 'var(--space-2xl)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Abstract Background Shapes */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-20%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(0,113,227,0.2) 0%, transparent 70%)',
                        borderRadius: '50%',
                        pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ marginBottom: 'var(--space-sm)', color: 'white' }}>Stay Updated</h2>
                        <p style={{ marginBottom: 'var(--space-xl)', color: 'rgba(255,255,255,0.8)', fontSize: 'var(--text-lg)' }}>
                            Get the latest news, updates, and tutorials delivered to your inbox.
                        </p>

                        <form style={{ display: 'flex', gap: 'var(--space-sm)', maxWidth: '400px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1rem',
                                    borderRadius: 'var(--radius-lg)',
                                    border: 'none',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    fontSize: 'var(--text-base)',
                                    outline: 'none'
                                }}
                            />
                            <button className="btn btn-primary" style={{ padding: '0.75rem 1rem' }}>
                                <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
