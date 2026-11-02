import { col } from 'framer-motion/client';
import React, { useEffect, useRef } from 'react'

function ParticlesBg() {

    const canvesRef = useRef(null);

    useEffect(() => {
        const canvas = canvesRef.current;
        const ctx = canvas.getContext("2d");
        let particles = [];
        const particalCount = 50;
        const colors = ["#ffffff"];

        class Paricle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.redius = Math.random() * 2 + 1;
                this.color = colors[Math.floor(Math.random() * colors.length)]; this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.redius, 0, Math.PI * 2);
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fillStyle = this.color;
                ctx.fill()
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.x = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                this.draw();

            }
        }

        function createPaticles() {
            particles = [];
            for (let i = 0; i < particalCount; i++) {
                particles.push(new Paricle())
            }
        }

        function handleReSize() {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createPaticles()

        }
        handleReSize();
        window.addEventListener("resize", handleReSize);

        let aniMationId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => p.update());
            aniMationId = requestAnimationFrame(animate);
        }
        animate();
        return () => {
            cancelAnimationFrame(aniMationId);
            window.removeEventListener("resize", handleReSize);
        }
    }, [])

    return (
        <canvas
            ref={canvesRef}
            className='  fixed top-0 left-0 w-full h-full pointer-events-none z-0'>

        </canvas>
    )
}

export default ParticlesBg