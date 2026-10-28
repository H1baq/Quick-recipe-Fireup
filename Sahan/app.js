/* =========================
   THE WEEK'S MENU
   One recipe per weekday (1 = Monday ... 5 = Friday),
   each hidden behind its own little activity.

   Activity types:
   - voicenote  { src, message }                listen to the end (message is an optional text bubble)
   - quote      { quote, answer, choices, author }  finish the quote ("___" marks the gap)
   - scratch    {}                              scratch the card off
   - memory     { pairs }                       match the pairs
   - stir       { taps }                        stir the pot

   Tip: add ?day=wed to the URL to preview any day.
========================= */

const weekMenu = {

    1: {
        day: "Monday",

        activity: {
            type: "voicenote",
            src: "voicenotes/monday.mp4",
            message: "Listen to this before you cook today 🤍",
            prompt: "Hibaq left you a voice note. Listen all the way through to unlock today's dish."
        },

        recipe: {
            title: "Creamy Chicken Pasta",
            emoji: "🍝",
            time: 30,
            difficulty: "Easy",
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
        }
    },

    2: {
        day: "Tuesday",

        activity: {
            type: "quote",
            quote: "People who love to ___ are always the best people.",
            answer: "eat",
            choices: ["cook", "eat", "dance"],
            author: "Julia Child",
            prompt: "Finish the quote to unlock today's dish."
        },

        recipe: {
            title: "Spicy Tomato Pasta",
            emoji: "🌶️",
            time: 25,
            difficulty: "Easy",
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
        }
    },

    3: {
        day: "Wednesday",

        activity: {
            type: "scratch",
            prompt: "Scratch the card to see what's cooking."
        },

        recipe: {
            title: "Chilli Crisp Fettuccine Alfredo",
            emoji: "🍜",
            time: 25,
            difficulty: "Easy",
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
        }
    },

    4: {
        day: "Thursday",

        activity: {
            type: "memory",
            pairs: ["🍅", "🧄", "🌿"],
            prompt: "Match the ingredients to unlock today's dish."
        },

        recipe: {
            title: "Creamy Tomato & Garlic Pasta",
            emoji: "🍅",
            time: 30,
            difficulty: "Easy",
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
        }
    },

    5: {
        day: "Friday",

        activity: {
            type: "stir",
            taps: 20,
            prompt: "Give the pot 20 good stirs to finish the week."
        },

        recipe: {
            title: "Caramelized Onion Pasta",
            emoji: "🧅",
            time: 35,
            difficulty: "Easy",
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
    }
};


const activityLabels = {
    voicenote: "VOICE NOTE",
    quote: "FINISH THE QUOTE",
    scratch: "SCRATCH CARD",
    memory: "MEMORY MATCH",
    stir: "STIR THE POT"
};


/* =========================
   TODAY
========================= */

const dayKeys =
    ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];


function getToday() {

    const override =
        new URLSearchParams(window.location.search)
            .get("day");

    if (override) {

        const index =
            dayKeys.indexOf(
                override.slice(0, 3).toLowerCase()
            );

        if (index !== -1) {
            return index;
        }
    }

    return new Date().getDay();
}


const today = getToday();

const todaysPick = weekMenu[today] || null;


/* TESTING: every day opens, and reveals aren't remembered.
   Set to false before going live. */

const unlockAllDays = false;


/* The day currently open in the reveal modal */

let activeDay = today;

let activePick = todaysPick;


/* Remember today's reveal so it stays unlocked until midnight */

