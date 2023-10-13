package com.github.JanBuetikofer.recipemanager.ingredient;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepo extends JpaRepository<Ingredient, Integer> {
    
}
