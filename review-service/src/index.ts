import ExpressConfig from "./config";
import ReviewRepository from "./repository/review";

const app = ExpressConfig();
const PORT = process.env.PORT;
const reviewRepository = new ReviewRepository();

app.get("/reviews", (req, res) => {
  const recipeId = req.query.recipeId as string;
  if (!recipeId) {
    const reviews = reviewRepository.getReviews();
    return res.send({ reviews });
  }

  const reviews = reviewRepository.getReviewsByRecipeId(recipeId);

  if (reviews.length == 0) {
    res.status(404);
    return res.send({ error: "Not found reviews" });
  }

  return res.send({ reviews });
});

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
