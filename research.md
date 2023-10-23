---
layout: page
title: Research
---
  <div>
      <h4>Everything is connected. The nature of the world is much like a dense network of connected nodes, whether it may be molecules that interact, humans that communicate or weather systems that influence each other.</h4>

      <p style="line-height:2.6rem">The Landgraf lab studies complex <i>social</i> systems - collectives made of individual living units that each observe their environment, learn what’s good and bad, and interact with conspecifics. These interactions (and how they change over time) often create emergent properties on the group level: from coordinated motion patterns of flocks and shoals to the democratic decision making process in humans. The whole is greater than the sum of its parts - but exactly <i>how</i>?</p>
</div>

<div class="scrolly">
  <div class="scroll__image">
    <div class="diagram">
      <img src="assets/images/guppies.gif">
    </div>
  </div>
  <div class="scroll__text"> 
    <h3>Models of Individual Behavior</h3>
    <p>To understand how collectives can be smart and how group patterns emerge, we often simplify the system, creating models that represent how we <i>think</i> each individual works: Does it have a memory of past events? How is an observation of the environment translated to behavior? Rather than using the human brain to come up with a model, a part of the Landgraf lab is concerned with (machine) learning models of individual behavior. How can we leverage large amounts of data to extract a model that not only is as accurate but also as generic as possible? How can we control the level of abstraction and how can we make sure we humans learn something about the actual living system and not just about our model?
    <br><br>
    An important part of our work is tracking individuals in groups and use this data to model their behavior. On the left you can see a simulation of two neural networks that interact in a virtual tank. The neural network model was trained on tracking data to imitate the tracking data of fish optimally.</p>
  </div>
</div>

<div class="scrolly">
  <div class="scroll__image">
    <div class="diagram">
      <img src="assets/videos/BeesBook_ZoomOut.gif">
    </div>
  </div>
  <div class="scroll__text">
    <h3>Models of Group Behavior</h3>
    <p>Similarly, we can use machine learning to come up with a model that reflects the general properties of the group dynamics (rather than using the individual models to simulate a group). Looking at many hundred or thousand honeybees, for example, we have been able to study life-long social networks and learn about different interaction patterns bees produce when performing one of the many roles there are in a colony.
  <br><br>
    Now, we can invert this idea: knowing with whom you meet tells us something about your task in the collective!
    With our bee tracking system "BeesBook", we obtained lifetime tracking data for several thousand bees. From the original images and those tracks, we can detect a variety of behaviors: waggle dances and dance-following movements, food exchanges and many more. These behaviors are then used to construct social interaction networks. For a given day, these networks represent how long, or how many times a pair of individuals engaged in a specific interaction. This "descriptor" of a bee day contains several thousand numbers. In a recent paper we have shown how to compress those into a single number that we have called “Network Age”  <a href="https://www.nature.com/articles/s41467-021-21212-5">(Wild et al. 2021)</a>. We have shown that this network age is a good predictor of the role a bee will take in the future. Bees with a high network age are more likely to be foraging, while bees with a low network age are more likely to be actively engaged in nursing.</p>
  </div>
</div>

<div class="scrolly">
  <div class="scroll__image">
    <div class="diagram">
      <img src="assets/videos/Landgraf_Lab_BioRobotics.gif">
    </div>
  </div>
  <div class="scroll__text">
    <h3>Robots that interact with the living system</h3>
    <p>In the scientific literature, there are countless mathematical models that describe the behavior of individual members of a group. How can we be sure whether a given model is realistic or under which circumstances it may not be accurate? A large portion of our work is creating physical animal models that look and act like their animal counterparts. These biomimetic robots can observe the real environment and act upon it. We can then use these robots to test our models in the real world. Our "RoboFish" is an open source platform that can be used to study collective behavior in fish. We have used it to e.g. to find that fish anticipate the movement of their shoal mates <a href="https://iopscience.iop.org/article/10.1088/1748-3190/ac8e3e/meta">(Bierbach et al. 2022)</a> or that fish prefer socially competent (robot) leaders <a href="https://iopscience.iop.org/article/10.1088/1748-3190/acca59/meta">(Maxeiner et al. 2023)</a>. With "RoboBee" we have studied the honeybee dance to better understand which cues bees use to follow and decode a dance <a href="">(Landgraf et al. 2018)</a>. 
    <br><br>
    Robots can be used for a much wider variety of questions and applications. We have used quadrocopters to record neural activity of bees that were flown over real-world scenes, or applied a mechanism observed in honeybees to electric cars allowing them to exchange energy between electric cars. </p>
  </div>
