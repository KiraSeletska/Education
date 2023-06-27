import styled from "@emotion/styled";
import { Canvas } from "./components/Canvas";
import { LeftBar } from "./components/LeftBar";
import { Note } from "./components/Note";
import { useDrag } from "./hooks/useDrag";
import { useContext } from "react";
import { AppContext } from "./store/context";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function App() {
  const { addNote, notes } = useContext(AppContext);
  const { onMouseDown, noteRef, noteState } = useDrag({
    onMouseUpCallback: ({ pageX, pageY }) => {
      addNote({
        top: pageY - 20,
        left: pageX - 20,
      });
    }
  });

  return (
    <Wrapper>
      <Canvas>
        <LeftBar onButtonMouseDown={onMouseDown} />
        {notes.map(note => <Note key={note.id} top={note.top} left={note.left} />)}
        {noteState.isVisible && (
          <Note top={noteState.top} left={noteState.left} ref={noteRef} />
        )}
      </Canvas>
    </Wrapper>
  );
}
