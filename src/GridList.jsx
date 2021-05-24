import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';
import './GridList.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 **/
 const tileData = [
   {
      img: "https://wallpapercave.com/wp/wp8463688.jpg",
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
        img: "https://wallpapercave.com/wp/wp5271393.jpg",
        title: 'Image',
        author: 'author',
        cols: 2,
      },
      {
        img: "https://wallpapercave.com/wp/wp8490058.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
      },
      {
        img: "https://wallpapercave.com/wp/wp5136564.jpg",
        title: 'Image',
        author: 'author',
        cols: 2,
        
      }
   
  ];
 
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1} >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
