import React from 'react';
import image from "../images/6.jpg"
import image1 from "../images/2.jpeg"
import image2 from "../images/3.jpeg"
import image3 from "../images/4.jpeg"
import image4 from "../images/5.jpg"
import image5 from "../images/6.jpg"

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
      {
        img: image,
        title: 'Our Presidential lounge',
        author: 'author',
        featured: true,
      },
      {
        img: image1,
        title: 'Our classy executive lounge',
        author: 'author',
        featured: false,
      },
      {
        img: image2,
        title: 'Our Beautiful Suit',
        author: 'author',
        featured: false,
      },
      {
        img: image3,
        title: 'Our Presidential lounge',
        author: 'author',
        featured: true,
      },
      {
        img: image4,
        title: 'Our Beautiful Suit',
        author: 'author',
        featured: false,
      },
      {
        img: image5,
        title: 'Boss space',
        author: 'author',
        featured: false,
      },
     
    ]
export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={2} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
