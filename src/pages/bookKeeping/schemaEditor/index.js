import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Searchbox } from "src/components/searchbox";

import Editor from "@monaco-editor/react";

function SchemaEditor(props) {
  const { schema = {} } = props;

  console.log("schema", schema);
  const [search, changeSearch] = useState("");
  const dispatch = useDispatch();
  const onChangeSearch = (e) => {
    let value = e.target.value;

    changeSearch(value);
  };

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach((marker) => console.log("onValidate:", marker.message));
  }

  return (
    <>
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
      >
        <h4>Home</h4>
        <div className="w-20">
          <Searchbox
            value={search}
            onChange={onChangeSearch}
            placeholder={"Search on home"}
          />
        </div>
      </div>
      <div>
        <>
          <button onClick={showValue}>Show value</button>
          <Editor
            theme="vs-dark"
            height="80vh"
            defaultLanguage="json"
            defaultValue={JSON.stringify(schema, null, 2)}
            onMount={handleEditorDidMount}
            onValidate={handleEditorValidation}
          />
        </>
      </div>
    </>
  );
}

export default SchemaEditor;
