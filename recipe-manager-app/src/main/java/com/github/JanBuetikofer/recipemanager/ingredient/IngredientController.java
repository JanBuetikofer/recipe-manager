package com.github.JanBuetikofer.recipemanager.ingredient;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping(path = "api/v1/ingredients")
@CrossOrigin("*")
public class IngredientController {

    @Autowired
    IngredientService ingredientService;

    @GetMapping
    public List<Ingredient> getAllIngredients() {
        return ingredientService.getAllIngredients();
    }

    @GetMapping("/{id}")
    public Ingredient getIngredient(@PathVariable("id") Integer id) {
        return ingredientService.getIngredient(id);
    }

    @PostMapping
    public Ingredient addIngredient(@Valid @RequestBody Ingredient ingredient) {
        return ingredientService.addIngredient(ingredient);
    }

    @PutMapping
    public Ingredient updateIngredient(@Valid @RequestBody Ingredient ingredient) {
        return ingredientService.updateIngredient(ingredient);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteIngredient(@PathVariable("id") Integer id) {
        return ingredientService.deleteIngredient(id);
    }
}
