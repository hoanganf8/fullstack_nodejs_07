import { useRef } from "react";

export default function Checkbox() {
  const data = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4"];
  const checkAllRef = useRef();
  const checkItemsRef = useRef([]);
  const checkCountRef = useRef(0);
  const getElementCheckbox = (el) => {
    if (data.length > checkItemsRef.current.length) {
      checkItemsRef.current.push(el);
    }
  };
  const handleCheckAll = (e) => {
    checkItemsRef.current.forEach((el) => {
      el.checked = e.target.checked;
    });

    checkCountRef.current = e.target.checked ? data.length : 0;
  };
  const handleCheckItem = (e) => {
    if (!e.target.checked) {
      checkAllRef.current.checked = false;
      checkCountRef.current--;
      return;
    } else {
      checkCountRef.current++;
    }
    if (checkCountRef.current === data.length) {
      checkAllRef.current.checked = true;
    }
  };
  return (
    <div>
      <label style={{ display: "block" }}>
        <input type="checkbox" ref={checkAllRef} onChange={handleCheckAll} />
        Check All
      </label>
      <hr />
      {data.map((item, index) => (
        <label style={{ display: "block" }} key={index}>
          <input
            type="checkbox"
            ref={getElementCheckbox}
            onChange={handleCheckItem}
          />
          {item}
        </label>
      ))}
    </div>
  );
}
