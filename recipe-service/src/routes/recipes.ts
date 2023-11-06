/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: Lists of all supported endpoints
 * /recipes/all:
 *   get:
 *     summary: Get all recipes
 *     tags: [Recipes]
 *     description: Get all recipes support in recipe microservice
 *     responses:
 *       200:
 *         description: A list of recipes.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 chefs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     $ref: '#/components/schemas/Recipe'
 *
 * /recipes/{id}:
 *   get:
 *     summary: Get recipe by id
 *     tags: [Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The recipe id
 *     responses:
 *       200:
 *         description: The recipe response by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  recipe:
 *                    $ref: '#/components/schemas/Recipe'
 *       404:
 *         description: The recipe not found
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                      type: string
 *                      description: error message
 *                      example: Not found recipe
 *
 * /recipes:
 *   get:
 *     summary: Get recipe by id
 *     tags: [Recipes]
 *     parameters:
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: number
 *         required: true
 *         description: Number of maximum recipes per page
 *       - in: query
 *         name: currentPage
 *         schema:
 *           type: number
 *         required: true
 *         description: Get the specific page of total pages
 *       - in: query
 *         name: text
 *         schema:
 *           type: string
 *         required: false
 *         description: Exact text search in recipe service
 *     responses:
 *       200:
 *         description: The recipe response by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  recipes:
 *                    $ref: '#/components/schemas/Recipe'
 *                  paginationMetadata:
 *                    $ref: '#/components/schemas/PaginationMetadata'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                      type: string
 *                      description: error message
 *                      example: Current page is more than total page
 */

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Recipe:
 *        properties:
 *          id:
 *            type: string
 *            description: Recipe ID
 *          name:
 *            type: string
 *            description: Recipe name
 *          description:
 *            type: string
 *            description: Recipe Brief Description
 *          imageUrl:
 *            type: string
 *            description: Food image url
 *          ingredients:
 *            type: string
 *            description: Description of ingredients in recipe
 *          chefId:
 *            type: number
 *            description: Chef ID
 *          step:
 *            type: array
 *            description: List of instructions for prepare food
 *            items:
 *              type: string
 *      PaginationMetadata:
 *        properties:
 *          totalPage:
 *            type: number
 *            description: the total number of page in recipes.
 *          currentPage:
 *            type: number
 *            description: the current page of search query.
 *          totalRecipes:
 *            type: number
 *            description: the total number of recipes that match query.
 */