function getRevealKey() {

    const now = new Date();

    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}:${today}`;
}


function isRevealedToday() {

    if (unlockAllDays) {
        return false;
    }

    try {
        return localStorage.getItem("sahanRevealed") === getRevealKey();
    } catch {
        return false;
    }
}


function rememberReveal() {

    if (unlockAllDays) {
        return;
    }

    try {
        localStorage.setItem("sahanRevealed", getRevealKey());
    } catch {
        /* Storage unavailable: the reveal just won't persist */
    }
}


/* =========================
   ELEMENTS
========================= */

const dayPickBtn =
    document.getElementById("dayPickBtn");

const weekStrip =
    document.getElementById("weekStrip");

const toast =
    document.getElementById("toast");

const revealModal =
    document.getElementById("revealModal");

const closeRevealModal =
    document.getElementById("closeRevealModal");

const revealClip =
    document.getElementById("revealClip");

const revealVideo =
    document.getElementById("revealVideo");

const revealDay =
    document.getElementById("revealDay");

const revealEyebrow =
    document.getElementById("revealEyebrow");

const revealTitle =
    document.getElementById("revealTitle");

const revealPrompt =
    document.getElementById("revealPrompt");

const activity =
    document.getElementById("activity");

const recipeReveal =
    document.getElementById("recipeReveal");

const revealTime =
    document.getElementById("revealTime");

const revealDifficulty =
    document.getElementById("revealDifficulty");

const ingredientsList =
    document.getElementById("ingredientsList");

const stepsList =
    document.getElementById("stepsList");

const revealSignoff =
    document.getElementById("revealSignoff");


/* Anything an activity needs to stop when the modal closes */

let activityCleanup = null;


/* =========================
   WEEK STRIP
========================= */

function renderWeekStrip() {

    if (!weekStrip) {
        return;
    }

    weekStrip.innerHTML =
        Object.entries(weekMenu)
            .map(([number, entry]) => {

                const isToday =
                    Number(number) === today;

                const isOpen =
                    isToday || unlockAllDays;

                return `
                    <li>
                        <button
                            class="week-day${isToday ? " today" : ""}"
                            type="button"
                            data-day="${number}"
                            aria-label="${entry.day}${isOpen ? ", open" : ", locked"}"
                        >
                            <span>${entry.day.slice(0, 3)}</span>
                            <small>${isToday ? "✦" : isOpen ? "🔓" : "🔒"}</small>
                        </button>
                    </li>
                `;
            })
            .join("");


    weekStrip
        .querySelectorAll(".week-day")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const number =
                        Number(button.dataset.day);

                    if (number === today || unlockAllDays) {
                        openReveal(number);
                        return;
                    }

                    showToast(
                        `${weekMenu[number].day}'s pick unlocks on ${weekMenu[number].day} ✦`
                    );
                }
            );
        });
}


/* =========================
   OPEN REVEAL
========================= */

function openReveal(dayNumber = today) {

    if (!revealModal) {
        return;
    }

    activeDay = dayNumber;

    activePick = weekMenu[dayNumber] || null;

    resetReveal();

    revealModal.classList.remove("hidden");

    document.body.style.overflow = "hidden";


    /* Weekend: the kitchen rests */

    if (!activePick) {

        revealClip.classList.add("hidden");

        revealEyebrow.textContent =
            "THE KITCHEN IS RESTING";

        revealTitle.textContent =
            "See you on Monday.";

        revealPrompt.textContent =
            "Hibaq's picks come out Monday to Friday, each one hidden behind a little surprise.";

        return;
    }


    const { day, activity: dayActivity, recipe } =
        activePick;

    revealDay.textContent =
        day.toUpperCase();

    setTeaser(recipe);


    if (isRevealedToday()) {
        showRecipe();
        return;
    }


    revealEyebrow.textContent =
        `${day.toUpperCase()} · ${activityLabels[dayActivity.type]}`;

    revealTitle.textContent =
        "Today's dish is a secret…";

    revealPrompt.textContent =
        dayActivity.prompt;


    /* Wait a frame so the activity can measure itself */

    requestAnimationFrame(() => {
        startActivity(dayActivity, recipe);
    });
}


function setTeaser(recipe) {

    revealClip.classList.remove("hidden", "revealed");

    if (recipe.video) {

        revealVideo.src =
            recipe.video;

        revealVideo.classList.remove("hidden");

        revealVideo
            .play()
            .catch(() => {});

    } else {

        revealVideo.classList.add("hidden");
    }
}


