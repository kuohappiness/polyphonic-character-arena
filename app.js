const LESSONS = [
  {
    char: "好",
    readings: ["ㄏㄠˇ", "ㄏㄠˋ"],
    words: [
      { text: "好人", reading: "ㄏㄠˇ" },
      { text: "花好月圓", reading: "ㄏㄠˇ" },
      { text: "友好", reading: "ㄏㄠˇ" },
      { text: "好同學", reading: "ㄏㄠˇ" },
      { text: "好辦", reading: "ㄏㄠˇ" },
      { text: "好去找你", reading: "ㄏㄠˇ" },
      { text: "好久", reading: "ㄏㄠˇ" },
      { text: "好厲害", reading: "ㄏㄠˇ" },
      { text: "好客", reading: "ㄏㄠˋ" },
      { text: "好大喜功", reading: "ㄏㄠˋ" },
      { text: "各有所好", reading: "ㄏㄠˋ" }
    ]
  },
  {
    char: "吐",
    readings: ["ㄊㄨˇ", "ㄊㄨˋ"],
    words: [
      { text: "吐痰", reading: "ㄊㄨˇ" },
      { text: "吐露", reading: "ㄊㄨˇ" },
      { text: "一吐為快", reading: "ㄊㄨˇ" },
      { text: "談吐優雅", reading: "ㄊㄨˇ" },
      { text: "吐血", reading: "ㄊㄨˋ" },
      { text: "吐出公款", reading: "ㄊㄨˋ" }
    ]
  },
  {
    char: "與",
    readings: ["ㄩˇ", "ㄩˋ"],
    words: [
      { text: "男與女", reading: "ㄩˇ" },
      { text: "與民同樂", reading: "ㄩˇ" },
      { text: "與生俱來", reading: "ㄩˇ" },
      { text: "贈與", reading: "ㄩˇ" },
      { text: "授與", reading: "ㄩˇ" },
      { text: "與人方便", reading: "ㄩˇ" },
      { text: "與人為善", reading: "ㄩˇ" },
      { text: "選賢與能", reading: "ㄩˇ" },
      { text: "時不我與", reading: "ㄩˇ" },
      { text: "民胞物與", reading: "ㄩˇ" },
      { text: "參與", reading: "ㄩˋ" },
      { text: "與會", reading: "ㄩˋ" },
      { text: "與賽", reading: "ㄩˋ" }
    ]
  },
  {
    char: "行",
    readings: ["ㄏㄤˊ", "ㄒㄧㄥˊ", "ㄒㄧㄥˋ"],
    words: [
      { text: "排行", reading: "ㄏㄤˊ" },
      { text: "銀行", reading: "ㄏㄤˊ" },
      { text: "商行", reading: "ㄏㄤˊ" },
      { text: "行列", reading: "ㄏㄤˊ" },
      { text: "字裡行間", reading: "ㄏㄤˊ" },
      { text: "各行各業", reading: "ㄏㄤˊ" },
      { text: "內行", reading: "ㄏㄤˊ" },
      { text: "品行", reading: "ㄒㄧㄥˋ" },
      { text: "德行", reading: "ㄒㄧㄥˋ" },
      { text: "行草", reading: "ㄒㄧㄥˊ" },
      { text: "行楷", reading: "ㄒㄧㄥˊ" },
      { text: "行將就木", reading: "ㄒㄧㄥˊ" },
      { text: "行李", reading: "ㄒㄧㄥˊ" },
      { text: "行為", reading: "ㄒㄧㄥˊ" },
      { text: "行動", reading: "ㄒㄧㄥˊ" },
      { text: "你真行", reading: "ㄒㄧㄥˊ" },
      { text: "通行", reading: "ㄒㄧㄥˊ" },
      { text: "流行", reading: "ㄒㄧㄥˊ" },
      { text: "風行一時", reading: "ㄒㄧㄥˊ" },
      { text: "行不行", reading: "ㄒㄧㄥˊ" },
      { text: "舉行", reading: "ㄒㄧㄥˊ" },
      { text: "行醫", reading: "ㄒㄧㄥˊ" },
      { text: "行善", reading: "ㄒㄧㄥˊ" }
    ]
  },
  {
    char: "和",
    readings: ["ㄏㄜˊ", "ㄏㄢˋ", "ㄏㄨㄛˋ", "ㄏㄜˋ"],
    words: [
      { text: "和諧", reading: "ㄏㄜˊ" },
      { text: "和好如初", reading: "ㄏㄜˊ" },
      { text: "和平", reading: "ㄏㄜˊ" },
      { text: "和藹可親", reading: "ㄏㄜˊ" },
      { text: "和風日麗", reading: "ㄏㄜˊ" },
      { text: "我和你", reading: "ㄏㄢˋ" },
      { text: "和麵", reading: "ㄏㄨㄛˋ" },
      { text: "攪和", reading: "ㄏㄨㄛˋ" },
      { text: "唱和", reading: "ㄏㄜˋ" },
      { text: "附和", reading: "ㄏㄜˋ" }
    ]
  },
  {
    char: "空",
    readings: ["ㄎㄨㄥ", "ㄎㄨㄥˋ"],
    words: [
      { text: "空屋", reading: "ㄎㄨㄥ" },
      { text: "空虛", reading: "ㄎㄨㄥ" },
      { text: "空中", reading: "ㄎㄨㄥ" },
      { text: "高空", reading: "ㄎㄨㄥ" },
      { text: "晴空", reading: "ㄎㄨㄥ" },
      { text: "星空", reading: "ㄎㄨㄥ" },
      { text: "空言", reading: "ㄎㄨㄥ" },
      { text: "空談", reading: "ㄎㄨㄥ" },
      { text: "空闊", reading: "ㄎㄨㄥ" },
      { text: "空曠", reading: "ㄎㄨㄥ" },
      { text: "海闊天空", reading: "ㄎㄨㄥ" },
      { text: "空出來", reading: "ㄎㄨㄥˋ" },
      { text: "空下來", reading: "ㄎㄨㄥˋ" },
      { text: "虧空", reading: "ㄎㄨㄥˋ" },
      { text: "空白", reading: "ㄎㄨㄥˋ" },
      { text: "空地", reading: "ㄎㄨㄥˋ" },
      { text: "空閒", reading: "ㄎㄨㄥˋ" },
      { text: "有空來玩", reading: "ㄎㄨㄥˋ" },
      { text: "空歡喜一場", reading: "ㄎㄨㄥ" }
    ]
  },
  {
    char: "量",
    readings: ["ㄌㄧㄤˊ", "ㄌㄧㄤˋ"],
    words: [
      { text: "考量", reading: "ㄌㄧㄤˊ" },
      { text: "測量", reading: "ㄌㄧㄤˊ" },
      { text: "容量", reading: "ㄌㄧㄤˋ" },
      { text: "酒量", reading: "ㄌㄧㄤˋ" },
      { text: "重量", reading: "ㄌㄧㄤˋ" }
    ]
  },
  {
    char: "倒",
    readings: ["ㄉㄠˋ", "ㄉㄠˇ"],
    words: [
      { text: "喝倒彩", reading: "ㄉㄠˋ" },
      { text: "海水倒灌", reading: "ㄉㄠˋ" },
      { text: "倒車", reading: "ㄉㄠˋ" },
      { text: "倒退", reading: "ㄉㄠˋ" },
      { text: "倒垃圾", reading: "ㄉㄠˋ" },
      { text: "倒茶水", reading: "ㄉㄠˋ" },
      { text: "倒嗓", reading: "ㄉㄠˇ" },
      { text: "倒店", reading: "ㄉㄠˇ" },
      { text: "倒閉", reading: "ㄉㄠˇ" },
      { text: "沖倒", reading: "ㄉㄠˇ" },
      { text: "摔倒", reading: "ㄉㄠˇ" }
    ]
  },
  {
    char: "觀",
    readings: ["ㄍㄨㄢ", "ㄍㄨㄢˋ"],
    words: [
      { text: "觀賞", reading: "ㄍㄨㄢ" },
      { text: "觀光", reading: "ㄍㄨㄢ" },
      { text: "參觀", reading: "ㄍㄨㄢ" },
      { text: "奇觀", reading: "ㄍㄨㄢ" },
      { text: "景觀", reading: "ㄍㄨㄢ" },
      { text: "觀念", reading: "ㄍㄨㄢ" },
      { text: "人生觀", reading: "ㄍㄨㄢ" },
      { text: "道觀", reading: "ㄍㄨㄢˋ" },
      { text: "樓觀", reading: "ㄍㄨㄢˋ" }
    ]
  },
  {
    char: "扁",
    readings: ["ㄆㄧㄢ", "ㄅㄧㄢˇ"],
    words: [
      { text: "一葉扁舟", reading: "ㄆㄧㄢ" },
      { text: "扁平", reading: "ㄅㄧㄢˇ" },
      { text: "扁圓", reading: "ㄅㄧㄢˇ" },
      { text: "扁食", reading: "ㄅㄧㄢˇ" },
      { text: "扁人", reading: "ㄅㄧㄢˇ" },
      { text: "看扁", reading: "ㄅㄧㄢˇ" }
    ]
  },
  {
    char: "覺",
    readings: ["ㄐㄧㄠˋ", "ㄐㄩㄝˊ"],
    words: [
      { text: "睡覺", reading: "ㄐㄧㄠˋ" },
      { text: "睡午覺", reading: "ㄐㄧㄠˋ" },
      { text: "大夢初覺", reading: "ㄐㄩㄝˊ" },
      { text: "知覺", reading: "ㄐㄩㄝˊ" },
      { text: "發覺", reading: "ㄐㄩㄝˊ" },
      { text: "察覺", reading: "ㄐㄩㄝˊ" },
      { text: "驚覺", reading: "ㄐㄩㄝˊ" },
      { text: "覺悟", reading: "ㄐㄩㄝˊ" },
      { text: "先知先覺", reading: "ㄐㄩㄝˊ" }
    ]
  },
  {
    char: "假",
    readings: ["ㄐㄧㄚˋ", "ㄐㄧㄚˇ"],
    words: [
      { text: "假期", reading: "ㄐㄧㄚˋ" },
      { text: "年假", reading: "ㄐㄧㄚˋ" },
      { text: "放假", reading: "ㄐㄧㄚˋ" },
      { text: "假牙", reading: "ㄐㄧㄚˇ" },
      { text: "假面具", reading: "ㄐㄧㄚˇ" },
      { text: "狐假虎威", reading: "ㄐㄧㄚˇ" },
      { text: "假公濟私", reading: "ㄐㄧㄚˇ" },
      { text: "假若", reading: "ㄐㄧㄚˇ" },
      { text: "假如", reading: "ㄐㄧㄚˇ" },
      { text: "假使", reading: "ㄐㄧㄚˇ" }
    ]
  },
  {
    char: "奇",
    readings: ["ㄐㄧ", "ㄑㄧˊ"],
    words: [
      { text: "奇數", reading: "ㄐㄧ" },
      { text: "奇怪", reading: "ㄑㄧˊ" },
      { text: "奇計", reading: "ㄑㄧˊ" },
      { text: "驚奇", reading: "ㄑㄧˊ" },
      { text: "不足為奇", reading: "ㄑㄧˊ" },
      { text: "槍法奇準", reading: "ㄑㄧˊ" }
    ]
  },
  {
    char: "間",
    readings: ["ㄐㄧㄢ", "ㄐㄧㄢˋ"],
    words: [
      { text: "時間", reading: "ㄐㄧㄢ" },
      { text: "中間", reading: "ㄐㄧㄢ" },
      { text: "天地之間", reading: "ㄐㄧㄢ" },
      { text: "田間", reading: "ㄐㄧㄢ" },
      { text: "房間", reading: "ㄐㄧㄢ" },
      { text: "兩間套房", reading: "ㄐㄧㄢ" },
      { text: "間隙", reading: "ㄐㄧㄢˋ" },
      { text: "間不容髮", reading: "ㄐㄧㄢˋ" },
      { text: "間隔", reading: "ㄐㄧㄢˋ" },
      { text: "間斷", reading: "ㄐㄧㄢˋ" },
      { text: "挑撥離間", reading: "ㄐㄧㄢˋ" },
      { text: "間雜", reading: "ㄐㄧㄢˋ" },
      { text: "黑白相間", reading: "ㄐㄧㄢˋ" }
    ]
  },
  {
    char: "喝",
    readings: ["ㄏㄜ", "ㄏㄜˋ"],
    words: [
      { text: "喝酒", reading: "ㄏㄜ" },
      { text: "喝茶", reading: "ㄏㄜ" },
      { text: "喝水", reading: "ㄏㄜ" },
      { text: "喝采", reading: "ㄏㄜˋ" },
      { text: "呼喝", reading: "ㄏㄜˋ" }
    ]
  }
];

