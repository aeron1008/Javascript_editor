(() => {
  // app/javascript/timer.js
  function updateCountdown() {
    const countdownElements = document.querySelectorAll(".realcountdown");
    countdownElements.forEach(function(countdownElement) {
      const targetDateStr = countdownElement.getAttribute("data-date");
      const targetTimestamp = parseInt(countdownElement.getAttribute("data-time"));
      const targetTimeZone = countdownElement.getAttribute("data-tz");
      const targetDateTime = new Date(targetTimestamp);
      targetDateTime.toLocaleString("en-US", {
        timeZone: targetTimeZone
      });
      if (isNaN(targetDateTime)) {
        countdownElement.innerHTML = "Invalid date and time";
        return;
      }
      const targetHour = targetDateTime.getHours();
      const targetMinute = targetDateTime.getMinutes();
      const targetSecond = targetDateTime.getSeconds();
      targetDateTime.setHours(targetHour, targetMinute, targetSecond);
      const interval = setInterval(function() {
        const currentTime = /* @__PURE__ */ new Date();
        const options = {
          timeZone: targetTimeZone,
          hour12: false
        };
        const targetTimeInTimeZone = currentTime.toLocaleString("en-US", options);
        const currentDate = new Date(targetTimeInTimeZone);
        const timeLeft = targetDateTime - currentDate;
        if (timeLeft <= 0) {
          clearInterval(interval);
          const textContainer = document.createElement("div");
          textContainer.textContent = "Countdown expired!";
          textContainer.style.display = "flex";
          textContainer.style.justifyContent = "center";
          textContainer.style.alignItems = "center";
          textContainer.style.height = "100%";
          textContainer.style.marginTop = "-13px";
          textContainer.style.paddingTop = "20px";
          textContainer.style.paddingBottom = "20px";
          countdownElement.innerHTML = textContainer.outerHTML;
        } else {
          const days = addLeadingZero(Math.floor(timeLeft / (1e3 * 60 * 60 * 24)));
          const hours = addLeadingZero(Math.floor(timeLeft % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)));
          const minutes = addLeadingZero(Math.floor(timeLeft % (1e3 * 60 * 60) / (1e3 * 60)));
          const seconds = addLeadingZero(Math.floor(timeLeft % (1e3 * 60) / 1e3));
          const timerDiv = document.createElement("div");
          timerDiv.classList.add("timer");
          const timerItems = [
            {
              number: days,
              word: "days"
            },
            {
              number: hours,
              word: "hrs"
            },
            {
              number: minutes,
              word: "min"
            },
            {
              number: seconds,
              word: "sec"
            }
          ];
          timerItems.forEach((item) => {
            const timerItem = document.createElement("div");
            timerItem.style.display = "inline-block";
            timerItem.style.marginRight = "20px";
            const timerNumber = document.createElement("div");
            timerNumber.classList.add("timer-number");
            timerNumber.textContent = item.number;
            timerNumber.style.fontSize = "42px";
            timerNumber.style.lineHeight = "34px";
            timerNumber.style.fontWeight = "1000";
            timerNumber.style.letterSpacing = "1.66px";
            timerNumber.style.fontFamily = "'Nunito Sans', sans-serif";
            const timerWord = document.createElement("div");
            timerWord.classList.add("timer-word");
            timerWord.textContent = item.word;
            timerWord.style.paddingLeft = "3px";
            timerWord.style.fontSize = "9px";
            timerWord.style.fontWeight = "600";
            timerWord.style.letterSpacing = "1.26px";
            timerWord.style.textTransform = "uppercase";
            timerWord.style.fontFamily = "'Nunito Sans', sans-serif";
            timerItem.appendChild(timerNumber);
            timerItem.appendChild(timerWord);
            timerDiv.appendChild(timerItem);
          });
          countdownElement.innerHTML = "";
          countdownElement.appendChild(timerDiv);
        }
      }, 1e3);
    });
  }
  function addLeadingZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  updateCountdown();
})();

