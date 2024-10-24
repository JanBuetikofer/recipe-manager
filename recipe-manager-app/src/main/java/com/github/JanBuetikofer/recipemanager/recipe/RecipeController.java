package com.github.JanBuetikofer.recipemanager.recipe;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/recipes")
@CrossOrigin("*")
public class RecipeController {

    @Autowired
    RecipeService recipeService;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/full")
    public List<RecipeDto> getAllFullRecipes() {
        return recipeService.getAllFullRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getRecipe(@PathVariable("id") Integer id) {
        return recipeService.getRecipe(id);
    }

    @GetMapping("/{id}/full")
    public RecipeDto getFullRecipe(@PathVariable("id") Integer id) {
        return recipeService.getFullRecipe(id);
    }

    @PostMapping("/full")
    public Recipe addFullRecipe(@Validated @RequestBody RecipeDto recipeDto) {
        return recipeService.addFullRecipe(recipeDto);
    }

    @PostMapping
    public Recipe addRecipe(@Validated @RequestBody Recipe recipe) {
        return recipeService.addRecipe(recipe);
    }

    @PutMapping("/full")
    public Recipe updateFullRecipe(@Validated @RequestBody RecipeDto recipeDto) {
        return recipeService.updateFullRecipe(recipeDto);
    }

    @PutMapping
    public Recipe updateRecipe(@Validated @RequestBody Recipe recipe) {
        return recipeService.updateRecipe(recipe);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable("id") int id) {
        recipeService.deleteRecipe(id);
    }


    
}
