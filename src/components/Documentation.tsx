import { useState } from 'react'
import { ChevronRight, BookOpen, Github } from 'lucide-react'

export default function Documentation() {
    const [expandedSections, setExpandedSections] = useState<string[]>(['overview'])

    const toggleSection = (id: string) => {
        setExpandedSections(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        )
    }

    const docSections = [
        {
            id: 'overview',
            title: 'Vue d\'ensemble',
            content: 'Astrild Engine est un moteur de jeu 3D moderne développé en C# avec OpenGL. Il offre une architecture ECS performante, un système de rendu PBR avancé, et un éditeur visuel puissant et intuitif.'
        },
        {
            id: 'ecs',
            title: 'Système ECS',
            content: 'L\'architecture Entity-Component-System permet une organisation modulaire et performante du code. Les entités sont des conteneurs, les composants stockent les données, et les systèmes implémentent la logique.'
        },
        {
            id: 'rendering',
            title: 'Système de Rendu',
            content: 'Le moteur utilise un pipeline de rendu PBR (Physically Based Rendering) avec support des matériaux avancés, de l\'éclairage dynamique, et des ombres en temps réel.'
        },
        {
            id: 'ui',
            title: 'AstrildUI',
            content: 'Système d\'interface utilisateur intégré permettant de créer des UI de jeu élégantes avec un système de layout flexible et des composants réutilisables.'
        },
        {
            id: 'terrain',
            title: 'Système de Terrain',
            content: 'Génération et rendu de terrains avec support des heightmaps, textures multiples, et LOD (Level of Detail) pour des performances optimales.'
        },
        {
            id: 'physics',
            title: 'Moteur Physique',
            content: 'Moteur physique intégré offrant des simulations réalistes avec support des corps rigides, des collisions, et des contraintes.'
        },
        {
            id: 'scripting',
            title: 'Scripting C#',
            content: 'Support complet de C# pour la logique de jeu avec hot-reload en développement, permettant de modifier le code sans redémarrer l\'éditeur.'
        },
        {
            id: 'editor',
            title: 'L\'Éditeur',
            content: 'Éditeur visuel intuitif avec hiérarchie de scène, inspecteur de propriétés, prévisualisation en temps réel, et workflow optimisé pour la productivité.'
        }
    ]

    return (
        <section id="documentation" className="section section-gray">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-2xl">
                    <h2 className="mb-md">Documentation</h2>
                    <p className="text-large text-gray" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Guide complet pour maîtriser Astrild Engine.
                    </p>
                </div>

                {/* Documentation Content */}
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                        {docSections.map((section) => (
                            <div key={section.id} style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.18)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                                transition: 'all var(--transition-base)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.06)'
                                }}
                            >
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: 'var(--space-lg)',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: 'var(--text-xl)',
                                        fontWeight: 600,
                                        color: 'var(--color-black)'
                                    }}>
                                        {section.title}
                                    </h3>
                                    <ChevronRight
                                        size={24}
                                        style={{
                                            color: 'var(--color-gray)',
                                            transform: expandedSections.includes(section.id) ? 'rotate(90deg)' : 'rotate(0deg)',
                                            transition: 'transform var(--transition-fast)'
                                        }}
                                    />
                                </button>
                                {expandedSections.includes(section.id) && (
                                    <div style={{
                                        padding: '0 var(--space-lg) var(--space-lg) var(--space-lg)',
                                        borderTop: '1px solid var(--color-gray-light)'
                                    }}>
                                        <p style={{
                                            fontSize: 'var(--text-base)',
                                            color: 'var(--color-gray-dark)',
                                            lineHeight: 'var(--leading-relaxed)',
                                            marginTop: 'var(--space-md)'
                                        }}>
                                            {section.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Links to External Resources */}
                    <div style={{
                        marginTop: 'var(--space-2xl)',
                        display: 'flex',
                        gap: 'var(--space-md)',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <a
                            href="https://github.com/philippaudier/AstrildApex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <Github size={20} />
                            Voir sur GitHub
                        </a>
                        <a
                            href="https://github.com/philippaudier/AstrildApex/blob/main/README.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            <BookOpen size={20} />
                            Documentation Complète
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
