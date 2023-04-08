import { Page, Navbar, Popup, Block } from 'konsta/react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import CommentCard from './CommentCard';
import PostActions from './PostActions';

const CommentsPopup = ({
  show,
  setShow,
  setShowComments,
}: {
  show: boolean;
  setShow: (props: boolean) => void;
  setShowComments: (props: boolean) => void;
}) => {
  return (
    <Popup opened={show} onBackdropClick={() => setShow(false)}>
      <Page>
        <Navbar
          className="px-3 bg-white"
          right={<PostActions setShowComments={setShowComments} />}
          left={
            <button
              className="hover:text-red-600"
              onClick={() => setShow(false)}
            >
              <HiOutlineArrowLeft />
            </button>
          }
        />
        <Block className="space-y-3">
          {[...Array(10)].map((e, i) => (
            <CommentCard key={i} />
          ))}
        </Block>
      </Page>
    </Popup>
  );
};

export default CommentsPopup;
