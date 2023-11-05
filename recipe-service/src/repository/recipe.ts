import recipes from "../data/recipe.json";
import { IRecipe } from "../model/recipe";

interface IRecipeRepository {
  getNumberRecipes: () => number;
  getRecipes: () => IRecipe[];
  getRecipesPagination: (start: number, end: number) => IRecipe[];
  getRecipeById: (id: string) => IRecipe | undefined;
}

class RecipeRepository implements IRecipeRepository {
  getNumberRecipes() {
    return recipes.length;
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
  getRecipesPagination(start: number, end: number) {
    const recipes = this.getRecipes();
    return recipes.slice(start, end);
  }

  private processRecipe(): IRecipe[] {
    return recipes.map((data) => {
      const chefId = (parseInt(data.id) % 9) + 1;
      return { ...data, chefId };
    });
  }
}

export default RecipeRepository;
