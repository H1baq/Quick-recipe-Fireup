/* =========================
   RECIPES
========================= */

const recipes = [
    {
        id: "chicken-suqaar",
        title: "Chicken Suqaar",
        emoji: "🍗",
        time: 30,
        difficulty: "Easy",
        category: "chicken",
        tags: ["quick", "chicken"],

        ingredients: [
            "500g chicken, diced",
            "1 onion, sliced",
            "1 tomato, diced",
            "1 green pepper, chopped",
            "2 cloves garlic",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper",
            "2 tbsp cooking oil"
        ],

        steps: [
            "Heat oil in a pan.",
            "Add onion and cook until soft.",
            "Add garlic, chicken and spices.",
            "Cook until the chicken is browned.",
            "Add tomato and green pepper.",
            "Cook for 8–10 minutes and serve."
        ]
    },

    {
        id: "one-pot-bariis",
        title: "One-Pot Bariis",
        emoji: "🍚",
        time: 40,
        difficulty: "Easy",
        category: "one-pot",
        tags: ["one-pot"],

        ingredients: [
            "2 cups basmati rice",
            "400g beef or chicken",
            "1 onion",
            "2 tomatoes",
            "2 cloves garlic",
            "1 tsp cumin",
            "1 tsp cardamom",
            "3 cups water",
            "Salt"
        ],

        steps: [
            "Brown the meat with onion.",
            "Add garlic, tomatoes and spices.",
            "Add washed rice.",
            "Pour in the water.",
            "Cover and simmer until the rice is cooked.",
            "Fluff and serve."
        ]
    },

    {
        id: "chicken-suugo",
        title: "Chicken Suugo",
        emoji: "🍝",
        time: 35,
        difficulty: "Easy",
        category: "chicken",
        tags: ["chicken"],

        ingredients: [
            "300g chicken",
            "250g pasta",
            "1 onion",
            "2 tomatoes",
            "2 cloves garlic",
            "1 tbsp tomato paste",
            "1 tsp Italian herbs",
            "Salt and pepper"
        ],

        steps: [
            "Cook the pasta according to the packet.",
            "Cook onion and garlic in a pan.",
            "Add chicken and brown it.",
            "Add tomatoes and tomato paste.",
            "Season and simmer for 10 minutes.",
            "Mix with pasta and serve."
        ]
    },

    {
        id: "lentil-suugo",
        title: "Lentil Suugo",
        emoji: "🥣",
        time: 25,
        difficulty: "Easy",
        category: "meat-free",
        tags: ["quick", "meat-free"],

        ingredients: [
            "1 cup cooked lentils",
            "1 onion",
            "2 tomatoes",
            "2 cloves garlic",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper",
            "1 tbsp cooking oil"
        ],

        steps: [
            "Heat oil and cook the onion.",
            "Add garlic and spices.",
            "Add tomatoes and cook until soft.",
            "Add lentils.",
            "Simmer for 10 minutes.",
            "Serve with rice or bread."
        ]
    },

    {
        id: "potato-stew",
        title: "Potato Stew",
        emoji: "🥔",
        time: 30,
        difficulty: "Easy",
        category: "meat-free",
        tags: ["quick", "meat-free", "one-pot"],

        ingredients: [
            "4 potatoes",
            "1 onion",
            "2 tomatoes",
            "1 carrot",
            "2 cloves garlic",
            "1 tsp paprika",
            "Salt and pepper",
            "2 cups water"
        ],

        steps: [
            "Cook onion and garlic.",
            "Add tomatoes and spices.",
            "Add potatoes and carrot.",
            "Pour in water.",
            "Cover and simmer until vegetables are tender.",
            "Serve hot."
        ]
    },

    {
        id: "spiced-chicken",
        title: "Spiced Chicken",
        emoji: "🍗",
        time: 45,
        difficulty: "Medium",
        category: "chicken",
        tags: ["chicken"],

        ingredients: [
            "500g chicken",
            "1 onion",
            "3 cloves garlic",
            "1 tsp paprika",
            "1 tsp cumin",
            "1 tsp coriander",
            "1 tbsp lemon juice",
            "Salt and pepper",
            "2 tbsp cooking oil"
        ],

        steps: [
            "Mix chicken with spices and lemon.",
            "Let it sit for 15 minutes.",
            "Heat oil in a pan.",
            "Cook chicken until browned.",
            "Add onion and garlic.",
            "Cook until the chicken is fully done."
        ]
    }
];


/* =========================
   STATE
========================= */

let currentFilter = "all";
let currentSearch = "";
let currentRecipe = null;

let savedRecipes =
    JSON.parse(localStorage.getItem("sahanSaved")) || [];

let cookedRecipes =
    JSON.parse(localStorage.getItem("sahanCooked")) || [];


/* =========================
   ELEMENTS
========================= */

const recipeGrid = document.getElementById("recipeGrid");

const searchInput = document.getElementById("searchInput");

