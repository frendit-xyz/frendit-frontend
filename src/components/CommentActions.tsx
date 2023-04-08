interface CommentActionsInterface {}

const CommentActions = (props: CommentActionsInterface) => {
  return (
    <div className="w-full flex items-center mt-1">
      <button className="mr-3 text-xs font-semibold uppercase hover:text-blue-500">
        Helpful
      </button>
      <button className="text-xs font-semibold uppercase hover:text-blue-500">
        Not Helpful
      </button>
    </div>
  );
};

export default CommentActions;
