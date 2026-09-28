/* ==========================================
   SAHAN RECIPE DATA
========================================== */

const recipes = [

  {
    id: "chicken-suqaar",

    title: "Chicken Suqaar",

    categories: ["chicken", "one-pot"],

    tag: "Chicken",

    description:
      "Tender chicken, peppers and onions with warm Somali spices.",

    time: 35,

    difficulty: "Easy",

    emoji: "🍗",

    background: "#e8d5bd",

    ingredients: [
      "500g chicken breast, cubed",
      "1 onion, sliced",
      "1 bell pepper",
      "2 tomatoes, diced",
      "2 garlic cloves",
      "1 tbsp xawaash",
      "2 tbsp cooking oil",
      "Salt to taste"
    ],

    steps: [
      "Heat oil in a wide pan and soften the onion.",
      "Add garlic, chicken and xawaash. Cook until the chicken starts to brown.",
      "Add tomatoes and bell pepper. Stir and cover.",
      "Cook for 10–12 minutes until tender.",
      "Taste for salt and serve with rice, canjeero or bread."
    ]
  },


  {
    id: "one-pot-bariis",

    title: "One-Pot Chicken Bariis",

    categories: ["chicken", "one-pot"],

    tag: "One pot",

    description:
      "Fragrant spiced rice and chicken made in one pot.",

    time: 45,

    difficulty: "Easy",

    emoji: "🍚",

    background: "#e5d9b9",

    ingredients: [
      "2 cups basmati rice",
      "500g chicken pieces",
      "1 onion",
      "2 carrots",
      "2 tbsp tomato paste",
      "2 tsp xawaash",
      "3 cups stock",
      "Salt"
    ],

    steps: [
      "Brown the chicken and onion in a large pot.",
      "Add tomato paste, carrots and spices.",
      "Stir in washed rice and stock.",
      "Bring to a simmer, cover and cook until rice is tender.",
      "Rest for 10 minutes before fluffing and serving."
    ]
  },


  {
    id: "chicken-suugo",

    title: "Chicken Suugo",

    categories: ["chicken", "quick"],

    tag: "Chicken",

    description:
      "A cozy tomato chicken sauce for pasta, rice or bread.",

    time: 30,

    difficulty: "Easy",

    emoji: "🍝",

    background: "#e3c2ae",

    ingredients: [
      "400g chicken",
      "1 onion",
      "3 tomatoes",
      "2 tbsp tomato paste",
      "2 garlic cloves",
      "1 tsp cumin",
      "1 tsp xawaash",
      "Oil and salt"
    ],

    steps: [
      "Cook onion and garlic until soft.",
      "Add chicken and brown lightly.",
      "Stir in tomatoes, tomato paste and spices.",
      "Cover and simmer for 15 minutes.",
      "Serve over pasta or rice."
    ]
  },


  {
    id: "lentil-suugo",

    title: "Lentil Suugo",

    categories: ["meat-free", "one-pot"],

    tag: "Meat-free",

    description:
      "Comforting lentils in a rich tomato and spice sauce.",

    time: 35,

    difficulty: "Easy",

    emoji: "🥣",

    background: "#cbd0b7",

    ingredients: [
      "1 cup red lentils",
      "1 onion",
      "3 tomatoes",
      "2 garlic cloves",
      "1 tsp cumin",
      "1 tsp xawaash",
      "3 cups water",
      "Salt"
    ],

    steps: [
      "Sauté onion and garlic until soft.",
      "Add tomatoes and spices.",
      "Add washed lentils and water.",
      "Simmer for 20 minutes until creamy.",
      "Serve with bread, rice or canjeero."
    ]
  },


  {
    id: "potato-stew",

    title: "Potato & Carrot Stew",

    categories: ["meat-free", "one-pot"],

    tag: "Meat-free",

    description:
      "Soft potatoes and sweet carrots in a simple spiced tomato broth.",

    time: 40,

    difficulty: "Easy",

    emoji: "🥔",

    background: "#d9c7a6",

    ingredients: [
      "4 potatoes",
      "3 carrots",
      "1 onion",
      "3 tomatoes",
      "2 garlic cloves",
      "1 tsp cumin",
      "2 cups water",
      "Salt"
    ],

    steps: [
      "Sauté onion and garlic.",
      "Add tomatoes and spices and cook down.",
      "Add potatoes, carrots and water.",
      "Cover and simmer until vegetables are tender.",
      "Taste and serve warm."
    ]
  },


  {
    id: "spiced-chicken",

    title: "Quick Spiced Chicken",

    categories: ["chicken", "quick"],

    tag: "Quick",

    description:
      "Golden pan chicken for when you need dinner without the fuss.",

    time: 25,

    difficulty: "Easy",

    emoji: "🍗",

    background: "#d9b69d",

    ingredients: [
      "500g chicken strips",
      "1 tbsp xawaash",
      "1 tsp paprika",
      "2 garlic cloves",
      "1 lemon",
      "2 tbsp oil",
      "Salt"
    ],

    steps: [
      "Toss chicken with spices, garlic, lemon and salt.",
      "Heat oil in a pan.",
      "Cook chicken over medium-high heat until golden and cooked through.",
      "Rest for 2 minutes.",
      "Serve with a simple salad, rice or flatbread."
    ]
  }

];


