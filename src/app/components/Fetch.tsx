// Define an interface for the food object
export interface Food {
  fdcId: number;
  description: string;
  additionalDescriptions: string;
  foodCategory: string;
}

// Function to fetch the food data based on the search query
export async function fetchFoodData(searchQuery: string): Promise<Food[]> {
  const apiKey = '4BoI0ldDafd7yJ3GgGl16j4AtSeUs9BPyFn6dn0d'; // Replace with your actual API key
  const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(searchQuery)}&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const foods: Food[] = data.foods.map((food: any) => ({
        fdcId: food.fdcId,
        description: food.description,
        additionalDescriptions: food.additionalDescriptions,
        foodCategory: food.foodCategory
      }));

      return foods;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error('An error occurred while fetching the food data.');
  }
}