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
    orderObj: [],
    quantity:0,
    open: false,
    currentCartID: '',
  };

  getClick = (title) => {
    //get position in array
    let elementPos = this.state.orderObj.map((item) => {return item.name; }).indexOf(title.title);

    // if item is not in array insert it
    if (elementPos === -1) {

      let ItemObject = {
        name: title.title,
        Q: 1,
        price: title.price
      };

      this.state.orderObj.push(ItemObject);

    } else {
      // update object in array
      this.state.orderObj[elementPos].Q = this.state.orderObj[elementPos].Q + 1;

    }

    this.setState(
      {
        quantity: this.state.quantity+1
      });

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
          //    console.log("cartId " + result);

          this.setState(
            {
              open: true,
              currentCartID: result,
            });
        }
      });
    }

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
                  subtitle={tile.price}
                  actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img src={tile.img}
                       onClick={() => {
                         this.getClick(tile)
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

        <OrderDrawerContainer closeDrawer={this.handleClose} quantity={this.state.quantity} cartID={this.state.currentCartID} openDrawer={this.state.open} order={this.state.order} orderObj={this.state.orderObj}/>


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
    price: 11,
  },
  {
    img: 'https://lorempixel.com/400/400/food/2',
    title: 'Tasty burger',
    author: 'pashminu',
    price: 7,
  },
  {
    img: 'https://lorempixel.com/400/400/food/3',
    title: 'Camera',
    author: 'Danson67',
    price: 6,
  },
  {
    img: 'https://lorempixel.com/400/400/food/4',
    title: 'Morning',
    author: 'fancycrave1',
    price: 5,
  },
  {
    img: 'https://lorempixel.com/400/400/food/5',
    title: 'Hats',
    author: 'Hans',
    price: 4,
  },
  {
    img: 'https://lorempixel.com/400/400/food/6',
    title: 'Honey',
    author: 'fancycravel',
    price: 3,
  },
  {
    img: 'https://lorempixel.com/400/400/food/7',
    title: 'Vegetables',
    author: 'jill111',
    price: 2,
  },
  {
    img: 'https://lorempixel.com/400/400/food/8',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    price: 1,
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
