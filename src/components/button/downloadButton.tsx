// components/DownloadButton.js
import React from "react";
import { saveAs } from "file-saver";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;

interface props {
  imageUrl: string;
  fileName: string;
}

const DownloadButton = ({ imageUrl, fileName }: props) => {
  const handleDownload = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    saveAs(blob, fileName);
  };
  return (
    <>
      <button
        onClick={handleDownload}
        className="btn btn-outline btn-secondary mt-5"
      >
        <FontAwesomeIcon icon={faDownload} />
        Download Image
      </button>
    </>
  );
};

export default DownloadButton;
