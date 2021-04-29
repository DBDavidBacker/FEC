import { connect, dispatch } from 'react-redux';
import fetchReviews from '../../actions/reviews/fetchReviews';
import addReview from '../../actions/reviews/addReview';
import fetchReviewMeta from '../../actions/reviews/fetchReviewMeta';
import Reviews from '../../components/reviews';
import ReviewStats from '../../components/reviews/ReviewStats.jsx';
import sendReviewHelpfulLog from '../../actions/reviews/sendReviewHelpfulLog';




var mapStoreToProps = (state) => ({
  reviews: state.reviews,
  reviewMeta: state.reviewMeta,
  product: state.product,
  helpfulLog: state.reviewHelpfulLog

});

var mapDispatchToProps = (dispatch) => ({
  handleGetReviews: (productId, count, sort, filter) => {

    dispatch(fetchReviews(productId, count, sort, filter))
  },
  handleGetReviewMeta: () => {

    dispatch(fetchReviewMeta)
  },
  handleAddReview: (productId, count, sort, rating, summary, body, recommend, name, email, photos, characteristics) => {
    dispatch(addReview(productId, count, sort, rating, summary, body, recommend, name, email, photos, characteristics))
  },
  handleHelpfulLog: (reviewId) => {

    dispatch(sendReviewHelpfulLog(reviewId))
  }
});

const ReviewsContainer = connect(mapStoreToProps, mapDispatchToProps)(Reviews);
const ReviewStatsContainer = connect(mapStoreToProps, mapDispatchToProps)(ReviewStats);


export {ReviewsContainer, ReviewStatsContainer};