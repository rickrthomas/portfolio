import React, { Component } from 'react';
import './App.css';


  // import images
import metaMorph from './img/metaMorph.jpg';
import zenDenSLO from './img/zenDenSLO.png';
import healersIntent from './img/healersIntent.png';
// import logo from './logo.svg';
import instagramArt from './img/instagramArt.jpg';
import driftLumber from './img/driftLumber.jpg';

const ProjectCard = props => (
  
  <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="images/office.jpg"></img>
      </div>
      <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{props.project.title}<i class="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
      </div>
  <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
  </div>
</div>

  );


class Projects extends Component {
          constructor(props) {
              super(props);
              // this.deleteExercise = this.deleteExercise.bind(this);
              // this.onSubmit = this.onSubmit.bind(this);
              this.state = { projectData : [
                { 
                         link:"/metamorph",
                         image: metaMorph,
                         title: "Metamorph: Cognitive Distortions ",
                         category: "Adult Coloring Book",
                         description: ""
                },
                { 
                 link:"/shaktisjourney",
                 image: "https://photos.app.goo.gl/HvYRfFftM3wcd2uK8",
                 title: "Shakti'sJourney.com",
                 category: "Squarespace Website",
                 description: "Squarespace website design"
                 },
                 { 
                     link:"/zendenslo",
                     image: zenDenSLO,
                     title: "Zen Den Community Acupuncture",
                     category: "Squarespace Website, Promotional Materials",
                     description: "Squarespace website design, Event promotional materials for social media and print"
                 },
                 { 
                     link:"/healersintent",
                     image: healersIntent,
                     title: "Healer's Intent: Distance Healing",
                     category: "MERN Stack Webapp",
                     description: "Development of a MERN stack webapp. Intention of creating connections for distance healing through any type of heealing modality from a distance. "
                 },
                 { 
                     link:"/instagramart",
                     image: instagramArt,
                     title: "Instagram Art",
                     category: "Art",
                     description: "Art in a variety of forms"
                 },
                 { 
                     link:"/driftlumber",
                     image: driftLumber,
                     title: "Driftlumber Paintings",
                     category: "Art",
                     description: "from a distance. "
                 },
             ]};
            };
             projectList() {
              console.log(this.state.projectData);
              return this.state.projectData.map(project => {
                  return <projectCard link={project.link} image={project.image} key={project._id} title={project.title} />;
              });
          };
        
          render() {
            return (
          <div className="container">
            <h2>PROJECTS</h2>
            <projectCard />
            {this.projectList()}
          </div>
        );
      }
    };
  
export default Projects;