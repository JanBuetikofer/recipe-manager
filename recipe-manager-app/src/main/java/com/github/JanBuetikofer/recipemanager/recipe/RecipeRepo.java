package com.github.JanBuetikofer.recipemanager.recipe;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepo extends JpaRepository<Recipe, Integer> {
    
}
