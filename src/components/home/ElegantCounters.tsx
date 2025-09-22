import { useEffect, useState } from 'react';
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
    <div ref={ref} className="text-center animate-fade-in-up">
      <div className="elegant-card p-8 hover-lift">
        <div className="text-4xl md:text-5xl font-bold elegant-title mb-2 gradient-text">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="elegant-subtitle text-sm md:text-base font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};

export const ElegantCounters = () => {
  return (
    <section className="py-20 md:py-24 elegant-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold elegant-title mb-6">
            Transforming Southeast Asia's Financial Landscape
          </h2>
          <p className="elegant-subtitle text-lg max-w-2xl mx-auto">
            Empowering millions of businesses and individuals with innovative financial solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          <CounterItem end={42} label="Million Unbanked Businesses" suffix="M+" />
          <CounterItem end={15000} label="Loans Processed" suffix="+" />
          <CounterItem end={98} label="Success Rate" suffix="%" />
          <CounterItem end={24} label="Hour Processing" suffix="h" />
        </div>
      </div>
    </section>
  );
};