/* =========================
   CLOSE REVEAL
========================= */

function closeReveal() {

    if (!revealModal || revealModal.classList.contains("hidden")) {
        return;
    }

    resetReveal();

    revealModal.classList.add("hidden");

    document.body.style.overflow = "";
}


function resetReveal() {

    if (activityCleanup) {
        activityCleanup();
        activityCleanup = null;
    }

    revealVideo.pause();
    revealVideo.removeAttribute("src");
    revealVideo.load();

    activity.innerHTML = "";

    revealPrompt.classList.remove("hidden");

    recipeReveal.classList.add("hidden");
}


/* =========================
   SHOW RECIPE
========================= */

function showRecipe() {

    if (!activePick) {
        return;
    }

    const { day, recipe } =
        activePick;


    if (activityCleanup) {
        activityCleanup();
        activityCleanup = null;
    }

    activity.innerHTML = "";

    revealClip.classList.add("revealed");

    revealEyebrow.textContent =
        `${day.toUpperCase()}'S PICK`;

    revealTitle.textContent =
        recipe.title;

    revealPrompt.classList.add("hidden");


    revealTime.textContent =
        `⏱ ${recipe.time} min`;

    revealDifficulty.textContent =
        recipe.difficulty;


    ingredientsList.innerHTML = "";

    recipe.ingredients.forEach(ingredient => {

        const li =
            document.createElement("li");

        li.textContent =
            ingredient;

        ingredientsList.appendChild(li);
    });


    stepsList.innerHTML = "";

    recipe.steps.forEach(step => {

        const li =
            document.createElement("li");

        li.textContent =
            step;

        stepsList.appendChild(li);
    });


    revealSignoff.textContent =
        activeDay === 5
            ? "That's the week. A new pick is waiting on Monday ✦"
            : "Come back tomorrow for the next pick ✦";

    recipeReveal.classList.remove("hidden");
}


function winActivity() {

    rememberReveal();

    showRecipe();
}


/* =========================
   ACTIVITIES
========================= */

function startActivity(dayActivity, recipe) {

    const activities = {
        voicenote: startVoicenote,
        quote: startQuote,
        scratch: startScratch,
        memory: startMemory,
        stir: startStir
    };

    const start =
        activities[dayActivity.type];

    if (start) {
        activityCleanup =
            start(dayActivity, recipe) || null;
    }
}


/* VOICE NOTE (iMessage style) */

const playIcon =
    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z"/></svg>`;

const pauseIcon =
    `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1.2"/><rect x="14" y="5" width="4" height="14" rx="1.2"/></svg>`;


