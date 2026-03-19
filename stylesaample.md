<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Charcoal & Handmade Paper Art</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&family=Space+Mono:ital,wght@0,700;1,700&display=swap" rel="stylesheet">
    <style>
        :root {
            --paper-pink: #ff007f;
            --paper-yellow: #faff00;
            --paper-blue: #0022ff;
            --paper-turquoise: #00ffff; 
            --charcoal: #1a1a1a;
            --canvas-base: #ece8e1;
        }

        body {
            margin: 0;
            background-color: var(--canvas-base);
            overflow: hidden;
            font-family: 'Unbounded', sans-serif;
            -webkit-font-smoothing: antialiased;
        }

        /* SVG Filter Containers */
        .filter-container {
            position: absolute;
            width: 0;
            height: 0;
            visibility: hidden;
        }

        .canvas {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Real Paper Surface Texture Overlay */
        .paper-surface {
            position: absolute;
            inset: 0;
            z-index: 100;
            opacity: 0.4;
            background-image: url('https://www.transparenttextures.com/patterns/natural-paper.png');
            pointer-events: none;
            mix-blend-mode: multiply;
        }

        .portrait-container {
            position: relative;
            z-index: 5;
            width: 340px;
            height: 460px;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .portrait-cutout {
            width: 100%;
            height: 100%;
            background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
            border: 15px solid #fff;
            box-shadow: 20px 40px 80px rgba(0,0,0,0.1);
            filter: grayscale(1) contrast(1.3) brightness(1) url(#charcoal-shader);
        }

        /* Background Animated Scraps */
        .scrap {
            position: absolute;
            z-index: 10;
            animation: tilt-cycle 4s steps(1) infinite;
            mix-blend-mode: multiply;
            opacity: 0.85;
        }

        .organic-pink {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform-origin: center;
        }

        @keyframes tilt-cycle {
            0%, 100% { opacity: 0.85; transform: rotate(90deg) translate(30px, 0) scale(1); }
            50% { opacity: 0.85; transform: rotate(-90deg) translate(-30px, 0) scale(1.15); }
        }

        /* Turquoise Organic Flash Animation */
        .flash-organic {
            position: absolute;
            z-index: 110;
            width: 200px;
            height: 200px;
            background: var(--paper-turquoise);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            filter: url(#charcoal-shader);
            box-shadow: 0 0 40px rgba(0, 255, 255, 0.6);
            animation: organic-flicker 0.12s infinite alternate, drift 6s steps(1) infinite;
        }

        @keyframes organic-flicker {
            0% { opacity: 1; transform: scale(1) rotate(0deg); }
            100% { opacity: 0.8; transform: scale(0.97) rotate(8deg); }
        }

        @keyframes drift {
            0%, 100% { left: 4%; bottom: 6%; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
            33% { left: 6%; bottom: 8%; border-radius: 50% 50% 20% 80% / 30% 80% 20% 70%; }
            66% { left: 3%; bottom: 10%; border-radius: 80% 20% 50% 50% / 50% 20% 80% 50%; }
        }

        /* Marquee Strip */
        .marquee-strip {
            position: absolute;
            width: 200%;
            padding: 1.5rem 0;
            color: white;
            white-space: nowrap;
            transform: rotate(-2deg);
            z-index: 40; 
            font-size: 5vw;
            animation: marquee-chunky 15s steps(60) infinite;
            display: flex;
            align-items: center;
            pointer-events: none;
        }

        .marquee-bg {
            position: absolute;
            inset: 0;
            background: var(--paper-blue);
            filter: url(#charcoal-shader);
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            z-index: -1;
        }

        @keyframes marquee-chunky {
            from { transform: translateX(0) rotate(-2deg); }
            to { transform: translateX(-50%) rotate(-2deg); }
        }

        /* CTA - POSITIONED TOP RIGHT */
        .cta-button {
            position: absolute;
            width: 180px;
            height: 180px;
            top: 40px;
            right: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: black;
            font-weight: 900;
            line-height: 1.1;
            cursor: pointer;
            z-index: 120;
            transition: transform 0.3s cubic-bezier(0.2, 1.5, 0.5, 1);
        }

        .cta-bg {
            position: absolute;
            inset: 0;
            background: var(--paper-turquoise);
            border-radius: 50%;
            z-index: 2;
            filter: contrast(1.1); 
        }

        /* TRANSLUCENT TEXTURED CHARCOAL SHADOW */
        .cta-shadow {
            position: absolute;
            inset: 0;
            background: var(--charcoal);
            border-radius: 50%;
            z-index: 1;
            transform: translate(14px, 14px);
            opacity: 0.4;
            filter: url(#charcoal-shader);
            animation: shadow-flash-new 0.5s steps(1) infinite;
        }

        @keyframes shadow-flash-new {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.4; }
        }

        .cta-button:hover {
            transform: scale(1.1) rotate(15deg);
        }

        .cta-button:hover .cta-bg {
            background: #fff;
        }

        .cta-button:hover .cta-shadow {
            animation: none;
            opacity: 0.5;
            transform: translate(8px, 8px);
        }

        .smudge {
            position: absolute;
            background: var(--charcoal);
            border-radius: 50%;
            filter: blur(40px);
            opacity: 0.15;
            z-index: 3;
            pointer-events: none;
        }

        .role-label {
            position: absolute;
            top: -45px;
            left: -70px;
            padding: 10px 20px;
            background: #fff;
            color: black;
            font-size: 1rem;
            transform: rotate(-4deg);
            z-index: 70;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>

<svg class="filter-container">
    <defs>
        <filter id="charcoal-shader">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
            <feComposite operator="in" in2="SourceGraphic" />
        </filter>
    </defs>
</svg>

<div class="paper-surface"></div>

<div class="canvas">
    <!-- Action Button - Top Right Corner -->
    <div class="cta-button">
        <div class="cta-bg"></div>
        <div class="cta-shadow"></div>
        <span style="position: relative; z-index: 3;">GET THE<br>JOB DONE</span>
    </div>

    <!-- Depth Layers (Smudges) -->
    <div class="smudge" style="width: 600px; height: 350px; top: 5%; left: -5%;"></div>
    <div class="smudge" style="width: 450px; height: 450px; bottom: 0%; right: 5%;"></div>

    <!-- MAIN PORTRAIT BASE -->
    <div class="portrait-container" id="hero">
        <div class="portrait-cutout">
            <div style="position: absolute; inset: -5px; border: 4px solid black; mix-blend-mode: multiply; opacity: 0.3; pointer-events: none;"></div>
        </div>
        
        <!-- Role Label -->
        <div class="role-label" style="background-color: white;">
            AI CREATIVE TECHNOLOGIST
        </div>
    </div>

    <!-- DECORATIVE SCRAPS -->
    <div class="scrap organic-pink" style="background: var(--paper-pink); width: 500px; height: 500px; top: -120px; left: -180px;"></div>
    <div class="scrap" style="background: var(--paper-yellow); width: 380px; height: 420px; bottom: -80px; right: -80px; animation-delay: -2.5s; animation-duration: 5s;"></div>

    <!-- MARQUEE (Top banner) -->
    <div class="marquee-strip">
        <div class="marquee-bg"></div>
        <span>NEED AHMED TO DISTILL THE DENSE? • I'VE GOT YOU! • NEED AHMED TO DISTILL THE DENSE? • I'VE GOT YOU! • </span>
    </div>

    <!-- TURQUOISE ORGANIC FLASHING SHAPE -->
    <div class="flash-organic"></div>

    <!-- Footer Text -->
    <div style="position: absolute; bottom: 40px; font-weight: 900; color: var(--charcoal); font-size: 0.75rem; letter-spacing: 0.6em; text-align: center; width: 100%; z-index: 10; opacity: 0.6;">
        STRATEGY • ARTISTRY • EXECUTION
    </div>
</div>

<script>
    const hero = document.getElementById('hero');
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX);
        const y = (window.innerHeight / 2 - e.clientY);
        
        hero.style.transform = `translate(${x / 45}px, ${y / 45}px) rotate(${x / 500}deg)`;
    });
</script>

</body>
</html>