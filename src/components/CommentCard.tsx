import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { HiArrowSmUp } from 'react-icons/hi';
import CommentActions from './CommentActions';
import CommentOptionsAction from './CommentOptionsAction';

const CommentCard = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="flex space-x-3 items-start relative">
      <div className="avatar mt-1">
        <div className="rounded-full">
          <FaUserCircle size={20} />
        </div>
      </div>
      <div className="space-y-.5">
        <div className="flex items-center">
          <p className="font-semibold text-sm">Sayed Rafi</p>
          <div className="ml-auto flex items-center space-x-2">
            <p className="text-xs flex items-center space-x-.5 ml-auto">
              <HiArrowSmUp className="text-blue-500" /> 33%
            </p>
            <button
              className="btn btn-xs btn-ghost"
              onClick={() => setShowOptions(true)}
            >
              <BsThreeDots size={20} />
            </button>
          </div>
        </div>
        <div className="space-y-1">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris
          </div>
          <img
            className="h-32 rounded"
            src="https://cdn4.buysellads.net/uu/1/127419/1670531697-AdobeTeams.jpg"
            alt=""
          />
        </div>
        <CommentActions />
        <CommentOptionsAction show={showOptions} setShow={setShowOptions} />
      </div>
    </div>
  );
};

export default CommentCard;
