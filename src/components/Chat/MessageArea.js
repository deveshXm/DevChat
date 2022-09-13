import React, { useRef} from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextArea = (props) => {
//   const editorRef = useRef(null); 

//   if(editorRef.current){
//     editorRef.current.setContent(props.msg.text);
//   }
  return (
      <Editor
        apiKey="mvnjejyo0f4mok2hqs0t45umtke09bezd1fcnxpqobwm7pl0"
        initialValue={props.msg.text}
        init={{
          height: 200,
          readonly: 1,
          statusbar:false,
          toolbar:false,
          menubar:false,
          width:400,
          
        }}
      />
  );
};

export default TextArea;
