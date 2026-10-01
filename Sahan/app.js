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
        tags: ["chicken", "pasta"],

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
    },


    /* =========================
       PASTA RECIPES
    ========================= */

    {
        id: "creamy-chicken-pasta",
        title: "Creamy Chicken Pasta",
        emoji: "🍝",
        time: 30,
        difficulty: "Easy",
        category: "pasta",
        tags: ["pasta", "chicken", "creamy"],
        video: "pasta1.mp4",

        ingredients: [
            "250g pasta",
            "300g chicken breast, sliced",
            "1 cup cooking cream",
            "2 cloves garlic",
            "1 small onion",
            "½ cup grated parmesan",
            "1 tbsp butter",
            "Salt and black pepper"
        ],

        steps: [
            "Cook the pasta until al dente and reserve a little pasta water.",
            "Season the chicken with salt and pepper.",
            "Melt butter in a pan and cook the chicken until golden.",
            "Add onion and garlic and cook until soft.",
            "Pour in the cream and add parmesan.",
            "Add the pasta and toss until coated.",
            "Add a little pasta water if needed and serve."
        ]
    },

    {
        id: "spicy-tomato-pasta",
        title: "Spicy Tomato Pasta",
        emoji: "🌶️",
        time: 25,
        difficulty: "Easy",
        category: "pasta",
        tags: ["pasta", "quick", "spicy"],
        video: "pasta2.mp4",

        ingredients: [
            "250g pasta",
            "2 cups tomatoes, chopped",
            "1 onion",
            "3 cloves garlic",
            "1 tsp chilli flakes",
            "1 tbsp tomato paste",
            "2 tbsp olive oil",
            "Salt and black pepper"
        ],

        steps: [
            "Cook the pasta and reserve some pasta water.",
            "Heat oil and cook the onion until soft.",
            "Add garlic and chilli flakes.",
            "Add tomato paste and chopped tomatoes.",
            "Season and simmer for 10 minutes.",
            "Toss the pasta through the sauce.",
            "Add pasta water if needed and serve."
        ]
    },

    {
        id: "chilli-crisp-fettuccine",
        title: "Chilli Crisp Fettuccine Alfredo",
        emoji: "🍜",
        time: 25,
        difficulty: "Easy",
        category: "pasta",
        tags: ["pasta", "creamy", "spicy"],
        video: "pasta3.mp4",

        ingredients: [
            "250g fettuccine",
            "1 cup cooking cream",
            "½ cup grated parmesan",
            "2 tbsp butter",
            "2 cloves garlic",
            "1–2 tbsp chilli crisp",
            "Salt and black pepper"
        ],

        steps: [
            "Cook the fettuccine until al dente.",
            "Melt butter in a pan.",
            "Add garlic and cook gently.",
            "Pour in the cream and add parmesan.",
            "Season with salt and pepper.",
            "Add the chilli crisp.",
            "Toss in the pasta and coat evenly before serving."
        ]
    },

    {
        id: "creamy-tomato-garlic-pasta",
        title: "Creamy Tomato & Garlic Pasta",
        emoji: "🍅",
        time: 30,
        difficulty: "Easy",
        category: "pasta",
        tags: ["pasta", "creamy", "vegetarian"],
        video: "pasta4.mp4",

        ingredients: [
            "250g pasta",
            "2 cups tomatoes",
            "3 cloves garlic",
            "½ cup cooking cream",
            "1 tbsp tomato paste",
            "2 tbsp olive oil",
            "½ tsp Italian herbs",
            "Salt and black pepper"
        ],

        steps: [
            "Cook the pasta until al dente.",
            "Heat olive oil and gently cook the garlic.",
            "Add tomato paste and chopped tomatoes.",
            "Season with herbs, salt and pepper.",
            "Simmer until the tomatoes soften.",
            "Stir in the cream.",
            "Add pasta and toss until well coated."
        ]
    },

    {
        id: "caramelized-onion-pasta",
        title: "Caramelized Onion Pasta",
        emoji: "🧅",
        time: 35,
        difficulty: "Easy",
        category: "pasta",
        tags: ["pasta", "vegetarian", "comfort"],
        video: "pasta5.mp4",

        ingredients: [
            "250g pasta",
            "2 large onions, thinly sliced",
            "2 cloves garlic",
            "2 tbsp butter",
            "½ cup parmesan",
            "½ cup pasta water",
            "1 tsp Italian herbs",
            "Salt and black pepper"
        ],

        steps: [
            "Cook the pasta and reserve some pasta water.",
            "Melt butter in a pan.",
            "Add onions and cook slowly until deeply golden.",
            "Add garlic and Italian herbs.",
            "Add the cooked pasta.",
            "Stir in parmesan and enough pasta water to make it silky.",
            "Season and serve."
        ]
    }
];


