package com.github.JanBuetikofer.recipemanager.ingredient;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class IngredientService {

    @Autowired
    IngredientRepo ingredientRepo;
    
    public List<Ingredient> getAllIngredients() {
        return ingredientRepo.findAll();
    }

    public Ingredient addIngredient(Ingredient ingredient) {
        return ingredientRepo.save(ingredient);
    }

    public Ingredient updateIngredient(Ingredient ingredient) {
        return ingredientRepo.save(ingredient);
    }

    public ResponseEntity<HttpStatus> deleteIngredient(Integer id) {
        try {
            Optional<Ingredient> ingredient = ingredientRepo.findById(id);
            if(!ingredient.isPresent()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            ingredientRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public Ingredient getIngredient(Integer id) {
        Optional<Ingredient> ingredient = ingredientRepo.findById(id);
        if(ingredient.isPresent()) return ingredient.get();
        return null;
    }
}
