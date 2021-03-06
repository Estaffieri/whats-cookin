import { expect } from 'chai';

import Recipe from '../src/recipe';
import recipeData from '../src/data/sample-recipe-data';
import ingredientData from '../src/data/sample-ingredient-data';

describe('Recipe', () => {
  let recipe;
  let recipe2;

  beforeEach(() => {
    recipe = new Recipe(recipeData[0]);
    recipe2 = new Recipe(recipeData[1]);
  });

  it('is a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id', () => {
    expect(recipe.id).to.eq(595736);
  });

  it('should initialize with an name', () => {
    expect(recipe.name).to.eq('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should initialize with an image', () => {
    expect(recipe.image).to.eq('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should initialize with an array of ingredients', () => {
    const ingredient = {
      "id": 20081,
      "name": "all purpose flour",
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    }
    expect(recipe.ingredients[0]).to.deep.eq(ingredient);
  });

  it('should calculate the total cost of all of the ingredients', () => {
    expect(recipe.calculateIngredientsCost(ingredientData)).to.eq('$177.76');
  });

  it('should get the list of instructions for a specified recipe', () => {
    expect(recipe.getInstructions()[1].instruction).to.deep.eq('Add egg and vanilla and mix until combined.')
  });

  it('should be able to filter by type tag', () => {
    expect(recipe.findByTag(recipeData, "dinner").length).to.deep.eq(1)
  });

  it('should be able to filter by type tag', () => {
    expect(recipe.findByIngredient(recipeData, "pork").length).to.deep.eq(1)
  });

});