function startVoicenote(dayActivity) {

    const barCount = 34;

    /* Placeholder wave until the real one is measured */

    const bars =
        Array.from(
            { length: barCount },
            (_, index) => {

                const height =
                    25 + Math.abs(Math.sin(index * 1.7) * 75);

                return `<i style="height: ${height}%"></i>`;
            }
        ).join("");

    const sentAt =
        new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });


    activity.innerHTML = `
        <div class="imessage">

            <div class="imessage-header">
                <span class="imessage-avatar">H</span>
                <strong>Hibaq</strong>
            </div>

            <p class="imessage-timestamp">
                <b>iMessage</b><br>Today ${sentAt}
            </p>

            ${dayActivity.message
                ? `<div class="imessage-bubble imessage-text">${dayActivity.message}</div>`
                : ""}

            <div class="imessage-row">
                <div class="imessage-bubble imessage-audio">
                    <button class="imessage-play" type="button" aria-label="Play voice message">${playIcon}</button>
                    <div class="imessage-wave">${bars}</div>
                    <span class="imessage-time">0:00</span>
                </div>
                <span class="imessage-unread" aria-hidden="true"></span>
            </div>

            <p class="imessage-status">Tap ▶ to listen</p>

        </div>
    `;


    const playButton =
        activity.querySelector(".imessage-play");

    const wave =
        activity.querySelector(".imessage-wave");

    const time =
        activity.querySelector(".imessage-time");

    const unread =
        activity.querySelector(".imessage-unread");

    const status =
        activity.querySelector(".imessage-status");

    const audio =
        new Audio(dayActivity.src);

    let timer;


    function formatTime(seconds) {

        const whole =
            Math.ceil(seconds || 0);

        return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
    }


    /* One download, shared by the waveform and the playback fallback
       (needs the local server) */

    const download =
        fetch(dayActivity.src)
            .then(response => {

                if (!response.ok) {
                    throw new Error("Voice note not found");
                }

                return response.blob();
            });

    let blobUrl = null;


    /* Draw the real waveform from the recording */

    download
        .then(blob => blob.arrayBuffer())
        .then(buffer => {

            const context =
                new AudioContext();

            return context
                .decodeAudioData(buffer)
                .finally(() => context.close());
        })
        .then(decoded => {

            const samples =
                decoded.getChannelData(0);

            const size =
                Math.floor(samples.length / barCount);

            const peaks =
                Array.from({ length: barCount }, (_, bar) => {

                    let peak = 0;

                    for (let i = bar * size; i < (bar + 1) * size; i += 64) {
                        peak = Math.max(peak, Math.abs(samples[i]));
                    }

                    return peak;
                });

            const loudest =
                Math.max(...peaks) || 1;

            wave
                .querySelectorAll("i")
                .forEach((bar, index) => {
                    bar.style.height =
                        `${18 + (peaks[index] / loudest) * 82}%`;
                });
        })
        .catch(() => {
            /* Keep the placeholder wave */
        });


    playButton.addEventListener(
        "click",
        () => {

            if (audio.paused) {
                audio.play().catch(() => {});
            } else {
                audio.pause();
            }
        }
    );


    audio.addEventListener("play", () => {

        playButton.innerHTML = pauseIcon;
        playButton.setAttribute("aria-label", "Pause voice message");

        unread.classList.add("hidden");

        status.textContent = "Listening…";
    });

    audio.addEventListener("pause", () => {

        playButton.innerHTML = playIcon;
        playButton.setAttribute("aria-label", "Play voice message");

        if (!audio.ended) {
            status.textContent = "Paused";
        }
    });

    audio.addEventListener("loadedmetadata", () => {
        time.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {

        if (!audio.duration) {
            return;
        }

        wave.style.setProperty(
            "--played",
            `${(audio.currentTime / audio.duration) * 100}%`
        );

        /* Counts down like iMessage */

        time.textContent =
            formatTime(audio.duration - audio.currentTime);
    });

    audio.addEventListener("ended", () => {

        wave.style.setProperty("--played", "100%");

        status.textContent = "Played";

        timer =
            setTimeout(winActivity, 900);
    });


    /* Safari won't stream from servers without byte-range support
       (like python -m http.server), so play the downloaded copy instead.
       If that fails too, the voice note isn't there: don't leave anyone stuck. */

    audio.addEventListener("error", () => {

        if (!blobUrl) {

            download
                .then(blob => {

                    blobUrl =
                        URL.createObjectURL(
                            new Blob([blob], { type: "audio/mp4" })
                        );

                    audio.src = blobUrl;

                    audio.load();
                })
                .catch(showMissing);

            return;
        }

        showMissing();
    });


    function showMissing() {

        activity.innerHTML = `
            <div class="activity-fallback">
                <p>The voice note is still being recorded 🎙️</p>
                <button class="primary-btn" type="button">Reveal anyway</button>
            </div>
        `;

        activity
            .querySelector("button")
            .addEventListener("click", winActivity);
    }


    return () => {
        clearTimeout(timer);

        if (blobUrl) {
            URL.revokeObjectURL(blobUrl);
        }

        audio.pause();
        audio.removeAttribute("src");
    };
}


