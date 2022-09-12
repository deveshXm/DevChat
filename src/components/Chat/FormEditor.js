import React from "react";
import { useEffect } from "react";
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; 

const FormEditor = (props) => {
  const theme = "snow";

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["blockquote"]
    ],
  };
  const placeholder = "Chat comes here...";
  const formats = ["bold", "italic", "underline", "strike", "list", "link" , "blockquote"];
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        props.setMsg(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
      <div class ="h-[23vh] max-w-[67vw] w-11/12 ">
        <div ref={quillRef} class =" overflow-y-auto bg-gray-600 text-white"  />
      </div>
  );
};

export default FormEditor;
