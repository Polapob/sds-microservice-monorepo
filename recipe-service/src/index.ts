import ExpressConfig from "./config";
import RecipeRepository from "./repository/recipe";

const app = ExpressConfig();
const PORT = process.env.PORT;
const recipeRepository = new RecipeRepository();

app.get("/recipes/all", (_, res) => {
  const recipes = recipeRepository.getRecipes();
  return res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const recipe = recipeRepository.getRecipeById(id);

  if (!recipe) {
    res.status(404);
    return res.send({ error: "Not found recipe" });
  }
  return res.send({ recipe });
});

app.get("/recipes", (req, res) => {
  const query = req.query as {
    pageSize: string;
    currentPage: string;
    text?: string;
  };

  if (isNaN(parseInt(query.pageSize)) || isNaN(parseInt(query.currentPage))) {
    res.status(400);
    res.send({
      error: "Page size and current page are required in query params",
    });
  }

  const currentPage = parseInt(query.currentPage) - 1;
  const pageSize = parseInt(query.pageSize);
  const totalRecipes = recipeRepository.getNumberRecipes(query.text);
  const totalPage = Math.ceil(totalRecipes / pageSize);

  if (currentPage < 0) {
    res.status(400);
    res.send({
      error: "Current page must be positive integer",
    });
  }

  if (currentPage >= totalPage) {
    res.status(400);
    res.send({
      error: "Current page is more than total page",
    });
  }

  const startIdx = currentPage * pageSize;
  const endIdx = startIdx + pageSize;
  const recipes = recipeRepository.getRecipesPagination(
    startIdx,
    endIdx,
    query.text
  );
  const response = {
    recipes,
    paginationMetadata: { totalPage, currentPage: parseInt(query.currentPage) },
  };
  return res.send(response);
});

app.listen(PORT, () => console.log("Server Running on Port" + PORT));
