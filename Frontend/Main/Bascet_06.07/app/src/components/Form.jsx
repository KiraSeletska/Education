import { forwardRef, useRef, useState } from "react";

//оборачиваем в форвард для передачи в другой компонент
const Input = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});


export const Form = () => {
  const [value, setValue] = useState(0);

  const valueRef = useRef(0);
  //мы создаем обращение
  const inputRef = useRef();

  const clickH = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Input ref={inputRef} />
      <input type="text" ref={valueRef} />
      <p>{value}</p>
      <button onClick={clickH}>Click</button>
    </div>
  );
};
