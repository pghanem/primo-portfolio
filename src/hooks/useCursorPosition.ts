import { useState, useEffect } from 'react';

interface CursorPosition {
    x: number;
    y: number;
}

export const useCursorPosition = (loading: boolean = true): CursorPosition => {
    const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

    useEffect(() => {
        if (loading) return;

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, [loading]);

    return position;
};