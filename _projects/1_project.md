---
layout: page
title: Exploring Superconducting Quantum Circuits
description: Done in IISc Bengaluru
img: assets/img/projects/sqd.jpg
importance: 1
category: work
related_publications: true
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
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations  <!-- {% cite einstein1950meaning %}.-->
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
