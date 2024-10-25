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

    public Ingredient addIngredient(IngredientDto ingredient) {
        Ingredient dao = IngredientDto.toDao(ingredient);
        return ingredientRepo.save(dao);
    }

    public Ingredient updateIngredient(Ingredient ingredient) {
        return ingredientRepo.save(ingredient);
    }

    public ResponseEntity<Void> deleteIngredient(Long id) {
        ingredientRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public Ingredient getIngredient(Long id) {
        Optional<Ingredient> ingredient = ingredientRepo.findById(id);
        if (ingredient.isPresent())
            return ingredient.get();
        return null;
    }
}