/* FINISH THE QUOTE */

function startQuote(dayActivity) {

    const [before, after] =
        dayActivity.quote.split("___");


    activity.innerHTML = `
        <blockquote class="quote-card">
            <p>“${before}<span class="quote-blank">?</span>${after || ""}”</p>
            <cite>— ${dayActivity.author}</cite>
        </blockquote>

        <div class="quote-choices">
            ${dayActivity.choices
                .map(choice => `
                    <button class="quote-choice" type="button" data-choice="${choice}">
                        ${choice}
                    </button>
                `)
                .join("")}
        </div>
    `;


    const blank =
        activity.querySelector(".quote-blank");

    let timer;


    activity
        .querySelectorAll(".quote-choice")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (button.dataset.choice === dayActivity.answer) {

                        blank.textContent =
                            dayActivity.answer;

                        blank.classList.add("filled");

                        button.classList.add("correct");

                        timer =
                            setTimeout(winActivity, 900);

                        return;
                    }

                    button.disabled = true;

                    button.classList.add("wrong");

                    showToast("Not quite, try another ✦");
                }
            );
        });


    return () => clearTimeout(timer);
}


/* SCRATCH CARD */

function startScratch(dayActivity, recipe) {

    activity.innerHTML = `
        <div class="scratch-card">
            <div class="scratch-under">
                <span>${recipe.emoji}</span>
                <strong>${recipe.title}</strong>
            </div>
            <canvas class="scratch-canvas" aria-label="Scratch card, drag to scratch"></canvas>
        </div>
    `;


    const card =
        activity.querySelector(".scratch-card");

    const canvas =
        activity.querySelector(".scratch-canvas");

    const context =
        canvas.getContext("2d");

    const { width, height } =
        card.getBoundingClientRect();

    const ratio =
        window.devicePixelRatio || 1;


    canvas.width = width * ratio;
    canvas.height = height * ratio;

    context.scale(ratio, ratio);


    /* The gold foil */

    const foil =
        context.createLinearGradient(0, 0, width, height);

    foil.addColorStop(0, "#8f7447");
    foil.addColorStop(0.5, "#ddc18b");
    foil.addColorStop(1, "#8f7447");

    context.fillStyle = foil;
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#171310";
    context.font = "600 12px 'DM Sans', sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("✦  SCRATCH HERE  ✦", width / 2, height / 2);


    context.globalCompositeOperation = "destination-out";
    context.lineWidth = 38;
    context.lineCap = "round";
    context.lineJoin = "round";


    let scratching = false;
    let lastPoint = null;
    let strokes = 0;
    let done = false;
    let timer;


    function getPoint(event) {

        const rect =
            canvas.getBoundingClientRect();

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }


    function scratch(event) {

        const point =
            getPoint(event);

        context.beginPath();

        if (lastPoint) {
            context.moveTo(lastPoint.x, lastPoint.y);
            context.lineTo(point.x, point.y);
            context.stroke();
        } else {
            context.arc(point.x, point.y, 19, 0, Math.PI * 2);
            context.fill();
        }

        lastPoint = point;

        strokes += 1;

        if (strokes % 10 === 0) {
            checkScratched();
        }
    }


    function checkScratched() {

        if (done) {
            return;
        }

        const pixels =
            context.getImageData(0, 0, canvas.width, canvas.height).data;

        let clear = 0;
        let sampled = 0;

        /* Sample every 16th pixel, it's plenty */

        for (let i = 3; i < pixels.length; i += 64) {

            sampled += 1;

            if (pixels[i] === 0) {
                clear += 1;
            }
        }

        if (clear / sampled > 0.5) {

            done = true;

            canvas.classList.add("cleared");

            timer =
                setTimeout(winActivity, 1100);
        }
    }


    canvas.addEventListener("pointerdown", event => {

        scratching = true;

        canvas.setPointerCapture(event.pointerId);

        scratch(event);
    });

    canvas.addEventListener("pointermove", event => {

        if (scratching) {
            scratch(event);
        }
    });

    ["pointerup", "pointercancel"].forEach(type => {

        canvas.addEventListener(type, () => {

            scratching = false;

            lastPoint = null;

            checkScratched();
        });
    });


    return () => clearTimeout(timer);
}


