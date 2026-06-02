'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/app/hooks/useInView';

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = '',
  prefix = '',
  duration = 1400,
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5, triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
