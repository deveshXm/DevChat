import React from "react";
import { useEffect , useState } from "react";
import { useQuill } from "react-quilljs"
import parse from 'html-react-parser'


import "quill/dist/quill.snow.css";
const FormEditorBubble = (props) => {
  const theme = "snow";
  const readOnly = true;
  const modules = {
    toolbar: false
  };
  const formats = ["bold", "italic", "underline", "strike", "list", "link" , "blockquote"];
  const { quill, quillRef } = useQuill({
    readOnly,
    theme,
    modules,
    formats,
  });

  useEffect(() => {
    if (quill) {
      quill.root.innerHTML = props.msg.text;
    }
  }, [quill]);

  return (
      <div ref={quillRef} class="overflow-hidden bg-green-500 text-black max-w-[50vw]" />
  );
};

export default FormEditorBubble;
