import React from 'react';


import './App.css';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { DragDropFile } from './components/Drag_Drop/Drag_Drop';

const fileTypes = ["JPEG", "PNG", "GIF"];

type file = {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
  data: string;
};

interface files {
  [key: string]: file;

}
let Files = {} as files;
export default function App() {
  const [file, setFile] = useState(null) as unknown as [file, React.Dispatch<React.SetStateAction<file>>];
  const handleChange = (file: file) => {
    setFile(file);
  };
  return (
    <div className="App">
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${Files[0].name}` : "no files uploaded yet"}</p>
      <DragDropFile/>
    </div>
  );
}
