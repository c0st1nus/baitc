"use client";
import { useEffect, useRef } from "react";

const CONFIG = {
  GRID_SIZE: 40,
  NODE_RADIUS: 1.5,
  MAX_CONNECTIONS: 3,
  CONNECTION_DISTANCE: 120,
  PULSE_SPEED: 0.003,
  MAX_NODES: 60,
  FPS_CAP: 30,
};

interface Node {
  x: number;
  y: number;
  pulse: number;
  opacity: number;
}

export default function BlockchainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const maybeCtx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!maybeCtx) return;
    const ctx = maybeCtx;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];

    function initNodes() {
      nodes = Array.from({ length: CONFIG.MAX_NODES }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        pulse: Math.random() * Math.PI * 2,
        opacity: 0.2 + Math.random() * 0.5,
      }));
    }

    const ro = new ResizeObserver(([entry]) => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    });
    ro.observe(canvas.parentElement!);

    let animId: number;
    let lastTime = 0;
    const frameInterval = 1000 / CONFIG.FPS_CAP;

    function draw(time: number) {
      animId = requestAnimationFrame(draw);

      if (time - lastTime < frameInterval) return;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = "rgba(34,197,94,0.04)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += CONFIG.GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += CONFIG.GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < nodes.length; j++) {
          if (connections >= CONFIG.MAX_CONNECTIONS) break;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONFIG.CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONFIG.CONNECTION_DISTANCE) * 0.15;
            ctx.strokeStyle = `rgba(34,197,94,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            connections++;
          }
        }
      }

      // Nodes
      for (const node of nodes) {
        node.pulse += CONFIG.PULSE_SPEED;
        const alpha = node.opacity * (0.5 + 0.5 * Math.sin(node.pulse));
        ctx.fillStyle = `rgba(34,197,94,${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, CONFIG.NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ transform: "translate3d(0,0,0)" }}
    />
  );
}
