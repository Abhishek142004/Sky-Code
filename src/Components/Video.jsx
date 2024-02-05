import React from "react";

const Video = ({ title, des, url }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{des}</p>
      </div>
      <div>
        <img src={{ url }} alt="reload" />
      </div>
    </div>
  );
};

export default Video;
