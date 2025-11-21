import { features } from '../data/features'

export default function Features() {
    return (
        <section id="features" className="section section-gray">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-2xl">
                    <h2 className="mb-md">Powerful Features</h2>
                    <p className="text-large text-gray" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Tout ce dont vous avez besoin pour créer des jeux 3D modernes et performants.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div key={index} className="card">
                                <div
                                    className="card-icon"
                                    style={{ backgroundColor: `${feature.color}15` }}
                                >
                                    <Icon size={28} style={{ color: feature.color }} />
                                </div>
                                <h3 className="card-title">{feature.title}</h3>
                                <p className="card-description">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
