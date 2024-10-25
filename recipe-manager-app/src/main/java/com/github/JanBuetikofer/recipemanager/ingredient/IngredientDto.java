package com.github.JanBuetikofer.recipemanager.ingredient;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IngredientDto {
    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String unit;

    public static IngredientDto toDto(Ingredient dao) {
        return IngredientDto.builder()
            .id(dao.getId())
            .name(dao.getName())
            .unit(dao.getUnit())
            .build();
    }

    public static Ingredient toDao(IngredientDto dto) {
        return Ingredient.builder()
            .id(dto.getId())
            .name(dto.getName())
            .unit(dto.getUnit())
            .build();
    }
}
