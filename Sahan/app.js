/* =========================
   RECIPES
========================= */

const recipes = [

    {
        id: "chicken-suqaar",
        title: "Chicken Suqaar",
        category: "chicken",
        categories: ["chicken", "quick"],
        emoji: "🍗",
        time: 30,
        difficulty: "Easy",
        description:
            "Tender chicken with colourful vegetables and warm Somali spices.",
        ingredients: [
            "500g chicken breast, cubed",
            "1 onion, sliced",
            "1 tomato, diced",
            "1 green pepper, chopped",
            "2 cloves garlic",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and black pepper",
            "2 tbsp cooking oil"
        ],
        steps: [
            "Heat oil in a large pan.",
            "Add onion and garlic and cook until soft.",
            "Add the chicken and season with cumin, paprika, salt and pepper.",
            "Cook until the chicken is browned and cooked through.",
            "Add tomato and green pepper.",
            "Cook for another 5–7 minutes.",
            "Serve with rice, pasta or flatbread."
        ]
    },

    {
        id: "one-pot-bariis",
        title: "Easy One-Pot Bariis",
        category: "one-pot",
        categories: ["one-pot"],
        emoji: "🍚",
        time: 40,
        difficulty: "Easy",
        description:
            "A comforting spiced rice dish without the pile of dishes.",
        ingredients: [
            "2 cups basmati rice",
            "1 onion",
            "2 tomatoes",
            "1 carrot",
            "2 cloves garlic",
            "1 tsp cumin",
            "1 tsp cardamom",
            "3 cups stock",
            "Salt and pepper"
        ],
        steps: [
            "Wash the rice and set aside.",
            "Cook onion, garlic and tomatoes in a large pot.",
            "Add the spices and stir.",
            "Add rice and mix well.",
            "Pour in the stock.",
            "Cover and cook until the rice is tender.",
            "Rest for 5 minutes before serving."
        ]
    },

    {
        id: "chicken-suugo",
        title: "Chicken Suugo",
        category: "chicken",
        categories: ["chicken"],
        emoji: "🍝",
        time: 35,
        difficulty: "Easy",
        description:
            "A simple tomato-based chicken pasta for a proper comfort-food evening.",
        ingredients: [
            "300g pasta",
            "300g chicken",
            "1 onion",
            "2 tomatoes",
            "2 cloves garlic",
            "1 tbsp tomato paste",
            "1 tsp paprika",
            "Salt and pepper"
        ],
        steps: [
            "Cook pasta according to the packet instructions.",
            "Cook onion and garlic in a pan.",
            "Add chicken and season.",
            "Add tomatoes and tomato paste.",
            "Simmer until the sauce thickens.",
            "Mix with the cooked pasta.",
            "Serve hot."
        ]
    },

    {
        id: "lentil-suugo",
        title: "Lentil Suugo",
        category: "meat-free",
        categories: ["meat-free", "quick"],
        emoji: "🥣",
        time: 25,
        difficulty: "Easy",
        description:
            "A warm, filling lentil stew when you want something simple without meat.",
        ingredients: [
            "2 cups cooked lentils",
            "1 onion",
            "2 tomatoes",
            "2 cloves garlic",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper",
            "1 tbsp cooking oil"
        ],
        steps: [
            "Cook onion and garlic until soft.",
            "Add tomatoes and spices.",
            "Cook until the tomatoes break down.",
            "Add the lentils.",
            "Add a little water if needed.",
            "Simmer for 10 minutes.",
            "Serve with rice or bread."
        ]
    },

    {
        id: "potato-stew",
        title: "Simple Potato Stew",
        category: "one-pot",
        categories: ["one-pot", "meat-free"],
        emoji: "🥔",
        time: 35,
        difficulty: "Easy",
        description:
            "A cosy potato stew made in one pot with very little effort.",
        ingredients: [
            "5 potatoes",
            "1 onion",
            "2 tomatoes",
            "1 carrot",
            "2 cloves garlic",
            "1 tsp cumin",
            "2 cups vegetable stock",
            "Salt and pepper"
        ],
        steps: [
            "Chop potatoes and vegetables.",
            "Cook onion and garlic in a pot.",
            "Add tomatoes and spices.",
            "Add potatoes and carrots.",
            "Pour in vegetable stock.",
            "Cover and simmer until the potatoes are tender.",
            "Taste and adjust seasoning."
        ]
    },

    {
        id: "spiced-chicken",
        title: "Quick Spiced Chicken",
        category: "chicken",
        categories: ["chicken", "quick"],
        emoji: "🍗",
        time: 20,
        difficulty: "Very easy",
        description:
            "Twenty-minute chicken for those evenings when hunger has no patience.",
        ingredients: [
            "500g chicken",
            "1 onion",
            "2 cloves garlic",
            "1 tsp paprika",
            "1 tsp cumin",
            "½ tsp turmeric",
            "Salt and pepper",
            "2 tbsp cooking oil"
        ],
        steps: [
            "Cut chicken into small pieces.",
            "Heat oil in a pan.",
            "Add onion and garlic.",
            "Add chicken and spices.",
            "Cook until completely cooked through.",
            "Serve with bread, rice or vegetables."
        ]
    }

];


