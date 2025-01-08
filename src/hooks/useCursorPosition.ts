import { useState, useEffect, useRef } from "react";

interface CursorPosition {
    x: number;
    y: number;
}

export const useCursorPosition = (loading: boolean = true, smoothFactor: number = 0.1): CursorPosition => {
    const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
    const targetPosition = useRef<CursorPosition>({ x: 0, y: 0 });
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        if (loading) return;
        const updatePosition = (e: MouseEvent) => {
            targetPosition.current = { x: e.pageX, y: e.pageY };
        };

        const animate = () => {
            const dx = targetPosition.current.x - position.x;
            const dy = targetPosition.current.y - position.y;
            setPosition(prev => ({
                x: prev.x + dx * smoothFactor,
                y: prev.y + dy * smoothFactor
            }));
            animationFrameId.current = requestAnimationFrame(animate);
        };
        animate();
        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [loading, smoothFactor, position]);

    return position;
};