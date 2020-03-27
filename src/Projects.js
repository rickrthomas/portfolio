import React from 'react';
// import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

  
 // import { makeStyles } from '@material-ui/core/styles';
  // import GridList from '@material-ui/core/GridList';
  // import GridListTile from '@material-ui/core/GridListTile';
  // import GridListTileBar from '@material-ui/core/GridListTileBar';
  // import ListSubheader from '@material-ui/core/ListSubheader';
  // import IconButton from '@material-ui/core/IconButton';
  // import InfoIcon from '@material-ui/icons/Info';

  // import tileData from './tileData';
  // import images
  import metaMorph from './img/metaMorph.jpg';
import zenDenSLO from './img/zenDenSLO.png';
import healersIntent from './img/healersIntent.png';
// import logo from './logo.svg';
import instagramArt from './img/instagramArt.jpg';
import driftLumber from './img/driftLumber.jpg';
import projectCard from './projectCard';

import { makeStyles } from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
    import Grid from '@material-ui/core/Grid';
  //Material Ui styling https://material-ui.com/components/grid-list/
  /**
   * The example data is structured as follows:
   *
   * import image from 'path/to/image.jpg';
   * [etc...]
   *
   * 
   * const tileData = [
   *   {
   *     img: image,
   *     title: 'Image',
   *     author: 'author',
   *   },
   *   {
   *     [etc...]
   *   },
   * ];
   */
  

   const projectData = [
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
    ];

    
     
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
      
      export default function Projects(props) {
        const classes = useStyles();
      
        return (
          
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                <projectCard
                    link= "/metamorph"
                    image= {metaMorph}
                    title= "Metamorph: Cognitive Distortions "
                    category= "Adult Coloring Book"
                    description= "Adult coloring book meditation tool."
                     
                />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
            </Grid>
          </div>
        );
      }
    
  