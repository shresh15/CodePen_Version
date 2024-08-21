import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Editor(props) {
  const { language, displayName, value, onBeforeChange } = props;
  const [open, setOpen] = useState(true);

  //function handleChange() {}

  return (
    <div className="`editor-container ${open ? '' : 'colllapsed'}` p-2 grow basis-0 flex flex-col bg-blue-400">
      <div className=" flex justify-between bg-black text-white py-4 px-6 rounded-l">
        {displayName}
        <button
          className="bg-white text-black px-3 py-1 rounded-lg"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          o/c
        </button>
      </div>
      <ControlledEditor
        //onBeforeChange={onChange}
        onBeforeChange={(_editor, _data, value) => {
          onBeforeChange(value);
          console.log(value);
        }}
        value={value}
        //className="code-mirror-wrapper grow rounded-br-md rounded-bl-md flex-1"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}
