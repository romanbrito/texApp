import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';

import OrderDrawer from './OrderDrawer';
import OrderDrawerContainer from './OrderDrawer';

class GridListSingleLine extends Component {

  state = {
    order:'',
    orderArray: [],
    quantity:0,
    open: false,
    currentCartID: '',
  };

  getClick = (title) => {
    //get item and put in mongodb

    if (this.state.orderArray.indexOf(title) === -1) {
      console.log("item not in array");

      this.state.orderArray.push(title, 1);
      console.log(this.state.orderArray);
    } else {
      console.log("item already in array");
      //update quantity
      let arrPosition = this.state.orderArray.indexOf(title);
      let quantityPosition = this.state.orderArray.indexOf(title)+1;
      console.log("and its position is " + arrPosition);
      console.log("and its quantity is " + quantityPosition);
      this.state.orderArray[quantityPosition] = this.state.orderArray[quantityPosition] +1;
      console.log("the updated quantity of " + title + " is " + this.state.orderArray[quantityPosition]);
      let updatedOrderArray = this.state.orderArray;
      console.log("updated order Array " + updatedOrderArray);
    }

    console.log("grid " + title);

        this.setState(
      {order: title}
    )
  };

  handleToggle = () =>{
    // this.setState({open: !this.state.open});

    if (!this.state.open) {

      let cart = {
        // user: Meteor.userId(),
        products: [],
      };

      Meteor.call('cart.insert', cart, (error, result) => {
        if (error) {
          console.log("error " + error.reason);
        } else {
          console.log("cartId " + result);

          this.setState(
            {
              open: true,
              currentCartID: result,
            });
        }
      });
    }

  };

  handleClose = () => this.setState({open: false});

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

        <OrderDrawerContainer cartID={this.state.currentCartID} openDrawer={this.state.open} order={this.state.order}/>


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
