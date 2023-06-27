import { forwardRef, useRef, useState } from "react";
import { Wrapper } from "./Styled/Wrapper";

export const Note = forwardRef(({ top, left }, ref) => {
  const noteRef = useRef();
  const [ isEdiable, setIsEditable ] = useState(false);

  const onDblClick = () => {
    setIsEditable(true);
    const cancel = (evt) => {
      let target = evt.target;
      while (target) {
        if (target === noteRef.current) {
          return;
        }
        target = target.parentNode;
      }
      setIsEditable(false);
      document.removeEventListener("click", cancel);
    }
    document.addEventListener("click", cancel);
  }
  
  return (
    <Wrapper 
      ref={ref ?? noteRef} 
      top={top} 
      left={left}
      contentEditable={isEdiable}
      onDoubleClick={onDblClick}
    >
      Insert text here!
    </Wrapper>
  );
});
