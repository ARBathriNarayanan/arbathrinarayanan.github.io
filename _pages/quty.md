---
layout: page
title: QuTY
permalink: /quty/
nav: true
nav_order: 3
description: Interactive Multi-Platform Quantum Hardware, Quantum Circuit & QEC Application
---

<style>
.quty-container {
  width: calc(100% + 12rem);
  max-width: none;
  margin-left: -6rem;
  height: 92vh;
  height: 92dvh;
  min-height: 680px;
  max-height: 1200px;
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

@media (max-width: 768px) {
  .quty-container {
    height: 85vh;
    height: 85dvh;
    min-height: 600px;
    max-height: none;
    border-radius: 6px;
  }
}
</style>

<p>
  <strong>QuTY</strong> is an interactive multi-platform quantum hardware simulator and QEC console. It models <strong>Superconducting Transmons</strong>, <strong>Trapped Ions (IonQ Aria-1)</strong> and <strong>Stabilizer QEC Decoders</strong> in real time. This application will have new features and a proper documentation added soon. I am still studing how Silicon emitters work, so that section is under construction.
</p>

<div class="quty-container">
  <iframe 
    src="{{ '/assets/quty/index.html' | relative_url }}" 
    class="quty-iframe" 
    allow="fullscreen"
    title="QuTY Quantum Console">
  </iframe>
</div>