/* =========================
   CHEF'S SELECTION
   Keep the homepage selection
   connected to the full recipe menu.
========================= */

const chefSelection = [
    {
        id: "chicken-suqaar",
        label: "HOUSE SPECIAL"
    },
    {
        id: "creamy-chicken-pasta",
        label: "PASTA ROOM"
    },
    {
        id: "chilli-crisp-fettuccine",
        label: "CHEF'S FAVOURITE"
    }
];


/* =========================
   STATE
========================= */

let currentRecipe = null;
let currentKitchenTab = "saved";

let savedRecipes =
    JSON.parse(localStorage.getItem("sahanSaved")) || [];

let cookedRecipes =
    JSON.parse(localStorage.getItem("sahanCooked")) || [];


/* =========================
   GENERAL ELEMENTS
========================= */

const surpriseBtn =
    document.getElementById("surpriseBtn");

const savedCount =
    document.getElementById("savedCount");

const toast =
    document.getElementById("toast");


/* =========================
   MY KITCHEN ELEMENTS
========================= */

const kitchenTrigger =
    document.getElementById("kitchenTrigger");

const kitchenPanel =
    document.getElementById("kitchenPanel");

const kitchenPanelOverlay =
    document.querySelector(".kitchen-panel-overlay");

const closeKitchen =
    document.getElementById("closeKitchen");

const kitchenList =
    document.getElementById("kitchenList");

const kitchenTabs =
    document.querySelectorAll(".kitchen-tab");

const pointsValue =
    document.getElementById("pointsValue");

const cookedCount =
    document.getElementById("cookedCount");

const dashboardSavedCount =
    document.getElementById("dashboardSavedCount");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");


/* =========================
   RECIPE MODAL ELEMENTS
========================= */

const recipeModal =
    document.getElementById("recipeModal");

const closeRecipeModal =
    document.getElementById("closeRecipeModal");

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


/* =========================
   DECISION MODAL
========================= */

const decisionModal =
    document.getElementById("decisionModal");

const closeDecisionModal =
    document.getElementById("closeDecisionModal");

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


/* =========================
   PASTA VIDEO MODAL
========================= */

const pastaVideoModal =
    document.getElementById("pastaVideoModal");

const closePastaVideoModal =
    document.getElementById("closePastaVideoModal");

const pastaModalVideo =
    document.getElementById("pastaModalVideo");

const pastaModalTitle =
    document.getElementById("pastaModalTitle");


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
        "spiced-chicken": "#624239",

        "creamy-chicken-pasta": "#594238",
        "spicy-tomato-pasta": "#673d32",
        "chilli-crisp-fettuccine": "#503d35",
        "creamy-tomato-garlic-pasta": "#60463a",
        "caramelized-onion-pasta": "#514239"
    };

    return backgrounds[id] || "#382f28";
}


/* =========================
   FIND RECIPE
========================= */

function findRecipe(id) {

    return recipes.find(
        recipe => recipe.id === id
    );
}


/* =========================
   OPEN RECIPE
========================= */

