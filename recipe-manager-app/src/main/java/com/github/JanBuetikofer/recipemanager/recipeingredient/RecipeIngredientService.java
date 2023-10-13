package com.github.JanBuetikofer.recipemanager.recipeingredient;

import java.util.List;

import com.github.JanBuetikofer.recipemanager.ingredient.IngredientService;
import com.github.JanBuetikofer.recipemanager.recipe.RecipeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeIngredientService {

    @Autowired
    RecipeIngredientRepo recipeIngredientRepo;

    @Autowired
    IngredientService ingredientService;

    @Autowired
    RecipeService recipeService;
    
    public List<RecipeIngredient> getAllRecipeIngredients() {
        return recipeIngredientRepo.findAll();
    }


    public RecipeIngredient addRecipeIngredients(RecipeIngredient recipeIngredient) {
        return recipeIngredientRepo.save(recipeIngredient);
    }

    public RecipeIngredient updateRecipeIngredients(RecipeIngredient recipeIngredient) {
        return recipeIngredientRepo.save(recipeIngredient);
    }

    public void deleteRecipeIngredients(RecipeIngredient recipeIngredient) {
        recipeIngredientRepo.delete(recipeIngredient);
    }
}
