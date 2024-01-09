"use client";
import React, { ChangeEvent, useState } from "react";
import emptyImage from "../../images/emptyImage.jpg";
import {
  DynamicObject,
  Quality,
  SelectOption,
  Size,
  Style,
} from "@/constant/constant";
import { generateArtwork } from "@/api/post";
import DownloadButton from "@/components/button/downloadButton";

export default function Home() {
  const [invalidCode, setInvalidCode] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<DynamicObject>({
    size: "1024x1024",
    quality: "standard",
    style: "natural",
  });
  const [prompt, setPrompt] = useState<string>("");

  const handleErrorToast = () => {
    setInvalidCode(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  const handleSelectChange = (key: string, value: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [key]: value,
    }));
  };

  const handleGenerateImage = async () => {
    try {
      setLoading(true);

      const request = {
        size: selectedOptions["size"],
        quality: selectedOptions["quality"],
        style: selectedOptions["style"],
        prompt: prompt,
      };

      const response = await generateArtwork(request);
      const base64Data = response.data;
      const decodedData = Buffer.from(base64Data, "base64");

      const blob = new Blob([decodedData]);
      const img = URL.createObjectURL(blob);

      setImageSrc(img);
      setLoading(false);
    } catch (error: any) {
      if (error.response.status === 403) {
        setInvalidCode(true);
      }
      console.error("Error generating image:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="py-6">
          <h1 className="font-mono text-3xl antialiased font-bold">
            Create Your Art
          </h1>
        </div>
        <div className="container w-screen border-accent-content/0 items-center flex justify-center relative">
          {imageSrc && !loading && (
            <img
              src={imageSrc}
              alt={"Generated Image"}
              className="w-[1024px] h-[512px] object-contain"
            />
          )}
          {!imageSrc && (
            <img
              src={emptyImage.src}
              alt={"Generated Image"}
              className="w-[1024px] h-[512px] object-contain"
              style={{
                display: loading ? "none" : "block",
              }}
            />
          )}
          {loading && <div className="skeleton w-[512px] h-[512px]"></div>}
        </div>
        <div className="mockup-code my-10">
          <pre data-prefix="$">
            <code>Input Your Prompt Keyword</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>Generate...🎨</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done! ⬆️</code>
          </pre>
        </div>
        <div className="w-full flex">
          <textarea
            className="textarea textarea-secondary w-full h-[150px] rounded-none"
            placeholder="Type in Your idea or keyword"
            value={prompt}
            onChange={handleInputChange}
          ></textarea>
          <button
            className="btn btn-secondary w-[150px] h-full rounded-none"
            onClick={handleGenerateImage}
            disabled={loading}
          >
            Generate
            {loading ? (
              <span className="loading loading-spinner text-secondary"></span>
            ) : null}
          </button>
        </div>
        {imageSrc ? (
          <DownloadButton
            imageUrl={imageSrc}
            fileName={"download_image_dalle.png"}
          />
        ) : null}

        <div
          role="alert"
          className="alert alert-error fixed top-0 right-0 w-full z-20"
          style={{
            display: invalidCode ? "block" : "none",
          }}
          onClick={handleErrorToast}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>올바르지 않은 초대코드입니다.</span>
        </div>
      </div>
      <div className="bg-base-300 w-[20%] h-screen z-10 py-6">
        <div className="container flex flex-col justify-center items-center mb-8 ">
          <label>
            <div className="label">
              <span className="label-text text-lg font-bold">해상도</span>
            </div>
            <select
              id="select1"
              className="select select-secondary w-48 mr-4"
              value={selectedOptions[SelectOption.size] || ""}
              onChange={(e) =>
                handleSelectChange(SelectOption.size, e.target.value)
              }
            >
              <option value={Size.lg}>1024x1024</option>
              <option value={Size.xlw}>1792x1024</option>
              <option value={Size.xlh}>1024x1792</option>
            </select>
          </label>
          <label>
            <div className="label">
              <span className="label-text text-lg font-bold">퀄리티</span>
            </div>
            <select
              id="select2"
              className="select select-secondary w-48 mr-4"
              value={selectedOptions[SelectOption.quality] || ""}
              onChange={(e) =>
                handleSelectChange(SelectOption.quality, e.target.value)
              }
            >
              <option value={Quality.standard}>standard</option>
              <option value={Quality.hd}>hd</option>
            </select>
          </label>
          <label>
            <div className="label">
              <span className="label-text text-lg font-bold">스타일</span>
            </div>
            <select
              id="select3"
              className="select select-secondary w-48 mr-4"
              value={selectedOptions[SelectOption.style] || ""}
              onChange={(e) =>
                handleSelectChange(SelectOption.style, e.target.value)
              }
            >
              <option value={Style.natural}>natural</option>
              <option value={Style.vivid}>vivid</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