const surpriseBtn = document.getElementById("surpriseBtn");

const savedBtn = document.getElementById("savedBtn");

const savedCount = document.getElementById("savedCount");

const recipeModal = document.getElementById("recipeModal");

const decisionModal = document.getElementById("decisionModal");

const closeRecipeModal =
    document.getElementById("closeRecipeModal");

const closeDecisionModal =
    document.getElementById("closeDecisionModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalTime =
    document.getElementById("modalTime");

const modalDifficulty =
    document.getElementById("modalDifficulty");

const ingredientsList =
    document.getElementById("ingredientsList");

const stepsList =
    document.getElementById("stepsList");

const saveRecipeBtn =
    document.getElementById("saveRecipeBtn");

const cookedBtn =
    document.getElementById("cookedBtn");

const decisionEmoji =
    document.getElementById("decisionEmoji");

const decisionTitle =
    document.getElementById("decisionTitle");

const decisionMeta =
    document.getElementById("decisionMeta");

const tryAgainBtn =
    document.getElementById("tryAgainBtn");

const cookDecisionBtn =
    document.getElementById("cookDecisionBtn");

const pointsValue =
    document.getElementById("pointsValue");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const toast =
    document.getElementById("toast");


/* =========================
   RECIPE BACKGROUNDS
========================= */

function getRecipeBackground(id) {

    const backgrounds = {
        "chicken-suqaar": "#614438",
        "one-pot-bariis": "#5b4d38",
        "chicken-suugo": "#593e35",
        "lentil-suugo": "#4d5140",
        "potato-stew": "#514738",
        "spiced-chicken": "#624239"
    };

    return backgrounds[id] || "#382f28";
}


/* =========================
   DISPLAY RECIPES
========================= */

function displayRecipes() {

    let filteredRecipes = [...recipes];


    // Filter by mood
    if (currentFilter !== "all") {

        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.tags.includes(currentFilter)
        );
    }


    // Search
    if (currentSearch.trim() !== "") {

        const searchTerm =
            currentSearch.toLowerCase().trim();

        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTerm)
        );
    }


    // Saved recipes
    if (currentFilter === "saved") {

        filteredRecipes = recipes.filter(recipe =>
            savedRecipes.includes(recipe.id)
        );
    }


    recipeGrid.innerHTML = "";


    if (filteredRecipes.length === 0) {

        recipeGrid.innerHTML = `
            <div class="empty-state">
                <span>🍽️</span>
                <p>No recipes found.</p>
            </div>
        `;

        return;
    }


    filteredRecipes.forEach(recipe => {

        const card =
            document.createElement("article");

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

                <div class="card-meta">

                    <span>
                        ⏱ ${recipe.time} min
                    </span>

                    <span>
                        ${recipe.difficulty}
                    </span>

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
   OPEN RECIPE
========================= */

function openRecipe(recipe) {

    currentRecipe = recipe;

    modalImage.textContent = recipe.emoji;

    modalImage.style.background =
        getRecipeBackground(recipe.id);

    modalTitle.textContent = recipe.title;

    modalCategory.textContent =
        recipe.category.replace("-", " ").toUpperCase();

    modalTime.textContent =
        `⏱ ${recipe.time} min`;

    modalDifficulty.textContent =
        recipe.difficulty;


    ingredientsList.innerHTML = "";

    recipe.ingredients.forEach(ingredient => {

        const li =
            document.createElement("li");

        li.textContent = ingredient;

        ingredientsList.appendChild(li);

    });


    stepsList.innerHTML = "";

    recipe.steps.forEach(step => {

        const li =
            document.createElement("li");

        li.textContent = step;

        stepsList.appendChild(li);

    });


    updateSaveButton();


    recipeModal.classList.remove("hidden");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE RECIPE
========================= */

function closeRecipe() {

    recipeModal.classList.add("hidden");

    document.body.style.overflow = "";

}


/* =========================
   SAVE RECIPE
========================= */

function saveRecipe() {

    if (!currentRecipe) return;


    if (savedRecipes.includes(currentRecipe.id)) {

        savedRecipes =
            savedRecipes.filter(
                id => id !== currentRecipe.id
            );

        showToast("Removed from saved");

    } else {

        savedRecipes.push(currentRecipe.id);

        showToast("Saved to your kitchen");

    }


    localStorage.setItem(
        "sahanSaved",
        JSON.stringify(savedRecipes)
    );


    updateSavedCount();

    updateSaveButton();

    displayRecipes();
}


/* =========================
   SAVE BUTTON
========================= */

function updateSaveButton() {

    if (!currentRecipe) return;


    if (savedRecipes.includes(currentRecipe.id)) {

        saveRecipeBtn.textContent =
            "♥ Saved";

    } else {

        saveRecipeBtn.textContent =
            "♥ Save";

    }
}


/* =========================
   SAVED COUNT
========================= */

function updateSavedCount() {

    savedCount.textContent =
        savedRecipes.length;

}


/* =========================
   MARK COOKED
========================= */

function markCooked(recipe) {

    if (!recipe) return;


    if (!cookedRecipes.includes(recipe.id)) {

        cookedRecipes.push(recipe.id);

        localStorage.setItem(
            "sahanCooked",
            JSON.stringify(cookedRecipes)
        );

        showToast("Cooked! +10 points");

    } else {

        showToast("Already cooked!");

    }


    updateKitchen();
}


/* =========================
   KITCHEN PROGRESS
========================= */

function updateKitchen() {

    const totalRecipes =
        recipes.length;

    const cookedCount =
        cookedRecipes.length;

    const points =
        cookedCount * 10;

    const percentage =
        (cookedCount / totalRecipes) * 100;


    pointsValue.textContent =
        points;

    progressText.textContent =
        `${cookedCount} / ${totalRecipes}`;

    progressFill.style.width =
        `${percentage}%`;


    // Badge 1
    if (cookedCount >= 1) {

        document
            .getElementById("badge1")
            .classList.add("unlocked");

    }


    // Badge 2
    if (cookedCount >= 3) {

        document
            .getElementById("badge2")
            .classList.add("unlocked");

    }


    // Badge 3
    if (cookedCount >= 6) {

        document
            .getElementById("badge3")
            .classList.add("unlocked");

    }
}


/* =========================
   RANDOM RECIPE
========================= */

function pickRandomRecipe() {

    let availableRecipes = [...recipes];


    if (currentFilter !== "all" &&
        currentFilter !== "saved") {

        availableRecipes =
            availableRecipes.filter(recipe =>
                recipe.tags.includes(currentFilter)
            );
    }


    if (currentFilter === "saved") {

        availableRecipes =
            availableRecipes.filter(recipe =>
                savedRecipes.includes(recipe.id)
            );
    }


    if (availableRecipes.length === 0) {

        showToast("No recipes in this category");

        return;
    }


    const randomIndex =
        Math.floor(
            Math.random() * availableRecipes.length
        );


    currentRecipe =
        availableRecipes[randomIndex];


    decisionEmoji.textContent =
        currentRecipe.emoji;

    decisionTitle.textContent =
        currentRecipe.title;

    decisionMeta.textContent =
        `${currentRecipe.time} min · ${currentRecipe.difficulty}`;


    decisionModal.classList.remove("hidden");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE DECISION
========================= */

function closeDecision() {

    decisionModal.classList.add("hidden");

    document.body.style.overflow = "";

}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);
}


/* =========================
   MOOD FILTERS
========================= */

const moodButtons =
    document.querySelectorAll(".mood-card");


moodButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        if (currentFilter === filter) {

            currentFilter = "all";

            button.classList.remove("active");

        } else {

            currentFilter = filter;

            moodButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

        }


        displayRecipes();

    });

});


