---
layout: page
title: Aspects of Quantum Carnot Engine
description: Done in HRI Prayagraj under Indian Academy of Sciences-Summer Research Fellowship Program
img: assets/img/projects/carnot.png
importance: 4
category: work
related_publications: false
---

This thesis presents an understanding of analytical and numerical tools for understanding and modeling superconducting
circuits. To understand the prerequisites and working of these tools, we first examine the Duffing oscillator as an
introductory nonlinear system, finding its amplitude–frequency response using both Harmonic Balance and Secular
Perturbation methods. We also look at the bistable solutions of the oscillator. A brief derivation of the Josephson
relations, together with trial problems leading to Energy Participation Ratio (EPR) and qubits with positive
anharmonicity, sets the stage for further understanding.

We then study some tools for superconducting circuit analysis, like circuit quantization, black-box quantization,
EPR methods, and finite-element simulations. We then look at different qubit families, like the transmon qubit, a
qubit with positive anharmonicity, flux qubit family and the unimon qubit.

As an exercise for these tools, we apply these tools to a transmon in a 3D cavity. We obtain and diagonalize the
Lagrangian of the system, compute its EPRs from the resulting mode transformations, and analytically calculate the
χ matrix. We also establish a bridge between EPR and black-box quantization. Numerical simulations performed
in COMSOL further validate these results and we get a feel for practical values. Finally, we investigate systems
composed of qubits with opposite anharmonicities and show analytically that their nonlinear interactions cancel to
first order when their nonlinear coefficients match.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/duffing.jpg" title="Duffing oscillator" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/jj.jpg" title="Josephson junctions" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Some snippets from the project work done.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="assets/img/projects/cmo.jpg" title="Coupled mechanical oscillators" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Analogous to the coupled mechanical oscillator
</div>

Blackbox quantization

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
                {% include figure.liquid loading="eager" path="assets/img/projects/BBQ.png" title="Coupled mechanical oscillators" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Methodology of blackbox quantization
</div>