import { IChef } from "../model/chef";
import chefs from "../data/chef.json";

interface IChefRepository {
  getAllChefs: () => IChef[];
  getChefById: (id: string) => IChef | undefined;
}

class ChefRepository implements IChefRepository {
  getAllChefs() {
    return chefs;
  }

  getChefById(id: string) {
    const chefs = this.getAllChefs();
    const chef = chefs.find((chef) => {
      return chef.id === id;
    });
    return chef;
  }
}

export default ChefRepository;
