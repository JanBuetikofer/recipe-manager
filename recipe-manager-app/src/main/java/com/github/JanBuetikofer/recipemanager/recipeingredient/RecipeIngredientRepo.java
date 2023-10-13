package com.github.JanBuetikofer.recipemanager.recipeingredient;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeIngredientRepo extends JpaRepository<RecipeIngredient, Integer> {
    List<RecipeIngredient> findAllByRecipeId(Integer recipeId);
    void deleteByRecipeId(Integer recipeId);
}