</div>

<div class="scrolly">
  <div class="scroll__image">
    <div class="diagram">
      <img src="assets/images/monkeys.gif">
    </div>
  </div>
  <div class="scroll__text">
    <h3>Explainabilty and Interpretability</h3>
    <p>Modern machine learning models (i.e. deep neural networks, DNNs) are powerful. They can learn virtually any mapping between input-output pairs. Whether we use DNNs to learn individual or collective behavior from data, or use DNNs in predicting cardiovascular risk, we would like some explanation as to why the model does what it does. Did the model use spurious correlations, or which features did it use?
    <br><br>
    To understand which input regions were relevant for the decision of a image classification network, we recently proposed restricting the amount of information that is allowed to flow through the network with so-called information bottlenecks. We introduce as much random noise into the activations of early network layers as possible without impairing the classification result. Those areas that received much noise are irrelevant!</p>
  </div>
</div>


### Funding and Sponsoring
We would like to thank the following funding agencies and sponsors for their generous support of our research:
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
                <td>2023 - 2026</td>
                <td>Sublethal FX</td>
                <td>Using Novel Tools to Resolve an Old Issue in Bee Ecotoxicology - Application of Digital Methods to Understand Sublethal Effects of Pesticides to Bees and Their Significance in Regulatory Risk Assessment</td>
                <td>Bayer Crop Science</td>
            </tr>
            <tr>
                <td>2023 - 2026</td>
                <td>Open.Make II</td>
                <td>Implementing Open and FAIR Hardware</td>
                <td>Berlin University Alliance</td>
            </tr>
            <tr>
                <td>2022 - 2024</td>
                <td>IMPACT</td>
                <td>Implementierung von KI-basiertem Feedback und Assessment mit Trusted Learning Analytics in Hochschulen</td>
                <td>BMBF</td>
            </tr>
            <tr>
                <td>2021 - 2024</td>
                <td>PetraKIP</td>
                <td>Persönliches transparentes KI-basiertes Portfolio für die Lehrerbildung</td>
                <td>BMBF</td>
            </tr>
            <tr>
                <td>2021 - 2023</td>
                <td>Open.Make I</td>
                <td>Towards Open and FAIR Hardware</td>
                <td>BMBF</td>
            </tr>
            <tr>
                <td>2020 - 2023</td>
                <td>ElektroFish</td>
                <td>Roboter, die mit Fischen kommunizieren: Untersuchung der Rolle elektrischer Signale und Bewegungsmustern nach Episoden gegenseitiger Aufmerksamkeit bei schwach elektrischen Fischen</td>
                <td>DFG</td>
            </tr>
            <tr>
                <td>2019 - 2021</td>
                <td>BrainRL</td>
                <td>Learning the Language of the Brain: Adaptive Brain-Machine Interfaces Maximize Information Transfer Through Autonomous Interaction with Brain Tissue</td>
                <td>Volkswagen Foundation</td>
            </tr>
            <tr>
                <td>2019 - 2024</td>
                <td>Hiveopolis</td>
                <td>Futuristic Beehives for a smart Metropolis</td>
                <td>EU H2020 FET</td>
            </tr>
            <tr>
                <td>2017 - 2021</td>
                <td>RoboFish</td>
                <td>Mixed Shoals of Live Fish and Interactive Robots for the Analysis of Collective Behavior in Fish</td>
                <td>DFG</td>
            </tr>
            <tr>
                <td>2016 - 2021</td>
                <td>NeuroCopter</td>
                <td>Robotik in der Neurobiologie: Ziele finden mit einem winzigen Gehirn. Die neuronalen Grundlagen der Navigation der Bienen.</td>
                <td>Dr.-Klaus-Tschira-Stiftung</td>
            </tr>
        </tbody>
    </table>
</div>
