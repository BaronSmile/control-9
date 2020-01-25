import React, {Fragment} from 'react';
import './Loader.css';
import  Backdrop from '../Backdrop/Backdrop';

const Loader = (props) => (
    <Fragment>
        <Backdrop show={props.show}/>
      <div className="showbox">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
        </div>
      </div>
    </Fragment>
);

export default Loader;