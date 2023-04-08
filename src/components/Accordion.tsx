import { ReactNode, useState, useEffect } from 'react';
import { RxChevronDown, RxChevronUp } from 'react-icons/rx';

export const AccordionItem = ({
  title,
  children,
  opened,
}: {
  title: string;
  children: ReactNode;
  opened?: boolean;
}) => {
  const [show, setShow] = useState(opened);

  useEffect(() => {
    setShow(opened);
  }, [opened]);

  return (
    <div>
      <h2>
        <button
          className="p-3 flex items-center justify-between w-full"
          onClick={() => setShow(!show)}
        >
          {title}
          {show ? <RxChevronUp /> : <RxChevronDown />}
        </button>
      </h2>
      {show && <div className="p-3 border-t border-gray-200">{children}</div>}
    </div>
  );
};

export const AccordionWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border border-gray-200 rounded divide-y divide-gray-200">
      {children}
    </div>
  );
};
