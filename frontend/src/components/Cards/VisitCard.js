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
import oldPaper from './../../Images/old-texture.png';
import Aux from '../../hoc/Auxx';

import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        maxWidth: '65rem',
        height: '55rem',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        backgroundImage: 'url(' + oldPaper + ')',
        backgroundSize: 'cover',
        margin: 'auto',
        marginTop: '1rem',
        marginBottom: '3rem',
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
                <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: cinzel, fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0', marginBottom: '1.5rem' }}>
                    {props.title}
                </Typography>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="500"
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="body2" color="black" component="p" style={{ fontFamily: cinzel, fontSize: '1.2rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '.5rem' }}>
                            {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="large" color="black" style={{ fontWeight: 'bold', paddingBottom: '0rem', marginTop: '-1rem', marginBottom: '1rem' }}>
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