/* =========================
   STATE
========================= */

let savedRecipes =
    JSON.parse(localStorage.getItem("sahanSaved")) || [];

let cookedRecipes =
    JSON.parse(localStorage.getItem("sahanCooked")) || [];

let currentRecipe = null;


/* =========================
   ELEMENTS
========================= */

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");

const savedCount = document.getElementById("savedCount");

const recipeModal = document.getElementById("recipeModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalEmoji = document.getElementById("modalEmoji");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");

const ingredientsList = document.getElementById("ingredientsList");
const stepsList = document.getElementById("stepsList");

const saveRecipeBtn = document.getElementById("saveRecipeBtn");
const cookedBtn = document.getElementById("cookedBtn");

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMood = document.getElementById("surpriseMood");

const decisionModal = document.getElementById("decisionModal");
const closeDecision = document.getElementById("closeDecision");

const decisionEmoji = document.getElementById("decisionEmoji");
const decisionTitle = document.getElementById("decisionTitle");
const decisionText = document.getElementById("decisionText");

const decisionCook = document.getElementById("decisionCook");
const decisionAgain = document.getElementById("decisionAgain");

const toast = document.getElementById("toast");

const pointsText = document.getElementById("pointsText");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");


/* =========================
   DISPLAY RECIPES
========================= */

function displayRecipes(list = recipes) {

    recipeGrid.innerHTML = "";

    if (list.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    list.forEach(recipe => {

        const card = document.createElement("article");

        card.className = "recipe-card";

        card.innerHTML = `
            <div
                class="recipe-image"
                style="background: ${getRecipeBackground(recipe.id)}"
            >
                ${recipe.emoji}
            </div>

            <div class="recipe-info">

                <h3>${recipe.title}</h3>

                <p>${recipe.description}</p>

                <div class="card-meta">
                    <span>⏱ ${recipe.time} min</span>
                    <span>${capitalize(recipe.difficulty)}</span>
                </div>

            </div>
        `;

        card.addEventListener("click", () => {
            openRecipe(recipe);
        });

        recipeGrid.appendChild(card);
    });
}


/* =========================
   BACKGROUND
========================= */

function getRecipeBackground(id) {

    const backgrounds = {
        "chicken-suqaar": "#ead1bd",
        "one-pot-bariis": "#ddd5b5",
        "chicken-suugo": "#d7b8a8",
        "lentil-suugo": "#c9d0bd",
        "potato-stew": "#ddd0aa",
        "spiced-chicken": "#e5c29e"
    };

    return backgrounds[id] || "#ded4c5";
}


/* =========================
   OPEN RECIPE
========================= */

function openRecipe(recipe) {

    currentRecipe = recipe;

    modalTitle.textContent = recipe.title;
    modalEmoji.textContent = recipe.emoji;

    modalCategory.textContent =
        recipe.category.replace("-", " ").toUpperCase();

    modalDescription.textContent = recipe.description;

    ingredientsList.innerHTML = "";

    recipe.ingredients.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        ingredientsList.appendChild(li);
    });


    stepsList.innerHTML = "";

    recipe.steps.forEach(step => {

        const li = document.createElement("li");

        li.textContent = step;

        stepsList.appendChild(li);
    });


    updateSaveButton();

    recipeModal.classList.add("show");
}


/* =========================
   CLOSE RECIPE
========================= */

function closeRecipeModal() {

    recipeModal.classList.remove("show");
}

closeModal.addEventListener("click", closeRecipeModal);

modalOverlay.addEventListener("click", closeRecipeModal);


/* =========================
   SAVE
========================= */

function updateSaveButton() {

    if (!currentRecipe) return;

    const isSaved =
        savedRecipes.includes(currentRecipe.id);

    saveRecipeBtn.textContent =
        isSaved ? "♥ Saved" : "♡ Save recipe";
}


