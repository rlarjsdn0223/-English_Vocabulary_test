    let E_voca = ['aboard', 'abroad', 'adventure', 'aisle', 'ancient'];
    let K_voca = ['타고', '외국에', '모험', '통로', '고대의'];
    let currentIndex = 0;

    // 현재 인덱스에 해당하는 단어를 설정
    function setWord(index) {
      document.getElementById("E_voca").value = E_voca[index];
      document.getElementById("E_voca").dataset.index = index; // 선택된 단어의 인덱스를 저장
      document.getElementById("K_voca").value = ""; // 입력 필드 초기화
      document.getElementById("hintButton").style.display = "none"; // 힌트 버튼 숨기기
    }

    // 데이터 제출시 나오는 값
    function getFormData() {
      let randomIndex = document.getElementById("E_voca").dataset.index;
      let inputK_voca = document.getElementById("K_voca").value;

      if (inputK_voca === K_voca[randomIndex]) {
        alert("정답입니다.");
        currentIndex = (currentIndex + 1) % E_voca.length; // 다음 단어로 인덱스 이동
        setWord(currentIndex); // 다음 단어 설정
      } else {
        alert("틀렸습니다.");
        document.getElementById("hintButton").style.display = "inline"; // 틀린 경우 힌트 버튼 보이기
      }
    }

    // 초성을 추출하는 함수
    function getInitialConsonant(koreanChar) {
      const initialConsonants = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
      const unicodeOffset = 44032; // '가'의 유니코드 값
      const charCode = koreanChar.charCodeAt(0) - unicodeOffset;
      const initialIndex = Math.floor(charCode / 588);
      return initialConsonants[initialIndex];
    }

    // 힌트 버튼 클릭 시 호출되는 함수
    function showHint() {
      let randomIndex = document.getElementById("E_voca").dataset.index;
      let word = K_voca[randomIndex];
      let hint = "힌트: ";
      for (let char of word) {
        hint += getInitialConsonant(char);
      }
      alert(hint);
    }

    // 페이지 로드 시 첫 번째 단어 설정
    window.onload = function() {
      setWord(currentIndex);
    };