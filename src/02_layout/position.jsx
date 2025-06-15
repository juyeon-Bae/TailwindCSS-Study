export default function Position() {
  return (
    <>
      {/* w-full : width 100% */}
      {/* fixed의 기본위치가 top:auto임 -> top-0붙여야 됨, 
      left-0 right-0 : 좌우 꽉 채움 */}
      <header class="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
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

      <main className="container max-w-2xl mx-auto px-4 pb-8 pt-24">
        <div className="grid grid-cols-2  gap-4">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <img
              src="https://placehold.co/400x400.png?text=City"
              alt="City Image"
              className="rounded-2xl shadow-md cursor-pointer"
            />
          ))}
        </div>
      </main>
    </>
  );
}
