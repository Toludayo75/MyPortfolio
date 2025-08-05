import { useScrollProgress } from "@/hooks/useScrollAnimation";

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div 
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}