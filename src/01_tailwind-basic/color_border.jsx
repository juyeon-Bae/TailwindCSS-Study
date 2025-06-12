export default function ColorBorder() {
  return (
    <div>
      <p className="p-4 bg-blue-500 text-lg text-white mb-6">
        배경이 파란색, 글자색 흰색, 폰트 사이즈 크게
      </p>
      <p className="border-2 border-blue-500 rounded-full p-4">
        파란색 보더와 둥근 모서리를 가진 보더를 적용!
      </p>
    </div>
  );
}
