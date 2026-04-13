"use client";

import React, { useRef, useEffect } from "react";

interface DigitalLoomBackgroundProps {
  children?: React.ReactNode;
  backgroundColor?: string;   // default "#000000"
  threadColor?: string;       // default "rgba(100, 100, 255, 0.5)"
  threadCount?: number;       // default 80
}

const DigitalLoomBackground: React.FC<DigitalLoomBackgroundProps> = ({
  children,
  backgroundColor = "#000000",
  threadColor = "rgba(100, 100, 255, 0.5)",
  threadCount = 80,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let threads: Thread[] = [];
    let animId: number;
    let width: number, height: number;

    class Thread {
      x: number;
      y: number;
      speed: number;
      amplitude: number;
      frequency: number;
      phase: number;
      index: number;
      total: number;

      constructor(index: number, total: number) {
        this.index = index;
        this.total = total;
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = (this.index / this.total) * height; // Evenly distributed lane!
        this.speed = Math.random() * 0.8 + 0.2;
        this.amplitude = Math.random() * 30 + 15;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speed;
        if (this.x > width) {
          this.x = 0;
          this.y = (this.index / this.total) * height; // Re-enter on the same distributed lane
        }
      }

      draw() {
        const startX = Math.max(this.x - 200, 0);
        ctx!.beginPath();
        ctx!.moveTo(
          startX,
          this.y + Math.sin(startX * this.frequency + this.phase) * this.amplitude
        );
        for (let i = startX; i < this.x; i++) {
          ctx!.lineTo(
            i,
            this.y + Math.sin(i * this.frequency + this.phase) * this.amplitude
          );
        }
        ctx!.strokeStyle = threadColor;
        ctx!.lineWidth = 1.2;
        ctx!.lineCap = "round";
        ctx!.lineJoin = "round";
        ctx!.stroke();
      }
    }

    const setup = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.scale(dpr, dpr);

      threads = Array.from({ length: threadCount }, (_, i) => new Thread(i, threadCount));
      // initial fill
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      threads.forEach((thread) => {
        thread.update();
        thread.draw();
      });
      animId = requestAnimationFrame(animate);
    };

    setup();
    animate();
    
    // Use ResizeObserver for better parent container tracking
    const resizeObserver = new ResizeObserver(() => setup());
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener("resize", setup);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setup);
      cancelAnimationFrame(animId);
    };
  }, [threadColor, threadCount, backgroundColor]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ backgroundColor }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full"
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default DigitalLoomBackground;
