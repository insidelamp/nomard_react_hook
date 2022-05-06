import React, { useState } from "react";
import ReactDOM from "react-dom";
function useInput() {
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  // const maxLen = (value) => value.length <= 10;
  const maxLen = (value) => value.include("@");

  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default useInput;

/*

<input placeholder="Name" value={name.value} onChange={name.onChange} />
<input placeholder="Name" {...name} />

위 2개는 같은의미를 줌

input의 value 의 값은 {name.value} onChange 값은 {name.onChange} 도 가능하지만 {...name} 스프레드문법으로 name안의 모든것을 풀어줄수있다

validator = 검증하다
willuUpdate는 true니까 항상 업데이트가 됨

 if (typeof validator === "function") 
 만약 validator (검증)의 타입을 검사해서 함수라면 willUpdate 값이 검증한 입력값이다
 만약 willUpdate 가 있다면 setVlaue 는 입력된 value다

 value 는 const maxLen = (value) => value.length <= 10; 이 함수덕분에 10글자 안으로만 작성이 가능해 검증한다
 즉 validator 가 true 라면 willUpdate가 true가되서 실행되고 value를 셋팅할수있다

const maxLen = (value) => value.length <= 10;

위 조건은 value가 성립될시 10글자와 같거나 적게 만들수있음

const maxLen = (value) => value.include("@");

위 조건은 value가 성립될시 글자안에 @ 가 포함되어있어야 업데이트가 가능함

const maxLen = (value) => !value.include("@");

위 조건은 value가 성립될시 글자안에 @ 가 포함하고있으면 업데이트를 하지않음


*/

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

/*

밑의 조건을 사용시 input Hook 으로 사용가능

*/
