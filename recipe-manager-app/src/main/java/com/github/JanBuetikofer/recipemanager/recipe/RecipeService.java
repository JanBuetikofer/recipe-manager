package com.github.JanBuetikofer.recipemanager.recipe;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.github.JanBuetikofer.recipemanager.ingredient.IngredientRepo;
import com.github.JanBuetikofer.recipemanager.recipeingredient.RecipeIngredient;
import com.github.JanBuetikofer.recipemanager.recipeingredient.RecipeIngredientRepo;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
public class RecipeService {

    @Autowired
    RecipeRepo recipeRepo;

    @Autowired
    IngredientRepo ingredientRepo;

    @Autowired
    RecipeIngredientRepo recipeIngredientRepo;

    public List<Recipe> getAllRecipes() {
        return recipeRepo.findAll();
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepo.save(recipe);
    }

    public Recipe updateRecipe(Recipe recipe) {
        return recipeRepo.save(recipe);
    }

    @Transactional
    public void deleteRecipe(Integer id) {
        recipeIngredientRepo.deleteByRecipeId(id);
        recipeRepo.deleteById(id);
    }

    public List<RecipeDto> getAllFullRecipes() {
        var recipes = this.getAllRecipes();
        List<RecipeDto> retVal = new ArrayList<>();
        RecipeDto recipeDto;
        for(Recipe recipe: recipes) {
            recipeDto = new RecipeDto();
            recipeDto.setId(recipe.getId());
            recipeDto.setName(recipe.getName());
            recipeDto.setIngredients(recipeIngredientRepo.findAllByRecipeId(recipe.getId()));
            retVal.add(recipeDto);
        }
        return retVal;
    }

    public RecipeDto getFullRecipe(Integer id) {
        Optional<Recipe> optRecipe = recipeRepo.findById(id);
        if(optRecipe.isPresent()) {
            var recipe = optRecipe.get();
            var recipeDto = new RecipeDto();
            recipeDto.setId(recipe.getId());
            recipeDto.setName(recipe.getName());
            recipeDto.setIngredients(recipeIngredientRepo.findAllByRecipeId(recipe.getId()));
            return recipeDto;
        }
        return null;
    }

    public Recipe addFullRecipe(@Validated RecipeDto recipeDto) {
        Recipe recipe = new Recipe();
        recipe.setName(recipeDto.getName());
        recipe = recipeRepo.save(recipe);
        RecipeIngredient newrecipeIngredient;
        for(RecipeIngredient recipeIngredient : recipeDto.getIngredients()) {
            newrecipeIngredient = new RecipeIngredient();
            newrecipeIngredient.setAmount(recipeIngredient.getAmount());
            newrecipeIngredient.setRecipe(recipe);
            newrecipeIngredient.setIngredient(ingredientRepo.getById(recipeIngredient.getIngredient().getId()));
            recipeIngredientRepo.save(newrecipeIngredient);
        }
        return recipe;
    }

    @Transactional
    public Recipe updateFullRecipe(@Validated RecipeDto recipeDto) {
        Optional<Recipe> optRecipe = recipeRepo.findById(recipeDto.getId());
        if(optRecipe.isPresent()) {
            Recipe recipe = optRecipe.get();
            recipe.setName(recipeDto.getName());
            recipe = recipeRepo.save(recipe);
            recipeIngredientRepo.deleteByRecipeId(recipeDto.getId());
            RecipeIngredient newrecipeIngredient;
            for(RecipeIngredient recipeIngredient : recipeDto.getIngredients()) {
                newrecipeIngredient = new RecipeIngredient();
                newrecipeIngredient.setAmount(recipeIngredient.getAmount());
                newrecipeIngredient.setRecipe(recipe);
                newrecipeIngredient.setIngredient(ingredientRepo.getById(recipeIngredient.getIngredient().getId()));
                recipeIngredientRepo.save(newrecipeIngredient);
            }
            return recipe;
        }
        return null;
    }

    public Recipe getRecipe(Integer id) {
        Optional<Recipe> recipe = recipeRepo.findById(id);
        if(recipe.isPresent()) return recipe.get();
        return null;
    }


    
}
