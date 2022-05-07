import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function useTitles() {
  const titleUpdater = useTitle("Loading..."); // componentDidmount  부분 ( 추가 )
  setTimeout(() => titleUpdater("Home"), 5000); //  componentWillUpdate 부분 ( 수정 )
  return <div>useTitle</div>;
}

export default useTitles;

/*

문서의 제목을 업데이트 시켜주는걸 담당하는 hooks 를 작성함 useTitle

보통은 helmet 를 사용하는데 
문서 제목을 업데이트하는 functional hook의 방식으로 만들어볼것임

제목을 업데이트할수있게 setTitle를 return 해줄것임

title 은 setTitle 을 주고 기본값으로 이니셜타이틀을 넣어준다
업데이트 타이틀이 실행되면 htmlTitle = 문서에서 title 이 된다
htmlTitle.innerText는 변화하는 title 이다

useEffect 가 되서 화면이 변화한다면
업데이트 타이틀이 실행되는데 보고있는쪽은 title 이 변화될때마다 이다

타이틀 업데이트라는 변수를 선언하고 useTitle 는 Loading... 이고  setTimeout 라는 함수를 실행시켜 5초뒤에 타이틀을 Home 바꿔준다
*/
