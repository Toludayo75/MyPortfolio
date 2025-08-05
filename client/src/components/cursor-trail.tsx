import { useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
  id: number;
}

export function CursorTrail() {
  const [trails, setTrails] = useState<Position[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      const newTrail: Position = { 
        x: e.clientX, 
        y: e.clientY, 
        id: trailId++
      };
      
      setTrails(prev => {
        const updated = [newTrail, ...prev.slice(0, 12)]; // Keep 12 trail points
        return updated;
      });
    };

    // Animate trail fading
    const animateTrails = () => {
      setTrails(prev => 
        prev.map((trail, index) => ({
          ...trail,
          // Gradually fade and shrink trails
        })).filter((_, index) => index < 12)
      );
    };

    const interval = setInterval(animateTrails, 50);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            opacity: Math.max(0, (12 - index) / 12 * 0.8),
            transform: `scale(${Math.max(0.2, (12 - index) / 12)})`,
            background: `hsl(${220 + index * 10}, 80%, ${60 + index * 2}%)`,
          }}
        />
      ))}
    </>
  );
}