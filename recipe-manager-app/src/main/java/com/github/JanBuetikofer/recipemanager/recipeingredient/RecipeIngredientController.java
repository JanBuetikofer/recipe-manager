package com.github.JanBuetikofer.recipemanager.recipeingredient;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "api/v1/recipeingredients")
public class RecipeIngredientController {

    @Autowired
    RecipeIngredientService recipeIngredientService;

    @GetMapping
    public List<RecipeIngredient> getAllRecipeIngredients() {
        return recipeIngredientService.getAllRecipeIngredients();
    }

    @PostMapping
    public RecipeIngredient addRecipeIngredients(@Valid @RequestBody RecipeIngredient recipeIngredient) {
        return recipeIngredientService.addRecipeIngredients(recipeIngredient);
    }

    @PutMapping
    public RecipeIngredient updateRecipeIngredients(@Valid @RequestBody RecipeIngredient recipeIngredient) {
        return recipeIngredientService.updateRecipeIngredients(recipeIngredient);
    }

    @DeleteMapping
    public void deleteRecipeIngredients(@Valid @RequestBody RecipeIngredient recipeIngredient) {
        recipeIngredientService.deleteRecipeIngredients(recipeIngredient);
    }

    
}