function openRecipe(recipe) {

    if (!recipe || !recipeModal) {
        return;
    }

    currentRecipe = recipe;

    if (modalImage) {

        modalImage.textContent =
            recipe.emoji;

        modalImage.style.background =
            getRecipeBackground(recipe.id);
    }

    if (modalTitle) {

        modalTitle.textContent =
            recipe.title;
    }

    if (modalCategory) {

        modalCategory.textContent =
            recipe.category
                .replace("-", " ")
                .toUpperCase();
    }

    if (modalTime) {

        modalTime.textContent =
            `⏱ ${recipe.time} min`;
    }

    if (modalDifficulty) {

        modalDifficulty.textContent =
            recipe.difficulty;
    }


    /* Ingredients */

    if (ingredientsList) {

        ingredientsList.innerHTML = "";

        recipe.ingredients.forEach(
            ingredient => {

                const li =
                    document.createElement("li");

                li.textContent =
                    ingredient;

                ingredientsList.appendChild(li);
            }
        );
    }


    /* Steps */

    if (stepsList) {

        stepsList.innerHTML = "";

        recipe.steps.forEach(
            step => {

                const li =
                    document.createElement("li");

                li.textContent =
                    step;

                stepsList.appendChild(li);
            }
        );
    }


    updateSaveButton();

    recipeModal.classList.remove("hidden");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE RECIPE
========================= */

function closeRecipe() {

    if (!recipeModal) {
        return;
    }

    recipeModal.classList.add("hidden");

    document.body.style.overflow = "";
}


/* =========================
   SAVE RECIPE
========================= */

function saveRecipe() {

    if (!currentRecipe) {
        return;
    }

    if (
        savedRecipes.includes(
            currentRecipe.id
        )
    ) {

        savedRecipes =
            savedRecipes.filter(
                id =>
                    id !== currentRecipe.id
            );

        showToast("Removed from saved");

    } else {

        savedRecipes.push(
            currentRecipe.id
        );

        showToast("Saved to your kitchen");
    }


    localStorage.setItem(
        "sahanSaved",
        JSON.stringify(savedRecipes)
    );


    updateSavedCount();
    updateKitchen();
    updateSaveButton();
    renderKitchenList();
}


/* =========================
   UPDATE SAVE BUTTON
========================= */

function updateSaveButton() {

    if (
        !currentRecipe ||
        !saveRecipeBtn
    ) {
        return;
    }

    if (
        savedRecipes.includes(
            currentRecipe.id
        )
    ) {

        saveRecipeBtn.textContent =
            "♥ Saved";

    } else {

        saveRecipeBtn.textContent =
            "♥ Save";
    }
}


/* =========================
   UPDATE SAVED COUNT
========================= */

function updateSavedCount() {

    if (savedCount) {

        savedCount.textContent =
            savedRecipes.length;
    }

    if (dashboardSavedCount) {

        dashboardSavedCount.textContent =
            savedRecipes.length;
    }
}


/* =========================
   MARK COOKED
========================= */

function markCooked(recipe) {

    if (!recipe) {
        return;
    }

    if (
        !cookedRecipes.includes(
            recipe.id
        )
    ) {

        cookedRecipes.push(
            recipe.id
        );

        localStorage.setItem(
            "sahanCooked",
            JSON.stringify(cookedRecipes)
        );

        showToast("Cooked! +10 points");

    } else {

        showToast("Already cooked!");
    }


    updateKitchen();
    renderKitchenList();
}


/* =========================
   UPDATE KITCHEN
========================= */

function updateKitchen() {

    const totalRecipes =
        recipes.length;

    const cooked =
        cookedRecipes.length;

    const points =
        cooked * 10;

    const percentage =
        totalRecipes > 0
            ? (cooked / totalRecipes) * 100
            : 0;


    if (pointsValue) {

        pointsValue.textContent =
            points;
    }

    if (cookedCount) {

        cookedCount.textContent =
            cooked;
    }

    if (dashboardSavedCount) {

        dashboardSavedCount.textContent =
            savedRecipes.length;
    }

    if (progressText) {

        progressText.textContent =
            `${cooked} / ${totalRecipes}`;
    }

    if (progressFill) {

        progressFill.style.width =
            `${percentage}%`;
    }


    updateBadges();
}


/* =========================
   BADGES
========================= */

function updateBadges() {

    const badge1 =
        document.getElementById("badge1");

    const badge2 =
        document.getElementById("badge2");

    const badge3 =
        document.getElementById("badge3");

    const cooked =
        cookedRecipes.length;


    if (badge1) {

        badge1.classList.toggle(
            "unlocked",
            cooked >= 1
        );
    }

    if (badge2) {

        badge2.classList.toggle(
            "unlocked",
            cooked >= 3
        );
    }

    if (badge3) {

        badge3.classList.toggle(
            "unlocked",
            cooked >= 6
        );
    }
}


/* =========================
   OPEN MY KITCHEN
========================= */

function openKitchen() {

    if (!kitchenPanel) {
        return;
    }

    renderKitchenList();

    kitchenPanel.classList.add("open");

    kitchenPanel.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


/* =========================
   CLOSE MY KITCHEN
========================= */

function closeKitchenPanel() {

    if (!kitchenPanel) {
        return;
    }

    kitchenPanel.classList.remove("open");

    kitchenPanel.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* =========================
   KITCHEN TABS
========================= */

function setKitchenTab(tab) {

    currentKitchenTab =
        tab;

    kitchenTabs.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.kitchenTab === tab
            );
        }
    );

    renderKitchenList();
}


/* =========================
   RENDER KITCHEN LIST
========================= */

