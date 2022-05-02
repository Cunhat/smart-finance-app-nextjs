import React, { useState, useRef, useEffect } from "react";
import { InputContainer, InputText, InfoText } from "./styles";

type TextInputProps = {
  text: string;
};

export function TextInput(props: TextInputProps) {
  const [editable, setEditable] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setEditable(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  function handleClick() {
    setEditable(true);
  }

  return (
    <InputContainer onClick={handleClick} ref={wrapperRef}>
      <InputText editable={editable}></InputText>
      <InfoText editable={editable}>{props.text}</InfoText>
    </InputContainer>
  );
}
