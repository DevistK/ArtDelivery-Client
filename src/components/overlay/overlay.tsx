import React from "react";

interface OverlayProps {
  onClick: () => void;
  onCodeInputChange: (code: string) => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick, onCodeInputChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onCodeInputChange(newValue);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="text-white text-center flex flex-col justify-center items-center">
        <strong>초대 코드를 입력하세요</strong>
        <input
          type="text"
          placeholder="초대코드를 여기에 입력하세요"
          className="input input-bordered input-secondary w-full max-w-xs mt-2"
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline btn-secondary btn-block mt-4 w-[100px]"
          onClick={onClick}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Overlay;
