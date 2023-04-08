import { HiStatusOnline } from 'react-icons/hi';
import { MdSignalWifiStatusbar2Bar } from 'react-icons/md';
import { RiChat1Line, RiHeart2Line } from 'react-icons/ri';

interface PostActionsInterface {
  setShowComments: (props: boolean) => void;
}

const PostActions = (props: PostActionsInterface) => {
  return (
    <div className="flex items-center space-x-5">
      <div className="flex items-center space-x-2">
        <button className="hover:text-blue-600 hover:scale-125 transition-all duration-100">
          <RiHeart2Line size={18} />
        </button>
        <div className="font-semibold">30</div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className="hover:text-pink-600 hover:scale-125 transition-all duration-100"
          onClick={() => props.setShowComments(true)}
        >
          <RiChat1Line size={18} />
        </button>
        <div className="font-semibold">30</div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="hover:text-green-600 hover:scale-125 transition-all duration-100">
          <HiStatusOnline size={18} />
        </button>
        <div className="font-semibold">30</div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="hover:text-blue-600 hover:scale-125 transition-all duration-100">
          <MdSignalWifiStatusbar2Bar size={18} />
        </button>
        <div className="font-semibold">0.7</div>
      </div>
    </div>
  );
};

export default PostActions;