/* MEMORY MATCH */

function startMemory(dayActivity) {

    const symbols =
        [...dayActivity.pairs, ...dayActivity.pairs];

    /* Shuffle */

    for (let i = symbols.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [symbols[i], symbols[j]] = [symbols[j], symbols[i]];
    }


    activity.innerHTML = `
        <div class="memory-grid">
            ${symbols
                .map(symbol => `
                    <button class="memory-card" type="button" data-symbol="${symbol}" aria-label="Hidden card">
                        <span>${symbol}</span>
                    </button>
                `)
                .join("")}
        </div>
    `;


    let openCards = [];
    let matched = 0;
    let busy = false;
    let timer;


    activity
        .querySelectorAll(".memory-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    if (
                        busy ||
                        card.classList.contains("flipped")
                    ) {
                        return;
                    }

                    card.classList.add("flipped");

                    card.setAttribute("aria-label", card.dataset.symbol);

                    openCards.push(card);


                    if (openCards.length < 2) {
                        return;
                    }


                    const [first, second] =
                        openCards;

                    openCards = [];


                    if (first.dataset.symbol === second.dataset.symbol) {

                        first.classList.add("matched");
                        second.classList.add("matched");

                        matched += 1;

                        if (matched === dayActivity.pairs.length) {
                            timer = setTimeout(winActivity, 700);
                        }

                        return;
                    }


                    busy = true;

                    timer =
                        setTimeout(() => {

                            [first, second].forEach(openCard => {
                                openCard.classList.remove("flipped");
                                openCard.setAttribute("aria-label", "Hidden card");
                            });

                            busy = false;

                        }, 800);
                }
            );
        });


    return () => clearTimeout(timer);
}


/* STIR THE POT */

function startStir(dayActivity) {

    activity.innerHTML = `
        <div class="stir-game">
            <button class="stir-pot" type="button" aria-label="Stir the pot">
                <span>🍲</span>
            </button>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <span class="stir-count">0 / ${dayActivity.taps}</span>
        </div>
    `;


    const pot =
        activity.querySelector(".stir-pot");

    const fill =
        activity.querySelector(".progress-fill");

    const count =
        activity.querySelector(".stir-count");

    let stirs = 0;
    let timer;


    pot.addEventListener(
        "click",
        () => {

            stirs += 1;

            /* Restart the wobble on every tap */

            pot.classList.remove("stirring");
            void pot.offsetWidth;
            pot.classList.add("stirring");

            fill.style.width =
                `${Math.min(stirs / dayActivity.taps, 1) * 100}%`;

            count.textContent =
                `${Math.min(stirs, dayActivity.taps)} / ${dayActivity.taps}`;


            if (stirs === dayActivity.taps) {

                pot.disabled = true;

                count.textContent =
                    "Smells ready ✦";

                timer =
                    setTimeout(winActivity, 700);
            }
        }
    );


    return () => clearTimeout(timer);
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
   EVENTS
========================= */

if (dayPickBtn) {

    dayPickBtn.addEventListener(
        "click",
        () => openReveal()
    );
}


if (closeRevealModal) {

    closeRevealModal.addEventListener(
        "click",
        closeReveal
    );
}


if (revealModal) {

    const revealOverlay =
        revealModal.querySelector(
            ".modal-overlay"
        );

    if (revealOverlay) {

        revealOverlay.addEventListener(
            "click",
            closeReveal
        );
    }
}


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeReveal();
        }
    }
);


/* =========================
   INITIAL LOAD
========================= */

renderWeekStrip();
