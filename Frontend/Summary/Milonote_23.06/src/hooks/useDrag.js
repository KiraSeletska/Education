import { useEffect, useRef, useState } from "react";

export const useDrag = ({ onMouseUpCallback }) => {
  const [noteState, setNoteState] = useState({
    isVisible: false,
    top: 0,
    left: 0,
  });
  const noteRef = useRef(null);

  const onMouseDown = (evt) => {
    const { pageX, pageY } = evt;
    console.log("mouse down: ", pageX, pageY);
    setNoteState({
      isVisible: true,
      top: pageY - 20,
      left: pageX - 20,
    });
  };
  const onMouseUp = (evt) => {
    if (!noteState.isVisible) {
      return;
    }

    console.log("mouse up");
    setNoteState({
      isVisible: false,
      top: 0,
      left: 0,
    });

    onMouseUpCallback?.(evt);
  };
  const onMouseMove = (evt) => {
    if (!noteState.isVisible) {
      return;
    }

    const { pageX, pageY } = evt;
    noteRef.current.style.top = `${pageY - 20}px`;
    noteRef.current.style.left = `${pageX - 20}px`;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseUp, onMouseMove]);

  return { onMouseDown, noteRef, noteState };
};
