export default function Response01() {
  return (
    <>
      {/* 768px이상이면 red, 그 이하면 blue , 2xl이상이면 초록*/}
      <div
        className="min-h-screen bg-blue-500
      md:max-2xl:bg-red-600 2xl:bg-green-600
      "
      >
        <p>hi</p>
      </div>
    </>
  );
}
