"use client";
import React, { useEffect, useState } from "react";
import emptyImage from "./images/emptyImage.jpg";
import Image from "next/image";
import {
  DynamicObject,
  Quality,
  SelectOption,
  Size,
  Style,
} from "@/constant/constant";
export default function Home() {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<DynamicObject>({});
  const [prompt, setPrompt] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };
  const handleSelectChange = (key: string, value: string) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [key]: value,
    }));
  };

  const handleGenerateImage = () => {
    try {
      setLoading(true);
      const dummyImageUrl = "https://via.placeholder.com/150";
      setImageSrc(dummyImageUrl);

      console.log(selectedOptions);
      console.log(prompt);
    } catch (error) {
      console.error("Error generating image:", error);
      setLoading(false); // 에러 발생 시에도 로딩 상태를 해제합니다.
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10">
      <div className="py-6">
        <h1 className="font-mono text-3xl antialiased font-bold">
          Create Your Art
        </h1>
      </div>
      <div className="container w-screen border-accent-content/0 items-center flex justify-center relative">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Generated Image"
            width={512}
            height={512}
          />
        ) : (
          <Image
            src={emptyImage}
            alt="Generated Image"
            width={512}
            height={512}
          />
        )}
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
      <div className="container flex flex-col justify-center items-center mb-8 ">
        <label>
          <div className="label">
            <span className="label-text">해상도</span>
          </div>
          <select
            id="select1"
            className="select select-secondary w-48 mr-4"
            value={selectedOptions[SelectOption.size] || ""}
            onChange={(e) =>
              handleSelectChange(SelectOption.size, e.target.value)
            }
          >
            <option value={Size.sm}>256x256</option>
            <option value={Size.md}>512x512</option>
            <option value={Size.lg}>1024x1024</option>
            <option value={Size.xlw}>1792x1024</option>
            <option value={Size.xlh}>1024x1792</option>
          </select>
        </label>
        <label>
          <div className="label">
            <span className="label-text">퀄리티</span>
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
            <span className="label-text">스타일</span>
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
      <input
        type="text"
        placeholder="Type in Your idea or keyword"
        className="input input-bordered input-secondary w-full max-w-xs"
        value={prompt}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-secondary mt-7"
        onClick={handleGenerateImage}
        disabled={loading}
      >
        Generate
        {loading ? (
          <span className="loading loading-spinner text-secondary"></span>
        ) : null}
      </button>
    </div>
  );
}
