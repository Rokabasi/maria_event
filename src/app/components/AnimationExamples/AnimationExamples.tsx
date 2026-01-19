'use client';

import AnimatedSection from '../AnimatedSection/AnimatedSection';
import StaggeredGrid from '../StaggeredGrid/StaggeredGrid';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function AnimationExamples() {
    const items = Array.from({ length: 6 }, (_, i) => `Item ${i + 1}`);

    return (
        <div className="p-8 space-y-12">
            <h1 className="text-2xl font-bold">Exemples d'animations</h1>

            {/* Sections animées */}
            <div className="space-y-8">
                <h2 className="text-xl font-semibold">Sections animées</h2>

                <AnimatedSection animation="fade-up">
                    <div className="bg-blue-100 p-6 rounded-lg">
                        <h3 className="font-semibold">Animation Fade Up</h3>
                        <p>Cette section apparaît en glissant vers le haut</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-left" delay={200}>
                    <div className="bg-green-100 p-6 rounded-lg">
                        <h3 className="font-semibold">Animation Fade Left</h3>
                        <p>Cette section apparaît depuis la gauche avec un délai</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-scale" delay={400}>
                    <div className="bg-purple-100 p-6 rounded-lg">
                        <h3 className="font-semibold">Animation Fade Scale</h3>
                        <p>Cette section apparaît avec un effet de zoom</p>
                    </div>
                </AnimatedSection>
            </div>

            {/* Grille échelonnée */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Grille échelonnée</h2>
                <StaggeredGrid
                    className="grid grid-cols-3 gap-4"
                    delay={150}
                >
                    {items.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                            {item}
                        </div>
                    ))}
                </StaggeredGrid>
            </div>

            {/* Skeleton loaders */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Skeleton Loaders</h2>

                <div className="space-y-4">
                    <h3 className="font-medium">Card Skeleton</h3>
                    <SkeletonLoader type="card" />
                </div>

                <div className="space-y-4">
                    <h3 className="font-medium">Text Skeleton</h3>
                    <SkeletonLoader type="text" />
                </div>

                <div className="space-y-4">
                    <h3 className="font-medium">Multiple Cards</h3>
                    <SkeletonLoader
                        type="card"
                        count={3}
                        className="grid grid-cols-3 gap-4"
                    />
                </div>
            </div>

            {/* Loading spinners */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Loading Spinners</h2>
                <div className="flex gap-8 items-center">
                    <div className="text-center">
                        <LoadingSpinner size="sm" />
                        <p className="mt-2 text-sm">Small</p>
                    </div>
                    <div className="text-center">
                        <LoadingSpinner size="md" />
                        <p className="mt-2 text-sm">Medium</p>
                    </div>
                    <div className="text-center">
                        <LoadingSpinner size="lg" />
                        <p className="mt-2 text-sm">Large</p>
                    </div>
                </div>
            </div>
        </div>
    );
}