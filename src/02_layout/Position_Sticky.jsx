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
      <main class="container max-w-5xl mx-auto px-4 pb-8 pt-24 flex gap-x-4">
        <section class="w-3/5">
          <div class="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <img
                src="https://placehold.co/400x400.png?text=City"
                alt="City Image"
                className="w-full h-full rounded-lg shadow-md"
              />
            ))}
          </div>
        </section>

        <aside class="w-2/5">
          <div className="rounded border-2 px-6 py-4">
            <h2 className="text-2xl font-bold">장바구니</h2>
            <div className="my-2">
              {data.map((item, index) => (
                <div className="flex justify-between">
                  <div>상품 {index + 1}</div>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-500 h-[1px] my-2"></div>
            <div className="flex justify-between font-bold mb-3">
              <p>총합계</p>
              <p>w 30,000</p>
            </div>
            <button
              className="py-2 rounded w-full text-center
             bg-green-600 text-white
             cursor-pointer
             "
            >
              결제하기
            </button>
          </div>
        </aside>
      </main>
    </>
  );
}
