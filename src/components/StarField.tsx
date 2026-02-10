import { useMemo } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  maxOpacity: number;
}

export default function StarField({ count = 80 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    const s: Star[] = [];
    for (let i = 0; i < count; i++) {
      s.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        maxOpacity: Math.random() * 0.6 + 0.2,
      });
    }
    return s;
  }, [count]);

  return (
    <div className="stars-layer" aria-hidden="true">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            "--duration": `${star.duration}s`,
            "--max-opacity": star.maxOpacity,
            animationDelay: `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