const els = {
  homeScreen: document.getElementById("homeScreen"),
  gameShell: document.getElementById("gameShell"),
  searchForm: document.getElementById("searchForm"),
  searchInput: document.getElementById("searchInput"),
  lessonGrid: document.getElementById("lessonGrid"),
  emptyResult: document.getElementById("emptyResult"),
  targetChar: document.getElementById("targetChar"),
  roundNow: document.getElementById("roundNow"),
  roundTotal: document.getElementById("roundTotal"),
  scoreNow: document.getElementById("scoreNow"),
  missNow: document.getElementById("missNow"),
  fallZone: document.getElementById("fallZone"),
  wordText: document.getElementById("wordText"),
  message: document.getElementById("message"),
  explosion: document.getElementById("explosion"),
  homeButton: document.getElementById("homeButton"),
  startButton: document.getElementById("startButton"),
  pauseButton: document.getElementById("pauseButton"),
  restartButton: document.getElementById("restartButton"),
  printButton: document.getElementById("printButton"),
  finishOverlay: document.getElementById("finishOverlay"),
  finishChar: document.getElementById("finishChar"),
  finishText: document.getElementById("finishText"),
  finishRestart: document.getElementById("finishRestart"),
  finishPrint: document.getElementById("finishPrint"),
  finishHome: document.getElementById("finishHome"),
  printReport: document.getElementById("printReport")
};

