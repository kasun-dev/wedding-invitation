'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    let scrollBoost = 0;
    let lastY = window.scrollY;

    const onResize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const count = Math.max(40, Math.floor(window.innerWidth / 25));
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.7 + 0.2,
          r: Math.random() * 1.5 + 0.8
        });
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastY);
      scrollBoost = Math.min(3, scrollBoost + delta * 0.01);
      lastY = window.scrollY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      scrollBoost *= 0.93;

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 140) {
          const force = (140 - distance) / 140;
          p.vx += (dx / (distance || 1)) * force * 0.2;
          p.vy += (dy / (distance || 1)) * force * 0.2;
        }

        p.y += p.vy + scrollBoost;
        p.x += p.vx;
        p.vx *= 0.98;
        p.vy = Math.min(1.3, Math.max(0.2, p.vy * 0.99 + 0.005));

        if (p.y > window.innerHeight + 8) {
          p.y = -10;
          p.x = Math.random() * window.innerWidth;
        }
        if (p.x < -12) p.x = window.innerWidth + 8;
        if (p.x > window.innerWidth + 12) p.x = -8;

        ctx.beginPath();
        ctx.fillStyle = 'rgba(203, 163, 92, 0.75)';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    onResize();
    spawn();
    draw();

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-10" aria-hidden="true" />;
}
