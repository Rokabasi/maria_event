'use client';

import { motion, type Variant } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale' | 'stagger' | 'fade-bottom-left' | 'fade-bottom-right' | 'fade-top-left' | 'fade-top-right';
    delay?: number;
    className?: string;
    threshold?: number;
    triggerOnce?: boolean;
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
    'fade-up': {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-left': {
        hidden: { opacity: 0, x: -12 },
        visible: { opacity: 1, x: 0 },
    },
    'fade-right': {
        hidden: { opacity: 0, x: 12 },
        visible: { opacity: 1, x: 0 },
    },
    'fade-scale': {
        hidden: { opacity: 0, scale: 0.98 },
        visible: { opacity: 1, scale: 1 },
    },
    'stagger': {
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-bottom-left': {
        hidden: { opacity: 0, x: -8, y: 10 },
        visible: { opacity: 1, x: 0, y: 0 },
    },
    'fade-bottom-right': {
        hidden: { opacity: 0, x: 8, y: 10 },
        visible: { opacity: 1, x: 0, y: 0 },
    },
    'fade-top-left': {
        hidden: { opacity: 0, x: -8, y: -10 },
        visible: { opacity: 1, x: 0, y: 0 },
    },
    'fade-top-right': {
        hidden: { opacity: 0, x: 8, y: -10 },
        visible: { opacity: 1, x: 0, y: 0 },
    },
};

export default function AnimatedSection({
    children,
    animation = 'fade-up',
    delay = 0,
    className = '',
    threshold = 0.1,
    triggerOnce = true,
}: AnimatedSectionProps) {
    const v = variants[animation] || variants['fade-up'];

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: triggerOnce, margin: '-60px', amount: threshold }}
            variants={v}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: delay / 1000 }}
        >
            {children}
        </motion.div>
    );
}
