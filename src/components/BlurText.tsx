import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  direction?: 'top' | 'bottom';
}

export default function BlurText({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  direction = 'bottom',
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      filter: 'blur(10px)', 
      opacity: 0, 
      y: direction === 'bottom' ? 50 : -50 
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.h1
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn("flex flex-wrap gap-x-[0.2em]", className)}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-2">
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
