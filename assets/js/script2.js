function getScores () {
    const highScoreListStorage = JSON.parse(localStorage.getItem("highscore"));
    for (let i = 0; i < JSON.parse(localStorage.getItem("highscore")).length; i++) {
        const highScoreList = document.querySelector(".content-list");
        const highScoreEachEl = document.createElement("li");
        highScoreEachEl.innerText = " " + highScoreListStorage[i].initials + " - " + highScoreListStorage[i].highScore
        highScoreList.appendChild(highScoreEachEl);
    }
  }

  getScores();