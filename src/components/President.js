import React from 'react';
import {Card, CardActionArea, CardMedia, CardContent, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      margin:5
    },
    media: {
      height: 200,
    },
    details:{
      textAlign:'left'
    }
  });

export default function President({restData}){
    const classes = useStyles();

    return(<>

    {restData.map(data => {
        return <Card className={classes.root} key={data.id}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.imgUrl}
            title="Contemplative Reptile"
            src="img"
          />
          <CardContent className={classes.details}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Height: {data.height}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Date of Birth: {data.dob}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Birth Place: {data.birthPlace}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Died: {data.died}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Term: {data.term}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    })}
        
    </>)
}