import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import cevapoza from './Images/concordia_1.png';
import oldPaper from './../../Images/old-paper.png';
import Aux from '../../hoc/Auxx';

import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: '18rem',
    height: '32rem',
    paddingTop: '5rem',
    paddingBottom: '2.5rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    backgroundImage: 'url(' + oldPaper + ')',
    backgroundSize: 'cover',
    margin: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',
    backgroundColor: 'transparent'
  },
});

const cinzel = "'Cinzel', serif";

const MyCard = (props) => {

  /* function ImgMediaCard() { */
    const classes = useStyles();

    return <Aux>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: cinzel, fontWeight: 'bold', marginTop: '1rem'}}>
              {props.title}
            </Typography>
            <Typography variant="body2" color="black" component="p" style={{fontFamily: cinzel, fontWeight: 'bold'}}>
              <div>
                {props.description.cuisines}
              </div>
              <div>
                {props.description.meals}
              </div>
              <div>
                {props.description.specialDiets}
              </div>
              <div>
                {props.description.features}
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="black" style={{paddingBottom: '0rem', fontWeight: 'bold'}}>
            Learn More
          </Button>
        </CardActions>
      </Card>

    <main>
    {props.children}
    </main>
    </Aux>
  /*}*/
}

export default MyCard;