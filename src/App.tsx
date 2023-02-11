import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AlignDropdown,
  BoldButton,
  CodeFormatButton,
  Divider,
  Editor,
  EditorComposer,
  InsertLinkButton,
  ItalicButton,
  ToolbarPlugin,
  UnderlineButton,
} from "verbum";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Verbum locale test</h1>
      <div>
        <EditorComposer>
          <Editor hashtagsEnabled={true} locale="en">
            <ToolbarPlugin defaultFontSize="20px">
              <BoldButton />
              <ItalicButton />
              <UnderlineButton />
              <CodeFormatButton />
              <InsertLinkButton />
              <Divider />
              <AlignDropdown />
            </ToolbarPlugin>
          </Editor>
        </EditorComposer>
      </div>
    </div>
  );
}

export default App;
