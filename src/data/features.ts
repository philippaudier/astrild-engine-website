import {
    Cpu,
    Sparkles,
    Layout,
    Mountain,
    Zap,
    Code2,
    PenTool,
    Monitor
} from 'lucide-react'

export interface Feature {
    title: string
    description: string
    icon: any
    color: string
}

export const features: Feature[] = [
    {
        title: 'ECS Architecture',
        description: 'Système Entity-Component-System performant pour une architecture modulaire et scalable.',
        icon: Cpu,
        color: '#007AFF' // Blue
    },
    {
        title: 'PBR Rendering',
        description: 'Rendu physiquement réaliste avec support complet des matériaux PBR et éclairage avancé.',
        icon: Sparkles,
        color: '#FF9500' // Orange
    },
    {
        title: 'AstrildUI System',
        description: 'Système d\'interface utilisateur intégré pour créer des UI de jeu élégantes.',
        icon: Layout,
        color: '#34C759' // Green
    },
    {
        title: 'Terrain System',
        description: 'Génération et rendu de terrains avec support de heightmaps et textures multiples.',
        icon: Mountain,
        color: '#00C7BE' // Cyan
    },
    {
        title: 'Physics Engine',
        description: 'Moteur physique intégré pour des simulations réalistes et des collisions précises.',
        icon: Zap,
        color: '#AF52DE' // Purple
    },
    {
        title: 'C# Scripting',
        description: 'Support complet de C# pour la logique de jeu avec hot-reload en développement.',
        icon: Code2,
        color: '#FF3B30' // Red
    },
    {
        title: 'Astrild Editor',
        description: 'Éditeur visuel intuitif et puissant pour créer vos jeux rapidement.',
        icon: PenTool,
        color: '#FFCC00' // Yellow
    },
    {
        title: 'Cross-platform',
        description: 'Support natif de Windows, Linux et macOS grâce à .NET et OpenGL.',
        icon: Monitor,
        color: '#5856D6' // Indigo
    }
]
