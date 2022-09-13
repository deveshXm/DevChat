import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextArea = (props) => {

  const handleEditorChange = event => {
    props.setMsg(event.target.getContent());
  };

  return (
      <Editor
        apiKey="mvnjejyo0f4mok2hqs0t45umtke09bezd1fcnxpqobwm7pl0"
        onChange ={handleEditorChange}
        init={{
          height: 200,
          menubar: false,
          statusbar: false,
          plugins: "autoresize link lists emoticons image code codesample",
          toolbar:
            "bold italic strikethrough link | numlist bullist | blockquote | code codesample | emoticons | image",
          placeholder: "chat comes here...",
        }}
        class ="overflow-y-auto"
      />
  );
};

export default TextArea;
