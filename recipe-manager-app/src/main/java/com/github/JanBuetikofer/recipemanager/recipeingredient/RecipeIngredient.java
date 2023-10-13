package com.github.JanBuetikofer.recipemanager.recipeingredient;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import com.github.JanBuetikofer.recipemanager.ingredient.Ingredient;
import com.github.JanBuetikofer.recipemanager.recipe.Recipe;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
public class RecipeIngredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private Double amount;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    Ingredient ingredient;

}
