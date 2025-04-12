import React, { useEffect, useRef } from "react";

interface StarsProps {
    color: string;
}

const Stars: React.FC<StarsProps> = ({ color }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>();
    const starCount = 250;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
        if (!ctx) return;


        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'medium';


        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);


        const createStar = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * 1000,
            size: Math.random() * 2.5 + 0.5,
            opacity: Math.random() * 0.6 + 0.4,
            hue: Math.random() * 60 - 30,
            twinkleSpeed: Math.random() * 0.01 + 0.003
        });

        const stars = Array.from({ length: starCount }, createStar);

        let lastTime = 0;
        let mouseMoveX = 0;
        let mouseMoveY = 0;


        const handleMouseMove = (e: MouseEvent) => {
            mouseMoveX = (e.clientX - window.innerWidth / 2) * 0.001;
            mouseMoveY = (e.clientY - window.innerHeight / 2) * 0.001;
        };

        window.addEventListener('mousemove', handleMouseMove);


        const render = (time: number) => {
            const deltaTime = time - lastTime;
            lastTime = time;

            ctx.clearRect(0, 0, canvas.width, canvas.height);


            ctx.shadowBlur = 20;
            ctx.shadowColor = color;


            stars.forEach(star => {

                star.z -= deltaTime * 0.05;


                star.x += mouseMoveX * (1000 - star.z) * 0.015;
                star.y += mouseMoveY * (1000 - star.z) * 0.015;


                if (star.z <= 0) {
                    Object.assign(star, createStar(), { z: 1000 });
                }


                if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
                    Object.assign(star, createStar());
                }


                const scale = 1000 / (1000 - star.z);
                const x = canvas.width / 2 + (star.x - canvas.width / 2) * scale;
                const y = canvas.height / 2 + (star.y - canvas.height / 2) * scale;


                const scaledSize = star.size * Math.sqrt(scale);


                star.opacity = (Math.sin(time * star.twinkleSpeed) * 0.15 + 0.85) * Math.min(1, 1 - star.z / 1500);


                let starColor;
                if (color === '#fff' || color === 'white') {

                    const colorType = Math.floor(Math.random() * 10);
                    if (colorType < 6) {
                        starColor = `hsl(220, ${10 + Math.random() * 20}%, ${95 + star.hue / 4}%)`;
                    } else if (colorType < 8) {
                        starColor = `hsl(210, ${60 + Math.random() * 40}%, ${85 + star.hue / 3}%)`;
                    } else {
                        starColor = `hsl(${30 + Math.random() * 30}, ${70 + Math.random() * 30}%, ${80 + star.hue / 3}%)`;
                    }
                } else {
                    starColor = color;
                }


                if (scaledSize < 1.2 || star.z > 800) {

                    ctx.beginPath();
                    ctx.fillStyle = starColor;
                    ctx.globalAlpha = star.opacity * 0.9;
                    ctx.arc(x, y, scaledSize * 0.8, 0, Math.PI * 2);
                    ctx.fill();
                } else {


                    const innerGlow = ctx.createRadialGradient(
                        x, y, 0,
                        x, y, scaledSize * 1.2
                    );
                    innerGlow.addColorStop(0, starColor);
                    innerGlow.addColorStop(0.5, `${starColor}80`);
                    innerGlow.addColorStop(1, 'transparent');

                    ctx.beginPath();
                    ctx.fillStyle = innerGlow;
                    ctx.globalAlpha = star.opacity;
                    ctx.arc(x, y, scaledSize * 1.5, 0, Math.PI * 2);
                    ctx.fill();


                    const outerGlow = ctx.createRadialGradient(
                        x, y, scaledSize,
                        x, y, scaledSize * 3
                    );
                    outerGlow.addColorStop(0, `${starColor}30`);
                    outerGlow.addColorStop(1, 'transparent');

                    ctx.beginPath();
                    ctx.fillStyle = outerGlow;
                    ctx.globalAlpha = star.opacity * 0.7;
                    ctx.arc(x, y, scaledSize * 3, 0, Math.PI * 2);
                    ctx.fill();


                    if (scaledSize > 2 && star.z < 400) {
                        ctx.beginPath();
                        ctx.strokeStyle = starColor;
                        ctx.globalAlpha = star.opacity * 0.3;
                        ctx.lineWidth = scaledSize * 0.15;


                        ctx.moveTo(x - scaledSize * 4, y);
                        ctx.lineTo(x + scaledSize * 4, y);


                        ctx.moveTo(x, y - scaledSize * 4);
                        ctx.lineTo(x, y + scaledSize * 4);

                        ctx.stroke();
                    }
                }
            });

            requestRef.current = requestAnimationFrame(render);
        };

        requestRef.current = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [color]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full z-[-1]"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default Stars;