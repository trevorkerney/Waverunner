import { invoke, dialog } from '@tauri-apps/api'
import { useState, useRef } from 'react'

import { ICONS } from '../../../../img'

import '../../../../css/NewLibrary.css'

const NewLibrary = (props: {isNewLibOpen: boolean, setIsNewLibOpen: (isLibOpen: boolean) => void}) => {

  const name = useRef<HTMLInputElement|null>(null);
  const path = useRef<HTMLInputElement|null>(null);
  const tags = useRef<HTMLInputElement|null>(null);

  return (
    <div
      id="newCategoryBox"
      style={props.isNewLibOpen
      ? { display: "flex" }
      : { display: "none" }
      }
    >
      <button
        id="new-lib-close"
        onClick={() => {
          name.current!.value = "";
          path.current!.value = "";
          tags.current!.value = "";
          props.setIsNewLibOpen(false);
        }}
      >
        <img src={ICONS.x} alt="close"/>
      </button>
      <label>library name</label>
      <input ref={name} placeholder="Films" type="text" className="new-lib-text" />
      <label>file path</label>
      <input ref={path} placeholder="C:\path\to\media" type="text" className="new-lib-text" readOnly />
      <button
        id="new-lib-file-browse"
        onClick={async () => {
          const selpath: string | null = (await dialog.open({directory: true}) as string | null);
          path.current!.value = (selpath) ? selpath : ""
        }}
      >
        browse...
      </button>
      <label>tags (separate with commas)</label>
      <input ref={tags} placeholder="Year, Director, etc." type="text" className="new-lib-text" />
      <button
        id="new-lib-submit"
        onClick={() => {
          let valid = true;
          if (name.current!.value === "") {
            valid = false;
            name.current!.style.backgroundColor = "#d64646";
          } else {
            name.current!.style.backgroundColor = "#f0f0f0";
          }
          if (path.current!.value === "" ) {
            valid = false;
            path.current!.style.backgroundColor = "#d64646";
          } else {
            path.current!.style.backgroundColor = "#f0f0f0";
          }
          if (valid) {
            invoke("ipc_new_lib", {
              name: name.current!.value, 
              path: path.current!.value, 
              tags: tags.current!.value
            }).then((res) => {
              console.log(res);
            }).catch((err) => {
              console.log(err);
              console.log("something went wrong");
            });
          }
          return;
        }}
      >
        Create
      </button>
    </div>
  )
}

export default NewLibrary;
