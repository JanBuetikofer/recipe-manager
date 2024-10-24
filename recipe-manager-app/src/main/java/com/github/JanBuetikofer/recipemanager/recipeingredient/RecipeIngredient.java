package com.github.JanBuetikofer.recipemanager.recipeingredient;

import com.github.JanBuetikofer.recipemanager.ingredient.Ingredient;
import com.github.JanBuetikofer.recipemanager.recipe.Recipe;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class RecipeIngredient {
    @Id
    private int id;

    private Double amount;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    Ingredient ingredient;

}
