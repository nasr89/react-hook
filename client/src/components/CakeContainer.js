import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of cakes - {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