/* =========================
   SEARCH
========================= */

searchInput.addEventListener("input", event => {

    currentSearch =
        event.target.value;

    displayRecipes();

});


/* =========================
   SURPRISE BUTTON
========================= */

surpriseBtn.addEventListener(
    "click",
    pickRandomRecipe
);


/* =========================
   SAVED BUTTON
========================= */

savedBtn.addEventListener("click", () => {

    currentFilter = "saved";

    currentSearch = "";

    searchInput.value = "";


    moodButtons.forEach(btn =>
        btn.classList.remove("active")
    );


    displayRecipes();


    document
        .getElementById("recipes")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================
   RECIPE MODAL EVENTS
========================= */

closeRecipeModal.addEventListener(
    "click",
    closeRecipe
);


saveRecipeBtn.addEventListener(
    "click",
    saveRecipe
);


cookedBtn.addEventListener("click", () => {

    markCooked(currentRecipe);

});


/* =========================
   DECISION MODAL EVENTS
========================= */

closeDecisionModal.addEventListener(
    "click",
    closeDecision
);


tryAgainBtn.addEventListener(
    "click",
    pickRandomRecipe
);


cookDecisionBtn.addEventListener(
    "click",
    () => {

        closeDecision();

        openRecipe(currentRecipe);

    }
);


/* =========================
   CLICK OUTSIDE MODALS
========================= */

recipeModal
    .querySelector(".modal-overlay")
    .addEventListener("click", closeRecipe);


decisionModal
    .querySelector(".decision-overlay")
    .addEventListener("click", closeDecision);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeRecipe();

        closeDecision();

    }

});


/* =========================
   NAVIGATION
========================= */

const navButtons =
    document.querySelectorAll(".nav-btn");


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const section =
            button.dataset.section;


        navButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");


        if (section === "recipes") {

            document
                .getElementById("recipes")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }


        if (section === "kitchen") {

            document
                .getElementById("kitchen")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});


/* =========================
   INITIAL LOAD
========================= */

updateSavedCount();

updateKitchen();

displayRecipes();