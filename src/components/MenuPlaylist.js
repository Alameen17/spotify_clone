import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import { PlayList } from "./PlayList";

function MenuPlaylist() {
  return (
    <div className="playlistContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playListScroll">
        {PlayList &&
          PlayList.map((List) => (
            <div className="playList" key={List.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{ List.name }</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlaylist };
