import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function cakeShop(props) {
  return(
    <div className="wrapper">
      <h1>Cake Shop - {props.numOfItems}</h1>
      <br /><hr /><br />

      {props.numOfItems > 0 ?
        <React.Fragment>
          <div className="cake-container">
            <a href='#' onClick={props.buyCake} className="cake-button">
              {props.numOfCakes > 0 ? <h3>Number of Cake - {props.numOfCakes}</h3> :
                <h3>Cakes are Unavailable</h3>}
            </a>
          </div>

          <div className="iceCream-container">
            <a href='#' onClick={props.buyIceCream} className="iceCream-button">
              {props.numOfIceCream > 0 ? <h3>Number of iceCream - {props.numOfIceCream}</h3> :
                <h3>Ice Creams are Unavailable</h3>}
            </a>
          </div>
        </React.Fragment>

        :

        <div className="out-of-stock">
          <h2>Thanks for visiting</h2>
          <h4>Sorry, we are out of stocks</h4>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const { cake, iceCream } = state;
  return {
    numOfCakes: cake.numOfCakes,
    numOfIceCream: iceCream.numOfIceCream,
    numOfItems: cake.numOfCakes + iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cakeShop);
