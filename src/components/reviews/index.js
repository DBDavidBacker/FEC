import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewStats from './ReviewStats.jsx';
import AddReview from './AddReview.jsx';
import {ReviewStatsContainer} from '../../containers/reviews/ReviewsContainer.js'

class Reviews extends React.Component  {

  constructor(props) {
    super(props)
  }


  componentDidMount() {
    //  this.props.handleGetReviews('11004', 4);
  }



 render () {

   return (
   <div className="parent-reviews">
     <div className = 'review-title'><h1>Reviews</h1></div>

     <div className = 'reviews-content'>
        <div className='reviews-ratings'>

          <ReviewStatsContainer  />

        </div>

        <div className='reviews-accordion'>
            <ReviewList filter = {this.props.reviews.filter} helpfulLog = {this.props.helpfulLog} handleHelpfulLog = {this.props.handleHelpfulLog} sort = {this.props.reviews.sort} display = {this.props.reviews.done} product = {this.props.reviews.product} reviews = {this.props.reviews.results} more = {this.props.handleGetReviews} />
            <AddReview characteristics = {this.props.reviewMeta.characteristics} name = {this.props.product.name} sort = {this.props.reviews.sort} length = {this.props.reviews.length} id = {this.props.product.id} add = {this.props.handleAddReview} />

        </div>
     </div>
   </div>
 )
 }
  }

export default Reviews;