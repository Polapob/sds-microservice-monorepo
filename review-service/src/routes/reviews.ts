/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Lists of all supported endpoints
 * /reviews:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     tags: [Chefs]
 *     description: Get all reviews related to recipe
 *     parameters:
 *       - in: query
 *         name: recipeId
 *         schema:
 *           type: string
 *         required: false
 *         description: Recipe ID
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 recipes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     $ref: '#/components/schemas/Recipe'
 *       404:
 *         description: Reviews not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: error message
 *                   exmaple: Not found reviews
 *
 */

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Recipe:
 *        properties:
 *          id:
 *            type: string
 *            description: ID
 *          recipeId:
 *            type: string
 *            description: Recipe ID
 *          description:
 *            type: string
 *            description: Recipe Description
 *          reviewerName:
 *            type: string
 *            description: Reviewer user name
 *          rating:
 *            type: number
 *            description: Review ratings
 *
 *
 */
