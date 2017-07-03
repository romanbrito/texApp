import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class GridListSingleLine extends Component {

  state = {
    open: false
  };
  handleToggle = () => this.setState({open: !this.state.open});

  getClick = (title) => {
    console.log(title);
  };

  render() {
    return (
      <div className="container">

        <div style={styles.root}>
          <h1>{this.props.someTitle}</h1>

          <MuiThemeProvider>
            <GridList style={styles.gridList} cols={2.2}>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img src={tile.img}
                       onClick={() => {
                         this.getClick(tile.title)
                       }}/>
                </GridTile>
              ))}
            </GridList>
          </MuiThemeProvider>
        </div>

        <MuiThemeProvider>
          <RaisedButton
            label="New Order"
            onTouchTap={this.handleToggle}
          />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Drawer open={this.state.open}>
            <Link to="/">
              <MenuItem>Close</MenuItem>
            </Link>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </MuiThemeProvider>

      </div>
    );

  }
}
export default GridListSingleLine;

// Grid
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};
const tilesData = [
  {
    img: 'https://lorempixel.com/400/400/food/1',
    title: 'Founders Favorite',
    author: 'jill111',
  },
  {
    img: 'https://lorempixel.com/400/400/food/2',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://lorempixel.com/400/400/food/3',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://lorempixel.com/400/400/food/4',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://lorempixel.com/400/400/food/5',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://lorempixel.com/400/400/food/6',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://lorempixel.com/400/400/food/7',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://lorempixel.com/400/400/food/8',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
