package com.github.JanBuetikofer.recipemanager.recipe;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Recipe {
    @Id
    private int id;
    private String name;
}