const state = {
  lessonIndex: 0,
  pending: [],
  missed: [],
  current: null,
  running: false,
  paused: false,
  locked: false,
  score: 0,
  shown: 0,
  mistakes: [],
  timer: null
};

function init() {
  bindEvents();
  renderHome(LESSONS);

  const params = new URLSearchParams(window.location.search);
  const requestedChar = params.get("char");
  if (requestedChar) {
    const found = LESSONS.findIndex((lesson) => lesson.char === requestedChar);
    if (found >= 0) startLesson(found, params.has("autostart"));
  }
}

function bindEvents() {
  els.searchForm.addEventListener("submit", onSearch);
  els.homeButton.addEventListener("click", showHome);
  els.startButton.addEventListener("click", startGame);
  els.pauseButton.addEventListener("click", pauseGame);
  els.restartButton.addEventListener("click", resetGame);
  els.printButton.addEventListener("click", printMistakes);
  els.finishRestart.addEventListener("click", resetGame);
  els.finishPrint.addEventListener("click", printMistakes);
  els.finishHome.addEventListener("click", showHome);
}

function renderHome(items) {
  els.lessonGrid.innerHTML = items
    .map((lesson) => {
      return `
        <button class="lesson-button" type="button" data-char="${escapeHtml(lesson.char)}">
          <strong>${escapeHtml(lesson.char)}</strong>
        </button>
      `;
    })
    .join("");

  els.lessonGrid.querySelectorAll(".lesson-button").forEach((button) => {
    button.addEventListener("click", () => {
      const index = LESSONS.findIndex((lesson) => lesson.char === button.dataset.char);
      if (index >= 0) startLesson(index);
    });
  });

  els.emptyResult.classList.toggle("hidden", items.length > 0);
}

