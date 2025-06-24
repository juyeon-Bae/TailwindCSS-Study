import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Animation() {
  return (
    <div>
      <button className="flex gap-4 bg-purple-500 py-5 px-10 mx-auto rounded-2xl mt-10">
        <div>
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
        </div>
        <p className="text-white font-bold">Processing</p>
      </button>
      <span className="p-10 h-12 w-12 bg-blue-100 rounded-full animate-pulse">
        hi
      </span>
      <span className="mx-10 p-10 h-12 w-12 bg-sky-500 rounded-full animate-ping">
        test
      </span>
      <span className="p-10 h-12 w-12 bg-sky-300 rounded-full animate-bounce">
        hihi
      </span>
    </div>
  );
}
