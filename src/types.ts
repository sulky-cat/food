export type HOCProps = { children: React.ReactNode; className?: string }

export type SearchProps = { placeholder?: string; className?: string }

export type Dish = {
   id: number | string
   title: string
   image: string
   user_name: string
   user_id: number | string
}

export type RecipesListProps =
   | {
        recipes: Dish[]
        mainTitle: string
        secondTitle?: never
     }
   | {
        recipes: Dish[]
        mainTitle?: never
        secondTitle: string
     }

export type RecipeStep = {
   description: string
   image: string
}
export type Recipe = {
   id: number | string
   user_id: number | string
   title: string
   semiTitle?: string
   image: string
   time: number
   description: string
   ingredients: string[]
   steps: RecipeStep[]
}

export type RecipeDecsriptionProps = Omit<Recipe, 'steps' | 'id' | 'user_id'>
export type RecipeStepsProps = Pick<Recipe, 'steps'>
