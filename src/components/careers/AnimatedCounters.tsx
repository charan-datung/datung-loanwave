import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl gradient-text-glow">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export const AnimatedCounters = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every number represents real lives transformed through financial inclusion
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 text-center card-3d animate-pulse-glow">
            <AnimatedCounter end={100000} suffix="+" />
            <p className="text-lg text-muted-foreground mt-4">Lives Impacted</p>
          </div>
          
          <div className="glass-card p-8 text-center card-3d animate-pulse-glow" style={{ animationDelay: "0.2s" }}>
            <AnimatedCounter prefix="₱" end={500} suffix="M+" />
            <p className="text-lg text-muted-foreground mt-4">Loans Disbursed</p>
          </div>
          
          <div className="glass-card p-8 text-center card-3d animate-pulse-glow" style={{ animationDelay: "0.4s" }}>
            <AnimatedCounter end={95} suffix="%" />
            <p className="text-lg text-muted-foreground mt-4">Success Rate</p>
          </div>
          
          <div className="glass-card p-8 text-center card-3d animate-pulse-glow" style={{ animationDelay: "0.6s" }}>
            <AnimatedCounter end={1000} suffix="+" />
            <p className="text-lg text-muted-foreground mt-4">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};