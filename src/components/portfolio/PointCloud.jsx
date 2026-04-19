import { useEffect, useRef } from 'react';

export default function PointCloud() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width;
    let height;
    let radius = 0;

    const POINT_COUNT = 240;
    const LINE_DISTANCE = 42;
    const BASE_SPEED = 0.0007;

    const buildPoints = () => {
      pointsRef.current = [];
      radius = Math.min(width, height) * 0.19;

      for (let i = 0; i < POINT_COUNT; i += 1) {
        const phi = Math.acos(-1 + (2 * i) / POINT_COUNT);
        const theta = Math.sqrt(POINT_COUNT * Math.PI) * phi;

        pointsRef.current.push({
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi),
        });
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      buildPoints();
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouse);

    let rotation = 0;

    const projectPoints = () => {
      const cx = width * 0.61;
      const cy = height * 0.5;

      const mx = mouseRef.current.x * 0.16;
      const my = mouseRef.current.y * 0.1;

      return pointsRef.current
        .map((p) => {
          const cosY = Math.cos(rotation + mx);
          const sinY = Math.sin(rotation + mx);
          let x = p.x * cosY - p.z * sinY;
          let z = p.x * sinY + p.z * cosY;

          const cosX = Math.cos(my);
          const sinX = Math.sin(my);
          const y = p.y * cosX - z * sinX;
          z = p.y * sinX + z * cosX;

          const perspective = 700 / (700 + z);

          return {
            x: cx + x * perspective,
            y: cy + y * perspective,
            z,
            size: Math.max(0.65, perspective * 1.15),
            alpha: Math.max(0.05, (z + radius) / (radius * 2.8)),
          };
        })
        .sort((a, b) => a.z - b.z);
    };

    const drawConnections = (pts) => {
      for (let i = 0; i < pts.length; i += 1) {
        for (let j = i + 1; j < pts.length; j += 1) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINE_DISTANCE) {
            const lineAlpha = (1 - dist / LINE_DISTANCE) * 0.06;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    };

    const drawGlow = (pts) => {
      const cx = width * 0.61;
      const cy = height * 0.5;

      const grad = ctx.createRadialGradient(cx, cy, radius * 0.15, cx, cy, radius * 1.15);
      grad.addColorStop(0, 'rgba(0, 245, 255, 0.035)');
      grad.addColorStop(0.55, 'rgba(0, 245, 255, 0.015)');
      grad.addColorStop(1, 'rgba(0, 245, 255, 0)');

      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = () => {
      rotation += BASE_SPEED;
      ctx.clearRect(0, 0, width, height);

      const pts = projectPoints();

      drawGlow(pts);
      drawConnections(pts);

      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.alpha * 0.42})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      aria-hidden="true"
    />
  );
}