import React from 'react';
import Stars from '../shared/Stars.jsx';
import ReviewRatingsBar from './ReviewRatingsBar.jsx';
import ReviewCharacteristics from './ReviewCharacteristics.jsx';
import logInteraction from '../shared/logInteraction.js';


class ReviewStats extends React.Component {

  constructor(props) {
    super(props)

    this.averageFinder = this.averageFinder.bind(this);
    this.widthFinder = this.widthFinder.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.clickLogger = this.clickLogger.bind(this);
  }
clickLogger(input) {
    logInteraction(`reset-review-filters: ${input}`, 'reviews');
  }

  resetFilters() {

    document.getElementById('reviews-reset-filters').style.display = 'none';
    this.clickLogger(this.props.reviewMeta.product_id);
    this.props.handleGetReviews(this.props.reviewMeta.product_id, this.props.reviews.count , this.props.reviews.sort);
  }

  widthFinder(value) {

    var total = 0;


    for (var key in this.props.reviewMeta.ratings) {

      total += parseInt(this.props.reviewMeta.ratings[key]);

    }

    if (this.props.reviewMeta.ratings[value] !== undefined) {


      return (this.props.reviewMeta.ratings[value] * 7 / total);

    } else {


      return '0'
    }


  }



averageFinder() {


  var average = 0;
  var total = 0;
  var keys = []

  for (var key in this.props.reviewMeta.ratings) {
    average += parseInt(key) * this.props.reviewMeta.ratings[key];
    total += parseInt(this.props.reviewMeta.ratings[key]);

  }

  var values = ['1', '2', '3', '4', '5']

  average /= total;


  return average;

}



render(){



  var bars;

  if ( Object.keys(this.props.reviewMeta).length !== 0) {



      // if (Object.keys(this.state.widths).length === 5) {

        bars =  ( <div>
        <ReviewRatingsBar getReviews = {this.props.handleGetReviews}  stats = {this.props.reviewMeta} value = {0} ratings = {this.props.reviewMeta.ratings} width = {this.widthFinder('0')}  />
        <ReviewRatingsBar getReviews = {this.props.handleGetReviews}  stats = {this.props.reviewMeta} value = {1} ratings = {this.props.reviewMeta.ratings} width = {this.widthFinder('1')}  />
        <ReviewRatingsBar getReviews = {this.props.handleGetReviews}  stats = {this.props.reviewMeta} value = {2} ratings = {this.props.reviewMeta.ratings} width = {this.widthFinder('2')} />
        <ReviewRatingsBar getReviews = {this.props.handleGetReviews} stats = {this.props.reviewMeta} value = {3} ratings = {this.props.reviewMeta.ratings} width = {this.widthFinder('3')}  />
        <ReviewRatingsBar getReviews = {this.props.handleGetReviews}  stats = {this.props.reviewMeta} value = {4} ratings = {this.props.reviewMeta.ratings} width = {this.widthFinder('4')}  />
        <ReviewRatingsBar getReviews = {this.props.handleGetReviews}  stats = {this.props.reviewMeta} value = {5} ratings = {this.props.reviewMeta.ratings} width = {this.widthFinder('5')} />
        </div> )
      // } else {
      //   bars = <p>hi</p>
      // }
    return (

    <div className = 'review-stats'>

      <h2>Review Breakdown </h2>

      <h3>{Math.round(this.averageFinder() * 10) / 10}</h3>
      <Stars total = {Math.round(this.averageFinder() * 10) / 10}/>
      {/* <div id = 'bar-1'>
        <div id = 'fill'></div>
      </div> */}
      {bars}
      <button id = 'reviews-reset-filters' style = {{display: (this.props.reviews.filter.length > 0) ? 'inline': 'none'}} onClick = { () => {this.resetFilters()}}>Reset Filters</button>
      <p className = 'reviews-recommend-percent'>{Math.round((parseInt(this.props.reviewMeta.recommended[true]) * 100) /(parseInt(this.props.reviewMeta.recommended[true]) + parseInt(this.props.reviewMeta.recommended[false])))}% of reviews recommend this product.</p>

      {Object.keys(this.props.reviewMeta.characteristics).map((element) => <ReviewCharacteristics type = {element} data = {this.props.reviewMeta.characteristics[element]} />)}
    </div>



  )
} else {

  return (
    <p>hello</p>
  )
}
}



}



export default ReviewStats