import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Block } from 'konsta/react';
import { FaPlay, FaUserCircle } from 'react-icons/fa';
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { RiTimeLine } from 'react-icons/ri';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import CommentsPopup from './CommentsPopup';
import PostOptionsAction from './PostOptionsAction';
import PostActions from './PostActions';

interface PostCardInterface {
  images?: string[];
  video?: string;
}

const PostCard = (props: PostCardInterface) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <Block strong inset className="space-y-4" margin='my-0'>
        <div className="flex items-center w-full">
          <div className="flex space-x-3 items-center">
            <div className="avatar">
              <div className="rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                <FaUserCircle size={30} />
              </div>
            </div>
            <div className="space-y-.5">
              <p className="font-semibold text-sm">Sayed Rafi</p>
              <div className="flex items-center space-x-1">
                <GiAmericanFootballHelmet />
                <div className="text-xs">
                  Chilling at Padma Bridge food court
                </div>
              </div>
            </div>
          </div>
          <button
            className="ml-auto btn btn-xs btn-ghost"
            onClick={() => setShowOptions(true)}
          >
            <BsThreeDots size={20} />
          </button>
        </div>
        <div
          className={classNames({
            'space-y-3': true,
            'line-clamp-6': !expanded,
          })}
          onClick={() => setExpanded(!expanded)}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tempore ratione unde accusantium distinctio nulla quia numquam earum
            odio, optio, nisi rem deserunt. Molestiae delectus, ut assumenda
            numquam magni enim.
          </p>
          <p>
            Architecto molestias cum dolor dolorem provident consequuntur
            incidunt sunt fugiat tenetur odio, recusandae placeat rem veniam.
            Voluptates, repellendus odit, magni nesciunt, optio laborum
            asperiores repudiandae consectetur suscipit ab cupiditate eum.
          </p>
        </div>
        {props.images && props.images.length !== 0 && (
          <div className="h-96 carousel carousel-vertical rounded-md">
            {props.images?.map((src, i) => (
              <div className="carousel-item h-full" key={i}>
                <img className="w-full object-cover" src={src} />
              </div>
            ))}
          </div>
        )}
        {!props.images && props.video && (
          <div className="flex w-full rounded overflow-hidden">
            <ReactPlayer url={props.video} height={300} light playIcon={
              <button className='h-16 w-16 bg-gray-500 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center'>
                <FaPlay size={20} />
              </button>
            } />
          </div>
        )}
        <div className="flex items-center">
          <PostActions setShowComments={setShowComments} />
          <div className="flex items-center space-x-1 ml-auto">
            <RiTimeLine size={18} />
            <div>3d 2m</div>
          </div>
        </div>
      </Block>
      <PostOptionsAction show={showOptions} setShow={setShowOptions} />
      <CommentsPopup
        show={showComments}
        setShow={setShowComments}
        setShowComments={setShowComments}
      />
    </div>
  );
};

export default PostCard;
