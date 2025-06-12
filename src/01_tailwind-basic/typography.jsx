export default function Typography() {
  return (
    <>
      <main className="container mx-auto max-w-3xl p-4 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">폰트 크기 조절</h2>
          <p className="text-xs">Lorem ipsum dolor sit amet.</p>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
          <p className="text-[100px]">Lorem ipsum dolor sit amet.</p>
        </div>

        <div>
          <h2 className="text-2xl font-[600] mb-2">폰트 두께 조절</h2>
          <div className="max-w-md my-10 bg-white border border-gray shadow-md rounded-lg p-4">
            <p className="font-light">Lorem ipsum dolor sit amet.</p>
            <p className="font-bold">Lorem ipsum dolor sit amet.</p>
            <p className="font-black">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div>
          <div className="text-2xl mb-2">줄간격</div>
          <div className="container space-y-5">
            <p className="leading-relaxed border">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              eveniet magnam sit! Nesciunt dolore doloribus deserunt dolores
              dolorem optio ad reiciendis laudantium libero sunt voluptas magnam
              minima, pariatur corrupti fugiat.
            </p>
            <p className="leading-loose border">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              eveniet magnam sit! Nesciunt dolore doloribus deserunt dolores
              dolorem optio ad reiciendis laudantium libero sunt voluptas magnam
              minima, pariatur corrupti fugiat.
            </p>
            <p className="leading-3 border">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              eveniet magnam sit! Nesciunt dolore doloribus deserunt dolores
              dolorem optio ad reiciendis laudantium libero sunt voluptas magnam
              minima, pariatur corrupti fugiat.
            </p>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl">폰트 컬러 조절</h2>
          <p className="text-indigo-800 hover:text-indigo-50">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-sky-900">Lorem ipsum dolor sit amet.</p>
          <p className="text-red-900">Lorem ipsum dolor sit amet.</p>
        </div>
      </main>
    </>
  );
}