saveRecipeBtn.addEventListener("click", () => {

    if (!currentRecipe) return;

    const index =
        savedRecipes.indexOf(currentRecipe.id);

    if (index === -1) {

        savedRecipes.push(currentRecipe.id);

        showToast("Saved for later, Chef.");

    } else {

        savedRecipes.splice(index, 1);

        showToast("Removed from saved recipes.");
    }

    localStorage.setItem(
        "sahanSaved",
        JSON.stringify(savedRecipes)
    );

    updateSaveButton();

    updateSavedCount();
});


/* =========================
   COOKED
========================= */

cookedBtn.addEventListener("click", () => {

    if (!currentRecipe) return;

    if (!cookedRecipes.includes(currentRecipe.id)) {

        cookedRecipes.push(currentRecipe.id);

        localStorage.setItem(
            "sahanCooked",
            JSON.stringify(cookedRecipes)
        );

        updateKitchen();

        showToast(
            "Look at you, Chef. Dinner handled. ✦"
        );

    } else {

        showToast(
            "Already counted, Chef 😌"
        );
    }
});


/* =========================
   RANDOM RECIPE
========================= */

function pickRandomRecipe() {

    const randomIndex =
        Math.floor(Math.random() * recipes.length);

    const recipe = recipes[randomIndex];

    decisionEmoji.textContent = recipe.emoji;

    decisionTitle.textContent = recipe.title;

    decisionText.textContent =
        `${recipe.time} minutes. ${recipe.description}`;

    decisionCook.onclick = () => {

        decisionModal.classList.remove("show");

        openRecipe(recipe);
    };

    decisionModal.classList.add("show");
}


surpriseBtn.addEventListener(
    "click",
    pickRandomRecipe
);

surpriseMood.addEventListener(
    "click",
    pickRandomRecipe
);

closeDecision.addEventListener(
    "click",
    () => decisionModal.classList.remove("show")
);

decisionAgain.addEventListener(
    "click",
    pickRandomRecipe
);


/* =========================
   FILTERS
========================= */

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".filter-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        if (filter === "all") {

            displayRecipes(recipes);

        } else {

            const filtered =
                recipes.filter(recipe =>
                    recipe.categories.includes(filter)
                );

            displayRecipes(filtered);
        }
    });
});


/* =========================
   MOOD BUTTONS
========================= */

document.querySelectorAll(".mood-card[data-filter]")
    .forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            const matching =
                recipes.filter(recipe =>
                    recipe.categories.includes(filter)
                );

            displayRecipes(matching);

            document
                .querySelectorAll(".filter-btn")
                .forEach(btn => {

                    btn.classList.toggle(
                        "active",
                        btn.dataset.filter === filter
                    );

                });

            document
                .getElementById("recipes")
                .scrollIntoView({
                    behavior: "smooth"
                });
        });

    });


/* =========================
   SEARCH
========================= */

searchInput.addEventListener("input", () => {

    const search =
        searchInput.value.toLowerCase().trim();

    const results =
        recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search) ||
            recipe.category.toLowerCase().includes(search)
        );

    displayRecipes(results);
});


/* =========================
   SAVED BUTTON
========================= */

document.getElementById("savedBtn")
    .addEventListener("click", () => {

        const saved =
            recipes.filter(recipe =>
                savedRecipes.includes(recipe.id)
            );

        displayRecipes(saved);

        document
            .querySelectorAll(".filter-btn")
            .forEach(btn =>
                btn.classList.remove("active")
            );

        document
            .getElementById("recipes")
            .scrollIntoView({
                behavior: "smooth"
            });

        if (saved.length === 0) {

            showToast(
                "Nothing saved yet, Chef."
            );
        }
    });


/* =========================
   SAVED COUNT
========================= */

function updateSavedCount() {

    savedCount.textContent =
        savedRecipes.length;
}


/* =========================
   KITCHEN PROGRESS
========================= */

function updateKitchen() {

    const cookedCount =
        cookedRecipes.length;

    const points =
        cookedCount * 20;

    const progress =
        Math.min((cookedCount / 3) * 100, 100);

    pointsText.textContent =
        `${points} points`;

    progressText.textContent =
        `${cookedCount} / 3 cooks`;

    progressFill.style.width =
        `${progress}%`;
}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    clearTimeout(toastTimer);

    toast.textContent = message;

    toast.classList.add("show");

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================
   HELPER
========================= */

function capitalize(text) {

    return text.charAt(0).toUpperCase() +
        text.slice(1);
}


/* =========================
   START APP
========================= */

displayRecipes();

updateSavedCount();

updateKitchen();