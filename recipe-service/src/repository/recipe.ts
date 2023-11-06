import recipes from "../data/recipe.json";
import { IRecipe } from "../model/recipe";

interface IRecipeRepository {
  getNumberRecipes: (query: string | undefined) => number;
  getRecipes: () => IRecipe[];
  getRecipesPagination: (
    start: number,
    end: number,
    query: string | undefined
  ) => IRecipe[];
  getRecipeById: (id: string) => IRecipe | undefined;
}

class RecipeRepository implements IRecipeRepository {
  getNumberRecipes(query: string | undefined) {
    if (!query) {
      return recipes.length;
    }
    return this.searchRecipes(this.getRecipes(), query).length;
  }
  getRecipes() {
    return this.processRecipe();
  }
  getRecipeById(id: string) {
    const recipes = this.getRecipes();
    const recipe = recipes.find((val) => {
      return val.id == id;
    });
    return recipe;
  }
  getRecipesPagination(start: number, end: number, query: string | undefined) {
    const recipes = this.getRecipes();
    if (!query) {
      return recipes.slice(start, end);
    }
    return this.searchRecipes(recipes, query);
  }

  private processRecipe(): IRecipe[] {
    return recipes.map((data) => {
      const chefId = (parseInt(data.id) % 9) + 1;
      return { ...data, chefId };
    });
  }

  private searchRecipes(recipes: IRecipe[], query: string) {
    return recipes.filter((recipe) => {
      const isInDescription = recipe.description.toLowerCase().includes(query);
      const isInName = recipe.name.toLowerCase().includes(query);
      const isInIngredient = recipe.ingredients.toLowerCase().includes(query);
      return isInName || isInDescription || isInIngredient;
    });
  }
}

export default RecipeRepository;