function onSearch(event) {
  event.preventDefault();
  const keyword = els.searchInput.value.trim();
  if (!keyword) {
    renderHome(LESSONS);
    return;
  }
  renderHome(LESSONS.filter((lesson) => lesson.char.includes(keyword)));
}

function startLesson(index, autoStart = false) {
  state.lessonIndex = index;
  els.homeScreen.classList.add("hidden");
  els.gameShell.classList.remove("hidden");
  resetGame();
  history.replaceState(null, "", `${location.pathname}?char=${encodeURIComponent(currentLesson().char)}`);
  if (autoStart) startGame();
}

function showHome() {
  clearTimeout(state.timer);
  state.running = false;
  state.paused = false;
  state.locked = false;
  els.finishOverlay.classList.add("hidden");
  els.gameShell.classList.add("hidden");
  els.homeScreen.classList.remove("hidden");
  clearBombs();
  hideExplosion();
  history.replaceState(null, "", location.pathname);
}

function currentLesson() {
  return LESSONS[state.lessonIndex];
}

function resetGame() {
  clearTimeout(state.timer);
  state.pending = shuffle(currentLesson().words);
  state.missed = [];
  state.current = null;
  state.running = false;
  state.paused = false;
  state.locked = false;
  state.score = 0;
  state.shown = 0;
  state.mistakes = [];
  els.targetChar.textContent = currentLesson().char;
  els.finishChar.textContent = currentLesson().char;
  els.finishText.textContent = `${currentLesson().char} 的讀音都配對完成`;
  els.wordText.textContent = "準備";
  els.pauseButton.textContent = "暫停";
  els.finishOverlay.classList.add("hidden");
  els.printReport.innerHTML = "";
  hideExplosion();
  clearBombs();
  updateStats();
  setMessage("準備");
}

