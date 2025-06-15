export default function ResponsivePractice() {
  return (
    <>
      <div className="max-w-md rounded-lg mx-auto border md:max-w-2xl">
        <div className="md:flex items-center gap-10">
          <div className=" ">
            <img
              className="object-cover w-full h-48   md:h-full md:w-48"
              src="https://placehold.co/400x400.png?text=City"
              alt="Modern building"
            />
          </div>
          <div className="p-8">
            <div className=" ">Company retreats</div>
            <a href="#" className=" ">
              Incredible accommodation for your team
            </a>
            <p className=" ">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
