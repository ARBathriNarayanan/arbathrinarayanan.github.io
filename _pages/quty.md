---
layout: page
title: QuTY
permalink: /quty/
nav: true
nav_order: 3
description: Interactive Multi-Platform Quantum Hardware & QEC Console
---

<style>
.quty-container {
  width: 100%;
  height: 80vh;
  border-radius: 8px;
  border: 1px solid var(--global-divider-color, rgba(255, 255, 255, 0.15));
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
}

.quty-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>

<p>
  <strong>QuTY</strong> is an interactive multi-platform quantum hardware simulator and QEC console running 100% client-side via WebAssembly. It models <strong>Superconducting Transmons</strong>, <strong>Trapped Ions (IonQ Aria-1)</strong>, <strong>Telecom Silicon Emitters</strong>, and <strong>Stabilizer QEC Decoders</strong> in real time.
</p>

<div class="quty-container">
  <iframe 
    src="{{ '/assets/quty/index.html' | relative_url }}" 
    class="quty-iframe" 
    allow="fullscreen"
    title="QuTY Quantum Console">
  </iframe>
</div>