function renderKitchenList() {

    if (!kitchenList) {
        return;
    }

    const ids =
        currentKitchenTab === "saved"
            ? savedRecipes
            : cookedRecipes;


    if (ids.length === 0) {

        if (
            currentKitchenTab === "saved"
        ) {

            kitchenList.innerHTML = `
                <div class="kitchen-empty">
                    <span>♡</span>
                    <p>Your saved dishes will appear here.</p>
                </div>
            `;

        } else {

            kitchenList.innerHTML = `
                <div class="kitchen-empty">
                    <span>🍳</span>
                    <p>Dishes you cook will appear here.</p>
                </div>
            `;
        }

        return;
    }


    const kitchenRecipes =
        ids
            .map(findRecipe)
            .filter(Boolean);


    kitchenList.innerHTML =
        kitchenRecipes
            .map(recipe => `
                <button
                    class="kitchen-item"
                    type="button"
                    data-kitchen-recipe="${recipe.id}"
                >
                    <span class="kitchen-item-info">

                        <span class="kitchen-item-title">
                            ${recipe.emoji} ${recipe.title}
                        </span>

                        <span class="kitchen-item-meta">
                            ${recipe.time} min · ${recipe.difficulty}
                        </span>

                    </span>

                    <span class="kitchen-item-arrow">
                        ↗
                    </span>
                </button>
            `)
            .join("");


    const items =
        kitchenList.querySelectorAll(
            ".kitchen-item"
        );


    items.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                const recipeId =
                    item.dataset.kitchenRecipe;

                const recipe =
                    findRecipe(recipeId);

                if (!recipe) {
                    return;
                }

                closeKitchenPanel();

                openRecipe(recipe);
            }
        );
    });
}


/* =========================
   RANDOM CHEF'S CHOICE
========================= */

function pickRandomRecipe() {

    /*
       Because pasta is now inside
       the main recipes array, Chef's
       Choice can pick ANY dish.
    */

    const randomIndex =
        Math.floor(
            Math.random() * recipes.length
        );

    currentRecipe =
        recipes[randomIndex];


    if (decisionEmoji) {

        decisionEmoji.textContent =
            currentRecipe.emoji;
    }

    if (decisionTitle) {

        decisionTitle.textContent =
            currentRecipe.title;
    }

    if (decisionMeta) {

        decisionMeta.textContent =
            `${currentRecipe.time} min · ${currentRecipe.difficulty}`;
    }


    if (decisionModal) {

        decisionModal.classList.remove(
            "hidden"
        );

        document.body.style.overflow =
            "hidden";
    }
}


/* =========================
   CLOSE DECISION
========================= */

function closeDecision() {

    if (!decisionModal) {
        return;
    }

    decisionModal.classList.add("hidden");

    document.body.style.overflow = "";
}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);
}


/* =========================
   SURPRISE BUTTON
========================= */

if (surpriseBtn) {

    surpriseBtn.addEventListener(
        "click",
        pickRandomRecipe
    );
}


/* =========================
   MY KITCHEN EVENTS
========================= */

if (kitchenTrigger) {

    kitchenTrigger.addEventListener(
        "click",
        openKitchen
    );
}


if (closeKitchen) {

    closeKitchen.addEventListener(
        "click",
        closeKitchenPanel
    );
}


if (kitchenPanelOverlay) {

    kitchenPanelOverlay.addEventListener(
        "click",
        closeKitchenPanel
    );
}


kitchenTabs.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            setKitchenTab(
                button.dataset.kitchenTab
            );

        }
    );
});


/* =========================
   RECIPE MODAL EVENTS
========================= */

if (closeRecipeModal) {

    closeRecipeModal.addEventListener(
        "click",
        closeRecipe
    );
}


if (saveRecipeBtn) {

    saveRecipeBtn.addEventListener(
        "click",
        saveRecipe
    );
}


if (cookedBtn) {

    cookedBtn.addEventListener(
        "click",
        () => {

            markCooked(
                currentRecipe
            );

        }
    );
}


/* =========================
   RECIPE MODAL OVERLAY
========================= */

if (recipeModal) {

    const recipeOverlay =
        recipeModal.querySelector(
            ".modal-overlay"
        );

    if (recipeOverlay) {

        recipeOverlay.addEventListener(
            "click",
            closeRecipe
        );
    }
}


/* =========================
   DECISION MODAL EVENTS
========================= */

if (closeDecisionModal) {

    closeDecisionModal.addEventListener(
        "click",
        closeDecision
    );
}


