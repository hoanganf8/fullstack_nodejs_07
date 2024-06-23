var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Bấm chuột xuống tại progress-bar ==> Chấm màu tím sẽ di chuyển tới vị trí vừa bấm

//Tính chiều rộng của progess-bar
var progressBarWidth = progressBar.clientWidth;
var offsetX = 0;
var initialClientX = 0;
var lastOffsetProgressBar = 0;
var offsetProgressBar = 0;
progressBar.addEventListener("mousedown", function (e) {
  //Lấy được tọa độ tại vị trí bấm (offsetX)
  offsetX = e.offsetX;

  //Tính tỷ lệ phần trăm giữa tọa độ bấm xuống và chiều rộng
  var rate = (offsetX / progressBarWidth) * 100;
  //Cập nhật CSS vào progress
  progress.style.width = rate + "%";
  lastOffsetProgressBar = offsetX;
  offsetProgressBar = offsetX;
  initialClientX = e.clientX;
  document.addEventListener("mousemove", handleDrag);
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX; //Gán ví trí của button màu tím so với body
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  lastOffsetProgressBar = offsetProgressBar;
});
var handleDrag = function (e) {
  var clientX = e.clientX;
  offsetProgressBar = clientX - initialClientX + lastOffsetProgressBar;
  var rate = (offsetProgressBar / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = rate + "%";
};

var audio = document.querySelector("audio");
var player = document.querySelector(".player");
var playeBtn = player.querySelector(".play-btn i");
var playTimer = player.querySelector(".play-timer");
var currentTimeEl = playTimer.firstElementChild;
var durationEl = playTimer.lastElementChild;
var duration = 0;
var setDuration = function () {
  duration = audio.duration;
};
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
window.addEventListener("load", function () {
  setDuration();
  durationEl.innerText = getTimeFormat(duration);
  playeBtn.addEventListener("click", function () {
    if (audio.paused) {
      //Nhạc đang dừng
      audio.play(); //Phát nhạc
    } else {
      //Nhạc đang phát
      audio.pause(); //Dừng nhạc
    }
  });
  audio.addEventListener("play", function () {
    playeBtn.classList.replace("fa-play", "fa-pause");
  });
  audio.addEventListener("pause", function () {
    playeBtn.classList.replace("fa-pause", "fa-play");
  });
  audio.addEventListener("timeupdate", function () {
    var currentTime = audio.currentTime;
    currentTimeEl.innerText = getTimeFormat(currentTime);
    var rate = (currentTime / duration) * 100;
    progress.style.width = `${rate}%`;
  });
});

console.log(lyric);
//requestAnimationFrame
//cancelAnimationFrame

var requestId;
audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});
audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
var currentIndex;
var karaokeInner = document.querySelector(".karaoke-inner");
function handleKaraoke() {
  var currentTime = audio.currentTime * 1000;
  handleFillColor(currentTime);
  var index = lyric.findIndex(function (item) {
    var words = item.words;
    var firstWord = words[0];
    var lastWord = words[words.length - 1];
    return (
      currentTime >= firstWord.startTime && currentTime <= lastWord.endTime
    );
  });
  if (index !== -1 && index !== currentIndex) {
    if (index === 0) {
      var output = `
        <p>${getSentence(index)}</p>
        <p>${getSentence(index + 1)}</p>
        `;
      karaokeInner.innerHTML = output;
    } else {
      //Khi index >= 1
      /*
      index = 1 ==> Ẩn dòng 1 ==> Hiển thị câu tiếp theo
      index = 2 ==> Ẩn dòng 2 ==> Hiển thị câu tiếp theo
      index = 3 ==> Ẩn dòng 1 ==> Hiển thị câu tiếp theo
      index = 4 ==> Ẩn dòng 2 ==> Hiển thị câu tiếp theo
      */
      var nextSentenceStr = getSentence(index + 1);
      setTimeout(function () {
        if (index % 2 !== 0) {
          nextSentence(karaokeInner.children[0], nextSentenceStr);
        } else {
          nextSentence(karaokeInner.children[1], nextSentenceStr);
        }
      }, 500);
    }
    currentIndex = index;
  }
  requestId = requestAnimationFrame(handleKaraoke);
}
function handleFillColor(currentTime) {
  var wordList = karaokeInner.querySelectorAll(".word");
  wordList.forEach(function (wordEl) {
    var startTime = wordEl.dataset.startTime;
    var endTime = wordEl.dataset.endTime;
    if (currentTime >= startTime && currentTime <= endTime) {
      var percent = ((currentTime - startTime) / (endTime - startTime)) * 100;
      wordEl.children[0].style.width = `${percent}%`;
    }
    if (currentTime > endTime) {
      wordEl.children[0].style.width = `100%`;
    }
  });
}
function getSentence(index) {
  return lyric[index].words
    .map(function (item) {
      return `<span class="word" data-start-time="${item.startTime}" data-end-time="${item.endTime}">${item.data}<span>${item.data}</span></span>`;
    })
    .join(" ");
}
function nextSentence(element, sentence) {
  //element: Dòng muốn ẩn để hiển thị câu tiếp theo
  //sentence: Câu tiếp theo muốn hiển thị
  element.style.transition = "opacity 0.6s linear";
  element.style.opacity = 0;
  setTimeout(function () {
    element.innerHTML = sentence;
    element.style.opacity = 1;
  }, 600);
}