function startGame() {
  if (state.running && state.paused) {
    state.paused = false;
    els.pauseButton.textContent = "暫停";
    resumeBombs();
    clearMessage();
    return;
  }

  if (!state.running) {
    state.running = true;
    state.paused = false;
    clearMessage();
    nextQuestion();
  }
}

function pauseGame() {
  if (!state.running || state.locked) return;
  state.paused = !state.paused;
  els.pauseButton.textContent = state.paused ? "繼續" : "暫停";
  document.querySelectorAll(".bomb").forEach((bomb) => {
    bomb.style.animationPlayState = state.paused ? "paused" : "running";
  });
  if (state.paused) setMessage("暫停");
  else clearMessage();
}

function nextQuestion() {
  if (!state.running || state.paused || state.locked) return;
  clearTimeout(state.timer);
  clearBombs();
  hideExplosion();

  if (state.pending.length === 0) {
    if (state.missed.length > 0) {
      state.pending = shuffle(state.missed);
      state.missed = [];
      setMessage("再複習剛才沒有配對好的詞");
      updateStats();
      state.timer = setTimeout(() => {
        clearMessage();
        nextQuestion();
      }, 2200);
      return;
    }
    finishGame();
    return;
  }

  state.current = state.pending.shift();
  state.shown += 1;
  renderWord(state.current.text);
  updateStats();
  spawnBombs(state.current);
}

function spawnBombs(question) {
  const readings = shuffle(currentLesson().readings);
  const duration = Math.max(3.9, 7.2 - state.score * 0.08 - state.shown * 0.035);
  const gap = 100 / (readings.length + 1);

  readings.forEach((reading, index) => {
    const bomb = document.createElement("button");
    bomb.type = "button";
    bomb.className = "bomb";
    bomb.innerHTML = renderReading(reading);
    bomb.setAttribute("aria-label", reading);
    bomb.dataset.reading = reading;
    bomb.style.left = `calc(${gap * (index + 1)}% - 48px)`;
    bomb.style.animationDuration = `${duration + Math.random() * 0.55}s`;
    bomb.style.animationDelay = `${Math.random() * 0.25}s`;
    bomb.addEventListener("click", () => chooseReading(reading, bomb));
    bomb.addEventListener("animationend", () => {
      if (!state.locked && state.current === question) showWrong(bomb, true);
    });
    els.fallZone.appendChild(bomb);
  });
}

function chooseReading(reading, bomb) {
  if (state.locked || state.paused || !state.current) return;
  if (reading === state.current.reading) {
    state.locked = true;
    state.score += 1;
    bomb.classList.add("correct");
    setMessage("答對了！", "correct");
    updateStats();
    state.timer = setTimeout(() => {
      state.locked = false;
      clearMessage();
      nextQuestion();
    }, 1000);
  } else {
    showWrong(bomb, false);
  }
}

function showWrong(selectedBomb, timedOut) {
  if (state.locked || !state.current) return;
  state.locked = true;
  state.missed.push(state.current);
  recordMistake(timedOut ? "落地" : "選錯", selectedBomb?.dataset.reading || "");
  triggerExplosion();

  document.querySelectorAll(".bomb").forEach((bomb) => {
    bomb.style.animationPlayState = "paused";
    if (bomb.dataset.reading === state.current.reading) {
      bomb.classList.add("answer-reveal");
    } else {
      bomb.classList.add("fade-away");
    }
  });

  if (selectedBomb) selectedBomb.classList.add("wrong");
  const prefix = timedOut ? "落地了" : "再看一次";
  setMessage(prefix, "danger", `${state.current.text} 讀作 ${state.current.reading}`);
  updateStats();

  state.timer = setTimeout(() => {
    state.locked = false;
    clearMessage();
    nextQuestion();
  }, 5000);
}

