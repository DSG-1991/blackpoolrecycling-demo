'use client';

import { useInView } from '@/app/hooks/useInView';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  type?: 'fade-up' | 'scale' | 'slide-left';
  threshold?: number;
}

export default function AnimateIn({
  children,
  className = '',
  style,
  delay = 0,
  type = 'fade-up',
  threshold = 0.15,
}: AnimateInProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold, triggerOnce: true });

  const readyClass =
    type === 'scale' ? 'animate-scale-ready' :
    type === 'slide-left' ? 'animate-slide-ready' :
    'animate-ready';

  const visibleClass =
    type === 'scale' ? 'animate-scale-visible' :
    type === 'slide-left' ? 'animate-slide-visible' :
    'animate-visible';

  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${isInView ? visibleClass : readyClass} ${className}`}
      style={{ ...style, ...delayStyle }}
    >
      {children}
    </div>
  );
}
