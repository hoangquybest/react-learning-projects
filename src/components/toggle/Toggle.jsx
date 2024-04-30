import React, { useState } from "react";
import "./ToggleStyles.css";
// stateless functional component: component không sử dụng state

// stateful functional component: có sử dụng state

// Các step
// 1. enabling state: useState(...)
// 2. initialize state
// 3. reading state
// 4. update state: khi handling event, nếu update bên ngoài thì nó sẽ chạy vô tận.
// 5. Khi state thay đổi thì component sẽ rerender lại
// Cần tối ưu để hạn chế số lần re-render

function Toggle() {
  // const [on, setOn] = useState(false);
  // on: là initialize state và được khởi tạo với giá trị là false
  // setOn: là f callback để update state để set lại giá trị, có thể console.log để thấy được
  // Chỗ này đang sử dụng destructuring
  // Initialize value: boolean(true, false), number(1,2,3,4,...), string("quy", "happy"), undefined, null, [1,2,3,4,..], {name: "quy"}
  // best practice đặt tên: [title, setTitle], [isActive, setIsActive]
  // Khi state thay đổi thì component sẽ rerender lại
  const [on, setOn] = useState(false); // setOn la callback

  const handleToggle = () => {
    // setOn(callback) -> setOn(prevState => !prevState)
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
