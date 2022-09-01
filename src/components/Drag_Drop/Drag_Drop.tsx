import React , {useState, useRef, DragEvent, ChangeEvent }from 'react';
//import { DropEvent } from 'react-dropzone';


type file = {
    name: string;
    //type: string;
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

    // interface DragEvent extends MouseEvent {
    //     dataTransfer: DataTransfer;
    // }


export function DragDropFile()  {
    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef<HTMLInputElement>(null);
    
    // handle drag events
    const handleDrag = function(e: DragEvent) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    // triggers when file is dropped
    const handleDrop = function(e: DragEvent) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        let file = e.dataTransfer.files[0];
        console.log (file);

         //handleFiles(file);
      }
    };
    
    // triggers when file is selected with click
    const handleChange = function(e: ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
         handleFiles(e.target.files);
      }
    };

    // handle files

    const handleFiles = function(FileList: FileList) {
        for (let i = 0; i < FileList.length; i++) {
            const file = FileList[i];
            const reader = new FileReader();
            reader.onload = function(e: ProgressEvent<FileReader>) {
                const data = e.target?.result;
                console.log(data);
            }
            reader.readAsDataURL(file);
        }
    }
  // triggers the input when the button is clicked
    const onButtonClick = () => {
        if (null !== inputRef.current) {
      inputRef.current.click();
    };
};
    return (
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
          </div> 
        </label>
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      </form>
    );
 
}
