import ExpressConfig from "./config";
import ChefRepository from "./repository/chef";

const app = ExpressConfig();
const PORT = process.env.PORT;
const chefRepository = new ChefRepository();

app.get("/chefs", (_, res) => {
  const chefs = chefRepository.getAllChefs();
  return res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const chef = chefRepository.getChefById(id);

  if (!chef) {
    res.status(404);
    return res.send({ error: "Not found chef" });
  }

  return res.send({ chef });
});

app.listen(PORT, () => console.log("Server Running on Port: " + PORT));