if (tryAgainBtn) {

    tryAgainBtn.addEventListener(
        "click",
        pickRandomRecipe
    );
}


if (cookDecisionBtn) {

    cookDecisionBtn.addEventListener(
        "click",
        () => {

            closeDecision();

            openRecipe(
                currentRecipe
            );

        }
    );
}


/* =========================
   DECISION MODAL OVERLAY
========================= */

if (decisionModal) {

    const decisionOverlay =
        decisionModal.querySelector(
            ".decision-overlay"
        );

    if (decisionOverlay) {

        decisionOverlay.addEventListener(
            "click",
            closeDecision
        );
    }
}


/* =========================
   PASTA VIDEO MODAL
========================= */

function openPastaVideo(
    videoSource,
    title
) {

    if (
        !pastaVideoModal ||
        !pastaModalVideo
    ) {
        return;
    }


    if (pastaModalTitle) {

        pastaModalTitle.textContent =
            title;
    }


    pastaModalVideo.src =
        videoSource;


    pastaVideoModal.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";


    pastaModalVideo
        .play()
        .catch(() => {});
}


/* =========================
   CLOSE PASTA VIDEO
========================= */

function closePastaVideo() {

    if (
        !pastaVideoModal ||
        !pastaModalVideo
    ) {
        return;
    }


    pastaModalVideo.pause();

    pastaModalVideo.currentTime = 0;

    pastaModalVideo.removeAttribute(
        "src"
    );

    pastaModalVideo.load();


    pastaVideoModal.classList.add(
        "hidden"
    );


    document.body.style.overflow = "";
}


/* =========================
   PASTA VIDEO CARDS
========================= */

const pastaCards =
    document.querySelectorAll(
        ".pasta-card"
    );


pastaCards.forEach(card => {

    const video =
        card.querySelector("video");

    const playButton =
        card.querySelector(".play-icon");

    const watchButton =
        card.querySelector(".pasta-view-btn");


    /* Preview video on hover */

    if (video) {

        card.addEventListener(
            "mouseenter",
            () => {

                video.play()
                    .catch(() => {});

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                video.pause();

                video.currentTime = 0;

            }
        );
    }


    /* Play icon */

    if (playButton) {

        playButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                if (!video) {
                    return;
                }


                const videoSource =
                    video.getAttribute("src");

                const title =
                    watchButton
                        ? watchButton.dataset.title
                        : "Pasta";


                openPastaVideo(
                    videoSource,
                    title
                );
            }
        );
    }


    /* Watch button */

    if (watchButton) {

        watchButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();


                const videoSource =
                    watchButton.dataset.video;

                const title =
                    watchButton.dataset.title;


                openPastaVideo(
                    videoSource,
                    title
                );
            }
        );
    }

});


/* =========================
   NAVIGATION
========================= */

const navButtons =
    document.querySelectorAll(
        ".nav-btn"
    );


navButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const section =
                button.dataset.section;


            navButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");


            const target =
                document.getElementById(section);


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }
    );

});


/* =========================
   CHEF'S SELECTION
========================= */

function setupChefSelection() {

    const selectionCards =
        document.querySelectorAll(
            ".selection-card"
        );


    selectionCards.forEach(
        (card, index) => {

            const selection =
                chefSelection[index];

            if (!selection) {
                return;
            }


            const recipe =
                findRecipe(selection.id);

            if (!recipe) {
                return;
            }


            /*
               Update the existing card
               so the homepage selection
               actually represents the
               recipe collection.
            */

            card.dataset.recipe =
                recipe.id;


            const label =
                card.querySelector(
                    ".selection-card-content p"
                );

            const title =
                card.querySelector(
                    ".selection-card-content h3"
                );

            const meta =
                card.querySelector(
                    ".selection-card-content span"
                );


            if (label) {

                label.textContent =
                    selection.label;
            }


            if (title) {

                title.textContent =
                    recipe.title;
            }


            if (meta) {

                meta.textContent =
                    `${recipe.time} min · ${recipe.difficulty}`;
            }
        }
    );


    selectionCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const recipeId =
                    card.dataset.recipe;

                const recipe =
                    findRecipe(recipeId);


                if (recipe) {

                    openRecipe(recipe);
                }
            }
        );

    });
}


setupChefSelection();


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        closeKitchenPanel();

        closeRecipe();

        closeDecision();

        closePastaVideo();

    }
);


/* =========================
   INITIAL LOAD
========================= */

updateSavedCount();

updateKitchen();

renderKitchenList();