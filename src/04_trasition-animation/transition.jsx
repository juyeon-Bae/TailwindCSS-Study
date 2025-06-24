import React from 'react';

export default function Transition() {
  //transition 개념 : 요소가 상태를 변경할 때 그 변화를 일정 시간 동안 부드럽게 처리하는 애니메이션
  //transition-none-colors-opacity-shadow-transform
  return (
    <div className="min-h-screen flex flex-col gap-y-4 items-center justify-center">
      <button className="text-5xl bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
        Hover me
      </button>
      <button className="text-5xl bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-600 cursor-pointer">
        Hover me
      </button>
    </div>
  );
}