function finishGame() {
  state.running = false;
  state.locked = false;
  clearBombs();
  els.wordText.textContent = "完成";
  els.finishOverlay.classList.remove("hidden");
  updateStats();
}

function updateStats() {
  const total = currentLesson().words.length;
  els.roundNow.textContent = String(Math.min(state.score, total));
  els.roundTotal.textContent = String(total);
  els.scoreNow.textContent = String(state.score);
  els.missNow.textContent = String(state.missed.length);
}

function clearBombs() {
  els.fallZone.replaceChildren();
}

function triggerExplosion() {
  els.explosion.style.left = "50%";
  els.explosion.classList.remove("hidden", "boom");
  void els.explosion.offsetWidth;
  els.explosion.classList.add("boom");
}

function hideExplosion() {
  els.explosion.classList.add("hidden");
  els.explosion.classList.remove("boom");
}

function recordMistake(reason, chosen) {
  const current = state.current;
  if (!current) return;
  const key = `${current.text}-${current.reading}`;
  if (state.mistakes.some((mistake) => mistake.key === key)) return;
  state.mistakes.push({
    key,
    word: current.text,
    correct: current.reading,
    chosen,
    reason
  });
}

function printMistakes() {
  if (state.mistakes.length === 0) {
    setMessage("目前沒有錯題可以輸出。");
    return;
  }

  const rows = state.mistakes
    .map((mistake, index) => {
      const chosen = mistake.reason === "落地" ? "未作答" : mistake.chosen || "未作答";
      return `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(mistake.word)}</td>
          <td>${escapeHtml(mistake.correct)}</td>
          <td>${escapeHtml(chosen)}</td>
          <td>${escapeHtml(mistake.reason)}</td>
        </tr>
      `;
    })
    .join("");

  els.printReport.innerHTML = `
    <h1>多音字擂台錯題</h1>
    <p>目標字：${escapeHtml(currentLesson().char)}</p>
    <table>
      <thead>
        <tr>
          <th>題號</th>
          <th>詞語</th>
          <th>正確讀音</th>
          <th>作答</th>
          <th>狀況</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
  window.print();
}

function renderWord(word) {
  const char = currentLesson().char;
  els.wordText.innerHTML = escapeHtml(word).replaceAll(
    escapeHtml(char),
    `<span class="focus-char">${escapeHtml(char)}</span>`
  );
}

function renderReading(reading) {
  const toneMarks = new Set(["ˊ", "ˇ", "ˋ", "˙"]);
  const symbols = [];
  let tone = "";

  for (const char of reading) {
    if (toneMarks.has(char)) tone = char;
    else symbols.push(char);
  }

  const body = symbols.map((symbol) => `<span>${escapeHtml(symbol)}</span>`).join("");
  const toneHtml = tone ? `<span class="tone-mark">${escapeHtml(tone)}</span>` : "";
  return `
    <svg class="missile-art" viewBox="0 0 100 180" aria-hidden="true">
      <path class="missile-left-fin" d="M23 92C9 105 4 127 9 151c16-4 28-16 35-34Z" />
      <path class="missile-right-fin" d="M77 92c14 13 19 35 14 59-16-4-28-16-35-34Z" />
      <path class="missile-tail" d="M32 10h36v24H32Z" />
      <path class="missile-body" d="M50 20c28 0 40 28 40 67 0 28-9 50-22 61H32C19 137 10 115 10 87c0-39 12-67 40-67Z" />
      <path class="missile-shine" d="M29 33c-8 17-11 47-7 75 5 0 10-1 15-2-4-30-2-55 6-72-5-1-9-1-14-1Z" />
      <path class="missile-head" d="M14 126h72c-4 19-16 35-36 50-20-15-32-31-36-50Z" />
    </svg>
    <span class="reading-stack">${body}${toneHtml}</span>
  `;
}

function resumeBombs() {
  document.querySelectorAll(".bomb").forEach((bomb) => {
    bomb.style.animationPlayState = "running";
  });
}

function setMessage(text, tone = "", detail = "") {
  els.message.innerHTML =
    `<strong class="message-title">${escapeHtml(text)}</strong>` +
    (detail ? `<span class="message-detail">${escapeHtml(detail)}</span>` : "");
  els.message.classList.toggle("danger", tone === "danger");
  els.message.classList.toggle("correct", tone === "correct");
  els.message.classList.remove("hidden");
}

function clearMessage() {
  els.message.classList.add("hidden");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
