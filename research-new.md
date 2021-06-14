---
layout: page
title: Research
---
<div class="scrolly">
  <div class="scroll__image">
    <div class="diagram">
      <img src="assets/images/guppies.gif">
    </div>
  </div>
  <div class="scroll__text">
      <h4>Everything is connected. The nature of the world is much like a dense network of connected nodes, whether it may be molecules that interact, humans that communicate or weather systems that influence each other.</h4>

      <p>The Landgraf lab studies complex <i>social</i> systems - collectives made of individual living units that each observe their environment, learn what’s good and bad, and interact with conspecifics. These interactions (and how they change over time) often create emergent properties on the group level: from coordinated motion patterns of flocks and shoals to the democratic decision making process in humans. The whole is greater than the sum of its parts - but exactly <i>how</i>?</p>

      <h3>Research Dimension 1: Models of Individual Behavior</h3>
      <p>To understand how collectives can be smart and how group patterns emerge, we often simplify the system, creating models that represent how we <i>think</i> each individual works: Does it have a memory of past events? How is an observation of the environment translated to behavior? Rather than using the human brain to come up with a model, a part of the Landgraf lab is concerned with (machine) learning models of individual behavior. How can we leverage large amounts of data to extract a model that not only is as accurate but also as generic as possible? How can we control the level of abstraction and how can we make sure we humans learn something about the actual living system and not just about our model?</p>

      <p><strong>Figure:</strong> A neural network was trained to imitate tracking data of pairs of female Guppys. The gif shows a simulation of two (identical) networks interacting in a virtual tank. Video created by Marc Gröhling.</p>
    </div>
  </div>