/* ==========================================
   APP STATE
========================================== */

let activeCategory = "all";

let searchTerm = "";

let savedRecipes =
  JSON.parse(
    localStorage.getItem("sahanSaved") || "[]"
  );

let cookedRecipes =
  JSON.parse(
    localStorage.getItem("sahanCooked") || "[]"
  );

let currentRecipe = null;


/* ==========================================
   ELEMENTS
========================================== */

const recipeGrid =
  document.getElementById("recipeGrid");

const emptyMessage =
  document.getElementById("emptyMessage");

const searchInput =
  document.getElementById("searchInput");

const modal =
  document.getElementById("recipeModal");

const toast =
  document.getElementById("toast");


/* ==========================================
   DISPLAY RECIPES
========================================== */

function renderRecipes() {

  const filteredRecipes =
    recipes.filter(recipe => {

      const categoryMatch =
        activeCategory === "all" ||
        recipe.categories.includes(activeCategory);


      const searchableText =
        `
          ${recipe.title}
          ${recipe.description}
          ${recipe.tag}
          ${recipe.categories.join(" ")}
        `.toLowerCase();


      const searchMatch =
        searchableText.includes(
          searchTerm.toLowerCase()
        );


      return categoryMatch && searchMatch;

    });


  recipeGrid.innerHTML =
    filteredRecipes
      .map(recipe => createRecipeCard(recipe))
      .join("");


  emptyMessage.style.display =
    filteredRecipes.length
      ? "none"
      : "block";

}


/* ==========================================
   RECIPE CARD
========================================== */

function createRecipeCard(recipe) {

  const isSaved =
    savedRecipes.includes(recipe.id);


  return `

    <article
      class="recipe-card"
      data-recipe="${recipe.id}"
    >

      <div
        class="card-image"
        style="background:${recipe.background}"
      >

        <span class="card-emoji">
          ${recipe.emoji}
        </span>

      </div>


      <div class="card-body">

        <div class="card-top">

          <span class="card-tag">
            ${recipe.tag}
          </span>


          <button
            class="save-card ${isSaved ? "saved" : ""}"
            data-save="${recipe.id}"
          >
            ${isSaved ? "♥" : "♡"}
          </button>

        </div>


        <h3>
          ${recipe.title}
        </h3>


        <p>
          ${recipe.description}
        </p>


        <div class="card-meta">

          <span>
            ⏱ ${recipe.time} min
          </span>

          <span>
            ${recipe.difficulty}
          </span>

        </div>

      </div>

    </article>

  `;
}


/* ==========================================
   FILTERS
========================================== */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".filter")
        .forEach(item => {
          item.classList.remove("active");
        });


      button.classList.add("active");


      activeCategory =
        button.dataset.category;


      renderRecipes();

    });

  });


/* ==========================================
   SEARCH
========================================== */

searchInput.addEventListener(
  "input",
  event => {

    searchTerm =
      event.target.value;

    renderRecipes();

  }
);


/* ==========================================
   RECIPE GRID CLICK
========================================== */

recipeGrid.addEventListener(
  "click",
  event => {

    const saveButton =
      event.target.closest("[data-save]");


    if (saveButton) {

      saveRecipe(
        saveButton.dataset.save
      );

      return;

    }


    const card =
      event.target.closest(".recipe-card");


    if (!card) return;


    openRecipe(
      card.dataset.recipe
    );

  }
);


/* ==========================================
   SAVE RECIPE
========================================== */

function saveRecipe(id) {

  if (savedRecipes.includes(id)) {

    savedRecipes =
      savedRecipes.filter(
        recipeId => recipeId !== id
      );

    showToast(
      "Removed from your saved recipes"
    );

  } else {

    savedRecipes.push(id);

    showToast(
      "Saved to your kitchen ♡"
    );

  }


  localStorage.setItem(
    "sahanSaved",
    JSON.stringify(savedRecipes)
  );


  renderRecipes();

  updateStats();


  if (currentRecipe) {
    updateModalSave();
  }

}


/* ==========================================
   COOK RECIPE
========================================== */

function cookRecipe(id) {

  if (!cookedRecipes.includes(id)) {

    cookedRecipes.push(id);


    localStorage.setItem(
      "sahanCooked",
      JSON.stringify(cookedRecipes)
    );


    showToast(
      "+20 points! Recipe cooked ✦"
    );


    updateStats();

  } else {

    showToast(
      "You've already cooked this one ✦"
    );

  }

}


