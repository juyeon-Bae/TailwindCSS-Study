export default function Typography() {
  return (
    <>
      <h2 className="text-2xl">폰트 크기 조절</h2>
      <p className="text-xs">Lorem ipsum dolor sit amet.</p>
      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      <p className="text-[100px]">Lorem ipsum dolor sit amet.</p>

      <h2 className="text-2xl">폰트 두께 조절</h2>
      <p className="font-light">Lorem ipsum dolor sit amet.</p>
      <p className="font-bold">Lorem ipsum dolor sit amet.</p>
      <p className="font-black">Lorem ipsum dolor sit amet.</p>

      <div className="text-2xl">줄간격</div>
      <p className="leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
        eveniet magnam sit! Nesciunt dolore doloribus deserunt dolores dolorem
        optio ad reiciendis laudantium libero sunt voluptas magnam minima,
        pariatur corrupti fugiat.
      </p>
      <p className="leading-loose">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
        eveniet magnam sit! Nesciunt dolore doloribus deserunt dolores dolorem
        optio ad reiciendis laudantium libero sunt voluptas magnam minima,
        pariatur corrupti fugiat.
      </p>
      <p className="leading-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
        eveniet magnam sit! Nesciunt dolore doloribus deserunt dolores dolorem
        optio ad reiciendis laudantium libero sunt voluptas magnam minima,
        pariatur corrupti fugiat.
      </p>

      <h2 className="text-2xl">폰트 컬러 조절</h2>
      <p className="text-indigo-800 hover:text-indigo-50">
        Lorem ipsum dolor sit amet.
      </p>
      <p className="text-sky-900">Lorem ipsum dolor sit amet.</p>
      <p className="text-red-900">Lorem ipsum dolor sit amet.</p>
    </>
  );
}
