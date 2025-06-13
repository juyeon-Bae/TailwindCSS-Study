export default function FlexBox() {
  return (
    <>
      <header className="p-6 bg-gray-100 rounded-lg mb-6">
        <nav className="flex justify-between items-center">
          <div className="cursor-pointer font-bold text-2xl">Mywebsite</div>
          <ul className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-gray-500">
              <li>Home</li>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-500">
              <li>About</li>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-500">
              <li>Services</li>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-500">
              <li>Contact</li>
            </a>
          </ul>
          <button className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Login
          </button>
        </nav>
      </header>

      <header className="bg-gray-100 p-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">GYMCODING</div>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="bg-blue-500 text-white hover:bg-blue-700 rounded px-4 py-2">
            Login
          </button>
        </nav>
      </header>
    </>
  );
}