<div class="scrolly" id="scrolly-diagram">
  <div class="scroll__text">
    <div id="step1" class="step" data-step="1">
      <h3>Research Dimension 2: Models of Group Behavior</h3>
      <p>Similarly, we can use machine learning to come up with a model that reflects the general properties of the group dynamics (rather than using the individual models to simulate a group). Looking at many hundred or thousand honeybees, for example, we have been able to study life-long social networks and learn about different interaction patterns bees produce when performing one of the many roles there are in a colony. Now, we can invert this idea: knowing with whom you meet tells us something about your task in the collective!</p>
    </div>
    <div id="step2" class="step" data-step="2">
      <p><strong>Figure:</strong> With our bee tracking system "BeesBook", we obtained lifetime tracking data for several thousand bees (a).</p>
    </div>
    <div id="step3" class="step" data-step="3">
        <p>These tracks are used to construct multiple weighted social interaction networks (b).</p>
    </div>
    <div id="step4" class="step" data-step="4">
        <p>We aggregate daily networks (c) to then extract embeddings that group bees together with similar interaction patterns, using spectral decomposition (d).</p>
    </div>
    <div id="step5" class="step" data-step="5">
        <p>Finally, we use a linear transformation (e; CCA canonical-correlation analysis) that maximizes correlation with the fraction of time spent in different nest areas (f) to compress them into a single number per day called “network age” (g). Figure taken from [(Wild et al. 2021)](https://www.nature.com/articles/s41467-021-21212-5).</i></p>
    </div>
    <div id="step6" class="step" data-step="5">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam viverra turpis ut sodales. Nunc consequat neque at convallis eleifend. Donec sit amet felis erat. Cras commodo id urna a luctus. Donec id consectetur magna. Cras elementum commodo commodo. Aliquam pharetra aliquet felis quis auctor. Vestibulum semper justo congue, imperdiet odio vitae, eleifend odio. Nunc sit amet auctor purus. Donec a erat ac nibh fringilla pulvinar. Phasellus a eleifend eros. In pulvinar lorem eget aliquam aliquam.

        Mauris accumsan scelerisque lacus, sit amet rhoncus lacus posuere eu. Aliquam efficitur elit vel tellus tempor feugiat. Nunc ante justo, lacinia non semper et, feugiat tincidunt dui. In maximus egestas odio et placerat. Morbi a rutrum quam, vel efficitur justo. Aenean in justo nec tellus placerat aliquam. Pellentesque urna lacus, tempus sit amet est quis, elementum accumsan ligula.

        Curabitur accumsan, orci fringilla consequat blandit, mi dolor tincidunt ex, ut vulputate risus nulla ut risus. Aenean libero tellus, facilisis et quam et, auctor vehicula velit. Duis non eleifend mi. Duis laoreet, sem at porta malesuada, erat nibh semper leo, viverra maximus ex quam eu odio. Praesent egestas sapien a justo vehicula imperdiet at eu leo. Aenean fermentum malesuada venenatis. In dolor tellus, tincidunt a bibendum. </p>
    </div>
  </div>
  <div class="scroll__image">
    <div class="diagram">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
        <defs>
          <style>
            .cls-1 {
              fill: #0018a2;
            }

            .cls-2 {
              fill: #35ffff;
            }

            .cls-3 {
              fill: #ff7cff;
            }

            .cls-4 {
              fill: #6dffff;
            }

            .cls-5 {
              fill: #ffff6c;
            }

            .cls-6 {
              fill: #ff90ff;
            }
          </style>
        </defs>
        <rect class="cls-1" x="90.88" y="57.24" width="64.83" height="64.83"/>
        <circle class="cls-2" cx="323.64" cy="158.97" r="52.07"/>
        <circle class="cls-3" cx="152.61" cy="258.97" r="15.52"/>
        <circle class="cls-4" cx="140.54" cy="400" r="42.76"/>
        <rect class="cls-5" x="248.81" y="274.48" width="18.28" height="18.28"/>
        <rect class="cls-6" x="345.37" y="292.76" width="75.86" height="75.86"/>
      </svg>

      <object type="image/svg+xml" data="{{ '/assets/images/diagram.svg' | relative_url }}"></object>
      <img src="{{ '/assets/images/diagram-bees.jpg' | relative_url }}"/>
    </div>
  </div>
</div>

### Funding and Sponsoring

<div class="table-responsive">
    <table>
        <thead>
            <th>Time Frame</th>
            <th>Acronym</th>
            <th>Title of Project</th>
            <th>Funding Body</th>
        </thead>
        <tbody>
            <tr>
                <td> 2021 - 2024</td>
                <td>PetraKIP</td>
                <td>Persönliches transparentes KI-basiertes Portfolio für die Lehrerbildung</td>
                <td><img src="assets/images/BMBF_Logo.svg"></td>
            </tr>
            <tr>
                <td>2020 - 2023</td>
                <td>ElektroFish</td>
                <td>Roboter, die mit Fischen kommunizieren: Untersuchung der Rolle elektrischer Signale und Bewegungsmustern nach Episoden gegenseitiger Aufmerksamkeit bei schwach elektrischen Fischen</td>
                <td><img src="assets/images/DFG-logo-blau.svg"></td>
            </tr>
            <tr>
                <td>2019 - 2021</td>
                <td>BrainRL</td>
                <td>Learning the Language of the Brain: Adaptive Brain-Machine Interfaces Maximize Information Transfer Through Autonomous Interaction with Brain Tissue</td>
                <td><img src="assets/images/Logo_Volkswagenstiftung.svg"></td>
            </tr>
            <tr>
                <td>2019 - 2024</td>
                <td>Hiveopolis</td>
                <td>Futuristic Beehives for a smart Metropolis</td>
                <td><img src="assets/images/logo-H2020.png"></td>
            </tr>
            <tr>
                <td>2017 - 2021</td>
                <td>RoboFish</td>
                <td>Mixed Shoals of Live Fish and Interactive Robots for the Analysis of Collective Behavior in Fish</td>
                <td><img src="assets/images/DFG-logo-blau.svg"></td>
            </tr>
            <tr>
                <td>2016 - 2021</td>
                <td>NeuroCopter</td>
                <td>Robotik in der Neurobiologie: Ziele finden mit einem winzigen Gehirn. Die neuronalen Grundlagen der Navigation der Bienen.</td>
                <td><img src="assets/images/Klaus-Tschira-Stiftung_Logo.png"></td>
            </tr>
        </tbody>
    </table>
</div>