/* ==========================================
   OPEN RECIPE MODAL
========================================== */

function openRecipe(id) {

  const recipe =
    recipes.find(
      item => item.id === id
    );


  if (!recipe) return;


  currentRecipe = recipe;


  document.getElementById(
    "modalImage"
  ).textContent =
    recipe.emoji;


  document.getElementById(
    "modalImage"
  ).style.background =
    recipe.background;


  document.getElementById(
    "modalCategory"
  ).textContent =
    recipe.tag.toUpperCase();


  document.getElementById(
    "modalTitle"
  ).textContent =
    recipe.title;


  document.getElementById(
    "modalDescription"
  ).textContent =
    recipe.description;


  document.getElementById(
    "modalInfo"
  ).innerHTML = `

    <span>
      ⏱ ${recipe.time} min
    </span>

    <span>•</span>

    <span>
      ${recipe.difficulty}
    </span>

  `;


  document.getElementById(
    "ingredients"
  ).innerHTML =

    recipe.ingredients
      .map(
        ingredient =>
          `<li>${ingredient}</li>`
      )
      .join("");


  document.getElementById(
    "steps"
  ).innerHTML =

    recipe.steps
      .map(
        step =>
          `<li>${step}</li>`
      )
      .join("");


  updateModalSave();


  modal.classList.remove(
    "hidden"
  );


  document.body.style.overflow =
    "hidden";

}


/* ==========================================
   MODAL SAVE
========================================== */

function updateModalSave() {

  const button =
    document.getElementById(
      "saveRecipeButton"
    );


  const saved =
    savedRecipes.includes(
      currentRecipe.id
    );


  button.textContent =
    saved
      ? "♥ Saved"
      : "♡ Save";

}


/* ==========================================
   MODAL BUTTONS
========================================== */

document
  .querySelectorAll("[data-open-recipe]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        openRecipe(
          button.dataset.openRecipe
        );

      }
    );

  });


document
  .querySelectorAll("[data-close]")
  .forEach(element => {

    element.addEventListener(
      "click",
      closeModal
    );

  });


function closeModal() {

  modal.classList.add(
    "hidden"
  );

  document.body.style.overflow =
    "";

}


document
  .getElementById("saveRecipeButton")
  .addEventListener(
    "click",
    () => {

      saveRecipe(
        currentRecipe.id
      );

    }
  );


document
  .getElementById("cookedButton")
  .addEventListener(
    "click",
    () => {

      cookRecipe(
        currentRecipe.id
      );

    }
  );


/* ESC KEY */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeModal();
    }

  }
);


/* ==========================================
   SAVED RECIPES
========================================== */

document
  .getElementById("savedButton")
  .addEventListener(
    "click",
    () => {

      if (!savedRecipes.length) {

        showToast(
          "No saved recipes yet — tap ♡ on a recipe"
        );

        return;

      }


      activeCategory = "all";

      searchTerm = "";

      searchInput.value = "";


      document
        .querySelectorAll(".filter")
        .forEach(filter => {

          filter.classList.toggle(
            "active",
            filter.dataset.category === "all"
          );

        });


      const saved =
        recipes.filter(
          recipe =>
            savedRecipes.includes(
              recipe.id
            )
        );


      recipeGrid.innerHTML =
        saved
          .map(recipe =>
            createRecipeCard(recipe)
          )
          .join("");


      emptyMessage.style.display =
        "none";


      document
        .getElementById("recipes")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* ==========================================
   GAMIFICATION
========================================== */

function updateStats() {

  const cookedCount =
    cookedRecipes.length;


  const points =
    cookedCount * 20;


  const target = 3;


  const progress =
    Math.min(
      (cookedCount / target) * 100,
      100
    );


  document.getElementById(
    "savedCount"
  ).textContent =
    savedRecipes.length;


  document.getElementById(
    "progressText"
  ).textContent =
    `${cookedCount} / ${target} recipes cooked`;


  document.getElementById(
    "pointsText"
  ).textContent =
    `${points} pts`;


  document.getElementById(
    "progressBar"
  ).style.width =
    `${progress}%`;


  document
    .querySelectorAll(".badge")
    .forEach(badge => {

      const required =
        Number(
          badge.dataset.required
        );


      const unlocked =
        cookedCount >= required;


      badge.classList.toggle(
        "unlocked",
        unlocked
      );


      badge.querySelector(
        "small"
      ).textContent =
        unlocked
          ? "UNLOCKED"
          : "LOCKED";

    });

}


/* ==========================================
   TOAST
========================================== */

function showToast(message) {

  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2200);

}


/* ==========================================
   START APP
========================================== */

renderRecipes();

updateStats();