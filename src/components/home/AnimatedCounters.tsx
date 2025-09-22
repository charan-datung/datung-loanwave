import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const CounterItem = ({ 
  end, 
  label, 
  suffix = '', 
  duration = 2000 
}: { 
  end: number; 
  label: string; 
  suffix?: string; 
  duration?: number; 
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500">
        <div className="text-3xl md:text-4xl font-bold gradient-text-glow mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-white/80 text-sm md:text-base font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};

export const AnimatedCounters = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text-glow mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Transforming the financial landscape across Southeast Asia
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <CounterItem end={42} label="Million Unbanked Businesses" suffix="M+" />
          <CounterItem end={10000} label="Loans Processed" suffix="+" />
          <CounterItem end={98} label="Success Rate" suffix="%" />
          <CounterItem end={24} label="Hour Processing" suffix="h" />
        </div>
      </div>
    </section>
  );
};