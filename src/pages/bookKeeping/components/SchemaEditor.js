import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@mui/material";

function SchemaEditor({ schema, updateSchema = () => {} }) {
  const editorRef = useRef(null);

  function handleEditorValidation(markers) {
    // model markers
    markers.forEach((marker) => console.log("onValidate:", marker.message));
  }

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    const value = editorRef.current.getValue();
    const parsedValue = JSON.parse(value);

    updateSchema(parsedValue);
  }
  return (
    <div>
      <div className="d-flex justify-content-start">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            showValue();
          }}
          sx={{
            background: "blue",
            color: "white",
            height: "40px",
            marginRight: "10px",
          }}
        >
          Confirm
        </Button>
      </div>
      <Editor
        theme="vs-dark"
        height="80vh"
        defaultLanguage="json"
        defaultValue={JSON.stringify(schema, null, 2)}
        onMount={handleEditorDidMount}
        onValidate={handleEditorValidation}
      />
    </div>
  );
}

export default SchemaEditor;
