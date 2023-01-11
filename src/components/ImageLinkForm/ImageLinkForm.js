import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, input }) => {
  return (
    <div>
      <p className="f3">
        {"Upload an image or put an image url-address to detect faces."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <label className="item f3">Choose a file</label>
          <input
            className="item"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={onInputChange}
          />
          <input
            className="item f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-purple"
            disabled={!input}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
