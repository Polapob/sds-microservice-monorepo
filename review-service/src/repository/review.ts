import { IReview } from "../model/review";
import reviews from "../data/review.json";

interface IReviewRepository {
  getReviews: () => IReview[];
  getReviewsByRecipeId: (recipeId: string) => IReview[];
}

class ReviewRepository implements IReviewRepository {
  getReviews() {
    return reviews;
  }
  getReviewsByRecipeId(recipeId: string) {
    const filteredReviews = this.getReviews().filter((review) => {
      return review.recipeId === recipeId;
    });
    return filteredReviews;
  }
}

export default ReviewRepository;
