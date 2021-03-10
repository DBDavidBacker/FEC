import React from 'react';
import product from '../../../sample-data/products/get-productId.json';
import styles from '../../../sample-data/products/get-productId-styles.json';
import imageZoom from './imageZoom.js';
import store from '../../store/store.js';


let ExpandedGallery = ({index, expand, styles, product, collapseGallery, currentStyle}) => {

  function collapsedGallery() {
    window.scrollTo(0, 0);
    collapseGallery(false)
  }

  return (
    <div  id='overview-body-expanded' >
      <div  id='overview-body-image-expanded'>
        <img  onClick={() => imageZoom('overview-zoom-image-expanded', 2.5)} id='overview-zoom-image-expanded' src={currentStyle.photos[index].url} />
        <div id="myresult" className="img-zoom-result"></div>
        <a onClick={() => collapsedGallery()} ><i  className="fas fa-expand button-expander"></i></a>
        <div className='current-style-gallery'>
        {/* create a vertical carousel here */}
        </div>
      </div>
    </div>
  )
}

export default ExpandedGallery;
