export default function Sticky() {
  const data = [{ price: 'W 10,000' }, { price: 'W 20,000' }];
  return (
    <>
      <header class="fixed left-0 right-0 bg-gray-800 text-white p-4 z-50">
        <nav class="container mx-auto flex justify-between items-center">
          <div class="text-2xl font-bold">MyShop</div>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="container max-w-5xl mx-auto px-4 pb-8 pt-24 flex gap-x-4 mb-[74px]">
        <div className="w-full sm:w-3/5">
          <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <img
                src="https://placehold.co/400x400.png?text=City"
                alt="City Image"
                className="w-full h-full rounded-lg shadow-md "
              />
            ))}
          </section>
        </div>

        {/* sticky : 화면 내 지정된 위치에 고정 시킴, 스크롤 내려도 원하는 위치에 고정됨*/}
        <aside class="w-2/6 hidden sm:block">
          <div class="sticky top-16 p-6 border-2 border-gray-800 rounded-lg">
            <h2 class="text-xl font-bold mb-4">장바구니</h2>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span>상품 1</span>
                <span>₩ 10,000</span>
              </div>
              <div class="flex justify-between">
                <span>상품 2</span>
                <span>₩ 20,000</span>
              </div>
              <div class="flex justify-between font-bold border-t pt-2">
                <span>총합계</span>
                <span>₩ 30,000</span>
              </div>
              <button class="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                결제하기
              </button>
            </div>
          </div>
        </aside>
      </main>

      <div className="sm:hidden bg-white  border-t-2 border-gray-800 p-4">
        <button class="fixed bottom-0 left-0 right-0 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          결제하기
        </button>
      </div>
    </>
  );
}
