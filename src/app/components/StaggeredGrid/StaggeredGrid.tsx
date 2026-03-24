'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredGridProps {
    children: ReactNode[];
    delay?: number;
    className?: string;
    itemClassName?: string;
}

const container = {
    hidden: {},
    visible: (delayMs: number) => ({
        transition: {
            staggerChildren: delayMs / 1000,
        },
    }),
};

const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export default function StaggeredGrid({
    children,
    delay = 150,
    className = '',
    itemClassName = '',
}: StaggeredGridProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={delay}
            variants={container}
        >
            {children.map((child, index) => (
                <motion.div key={index} className={itemClassName} variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
