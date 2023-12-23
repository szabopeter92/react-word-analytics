import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({text, setText}) {

  const [message, setMessage] = useState("");
  

  const handleChange = (e) => { 
      let newText = e.target.value;

      if(newText.includes("<script>")){
          setMessage("No script tag allowed!");
          newText = newText.replace("<script>", "");
      }
      else if(newText.includes("@")){
          setMessage("No @ symbol allowed!"); 
          newText = newText.replace("@", "");
      }
      else{
          setMessage("");
      }

      setText(newText);
  }

  return (
    <div className="textarea" >
      <textarea 
        value={text}
        onChange={handleChange} 
        placeholder="Enter your text" 
        spellCheck="false" 
      />
      { message ? <Warning message={message} /> : null }
    </div>
  )
}
