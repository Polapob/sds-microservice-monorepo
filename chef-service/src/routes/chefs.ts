export interface IChef {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  phoneNumber: string;
  email: string;
  quote: string;
  experience: string;
}

/**
 * @swagger
 * tags:
 *   name: Chefs
 *   description: Lists of all supported endpoints
 * /chefs:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     tags: [Chefs]
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 chefs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     $ref: '#/components/schemas/Chef'
 *
 * /chefs/{id}:
 *   get:
 *     summary: Get chef by id
 *     tags: [Chefs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The chef id
 *     responses:
 *       200:
 *         description: The book response by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  chef:
 *                    $ref: '#/components/schemas/Chef'
 *       404:
 *         description: The chef not found
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  error:
 *                      type: string
 *                      description: error message
 *                      example: Not found chef
 */

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Chef:
 *        properties:
 *          id:
 *            type: string
 *            description: Chef ID
 *          name:
 *            type: string
 *            description: Chef name
 *          description:
 *            type: string
 *            description: Chef Brief Description
 *          imageUrl:
 *            type: string
 *            description: Chef image url
 *          phoneNumber:
 *            type: string
 *            description: Chef phone number
 *          email:
 *            type: string
 *            description: Chef email
 *          quote:
 *            type: string
 *            description: Chef favorite speech
 *          experience:
 *            type: string
 *            description: Brief summary of chef experience
 *
 *
 */
