//정보 셋팅 [DB대신 json파일 임시 생성]
let arryPoster = [
  { name: "김민지", item: "001" },
  { name: "이명진", item: "001" },
  { name: "박서현", item: "002" },
  { name: "정은빈", item: "002" },
  { name: "박수현", item: "002" },
  { name: "임유빈", item: "003" },
  { name: "임예빈", item: "003" },
  { name: "서윤지", item: "003" },
  { name: "황혜진", item: "004" },
  { name: "옥지원", item: "004" },
  { name: "전희주", item: "004" },
  { name: "오지현", item: "004" },
  { name: "박다현", item: "005" },
  { name: "최인영", item: "005" },
  { name: "홍효정", item: "005" },
  { name: "김다예", item: "006" },
  { name: "박세은", item: "006" },
  { name: "이혜영", item: "006" },
  { name: "안서희", item: "007" },
  { name: "이선미", item: "007" },
  { name: "김시현", item: "008" },
  { name: "박하은", item: "008" },
  { name: "이유나", item: "008" },
  { name: "이다은", item: "008" },
  { name: "김소윤", item: "009" },
  { name: "김현영", item: "009" },
  { name: "송예림", item: "009" },
  { name: "안채원", item: "009" },
  { name: "김소연", item: "010" },
  { name: "김윤아", item: "010" },
  { name: "정서윤1", item: "010" },
  { name: "조혜은", item: "010" },
  { name: "최윤서", item: "010" },
  { name: "오채연", item: "011" },
  { name: "이윤영", item: "011" },
  { name: "임시원", item: "011" },
  { name: "김채연", item: "011" },
  { name: "이한나", item: "011" },
  { name: "심지원", item: "012" },
  { name: "정서윤2", item: "012" },
  { name: "조희수", item: "012" },
  { name: "김선아", item: "013" },
  { name: "김성희", item: "013" },
  { name: "정채윤", item: "013" },
  { name: "안연화", item: "014" },
  { name: "이예림", item: "014" },
  { name: "최다현", item: "014" },
  { name: "김경미", item: "015" },
  { name: "김은진", item: "015" },
  { name: "이은경", item: "015" },
  { name: "김선영", item: "016" },
  { name: "박유진", item: "016" },
  { name: "이서진", item: "016" },
  { name: "이채린", item: "016" },
  { name: "김나윤", item: "017" },
  { name: "박채연", item: "017" },
  { name: "안서연", item: "017" },
  { name: "심지은", item: "018" },
  { name: "이윤빈", item: "018" },
  { name: "전예진", item: "018" },
  { name: "김세연", item: "019" },
  { name: "양유리", item: "019" },
  { name: "조혜린", item: "019" },
  { name: "함소희", item: "019" },
];

//배열 담을 배열
let showingArry = [];

// 배열 섞기 함수
const shuffleArray = (array) => {
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]; //빈 곳에  배열i를 저장
    array[i] = array[j]; //배열 j를 배열 i에 저장
    array[j] = temp; //상수 x를 배열 j에 저장
  }
  return array;
};

for (let i = 0; i < arryPoster.length; i++) {
  let posters = `<div class="itemBox" data-item="${arryPoster[i].item}">
    // <img src="./img/${arryPoster[i].name}.jpg" alt="${arryPoster[i].name}" id="${arryPoster[i].item}">
    <img src="./img/${arryPoster[i].name}.jpg" alt="${arryPoster[i].name}" id="${arryPoster[i].item}">
      <div class="overlay">
          <div class="text">${arryPoster[i].name}</div>
      </div>
  </div>`;
  showingArry.push(posters);
  //console.log("ap-" + arryPoster);
}

shuffleArray(showingArry);

$(document).ready(function () {
  //섞은 배열을 출력하기
  $(".poster").append(showingArry);

  let list = $(".list");
  let itemBox = $(".itemBox");

  itemBox.on("click", function (e) {
    const nodes = [...e.target.parentElement.children];
    //const index = nodes.indexOf(e.target);
    let a = nodes[0].id.slice(1);
    console.log(a);
    //console.log(nodes[0].id);
    $("#" + String(a)).show();
    //$("#001").show();
  });

  list.on("click", function () {
    list.removeClass("active");
    $(this).addClass("active");
    let dataFilter = $(this).attr("data-filter");
    //console.log(showingArry);

    itemBox.each(function () {
      $(this).addClass("hide");
      $(this).removeClass("active");
      if ($(this).attr("data-item") == dataFilter || dataFilter == "all") {
        $(this).addClass("active");
        $(this).removeClass("hide");
      }
    });
  });
});

const modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //console.log('onclick');
  }
};
