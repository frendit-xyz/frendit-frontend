import {
  Actions,
  ActionsButton,
  ActionsGroup,
  ActionsLabel,
} from 'konsta/react';

const CommentOptionsAction = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (props: boolean) => void;
}) => {
  return (
    <Actions opened={show} onBackdropClick={() => setShow(false)}>
      <ActionsGroup>
        <ActionsLabel>Hope this helps you</ActionsLabel>
        <ActionsButton onClick={() => setShow(false)}>Save</ActionsButton>
        <ActionsButton onClick={() => setShow(false)}>Delete</ActionsButton>
        <ActionsButton onClick={() => setShow(false)}>Report</ActionsButton>
      </ActionsGroup>
      <ActionsGroup>
        <ActionsButton onClick={() => setShow(false)} bold>
          Cancel
        </ActionsButton>
      </ActionsGroup>
    </Actions>
  );
};

export default CommentOptionsAction;
