import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";

dotenv.config();

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Recipes API with Swagger",
      version: "1.0.0",
      description:
        "Recipes microservices use in software defined system final project",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Polapob Ratanachayoto",
        email: "polapobratanachayoto@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

export const specs = swaggerJsdoc(options);
