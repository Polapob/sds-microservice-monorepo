export interface IRecipe {
  id: string;
  description: string;
  name: string;
  step: string[];
  ingredients: string;
  imageUrl: string;
  chefId: number;
}
