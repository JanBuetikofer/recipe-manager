package com.github.JanBuetikofer.recipemanager.recipe;

import java.util.List;

import com.github.JanBuetikofer.recipemanager.recipeingredient.RecipeIngredient;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecipeDto {
    private int id;
    private String name;
    private List<RecipeIngredient> ingredients;

}
