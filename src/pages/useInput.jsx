import React, { useState } from "react";
import ReactDOM from "react-dom";
function useInput() {
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setValue(value);
    };
    return { value, onChange };
  };

  const name = useInput("Mr.");
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


    
*/
