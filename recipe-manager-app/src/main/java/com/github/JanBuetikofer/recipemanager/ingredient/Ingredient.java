package com.github.JanBuetikofer.recipemanager.ingredient;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Ingredient {
    @Id
    private int id;

    private String name;

    private String unit;
}
