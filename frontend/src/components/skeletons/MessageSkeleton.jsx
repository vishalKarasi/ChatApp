import React from "react";

const MessageSkeleton = () => {
  const skeletonNum = [1, 2, 3, 4, 5];
  return (
    <>
      {skeletonNum.map((e) => (
        <React.Fragment key={e}>
          <article className="flex gap-3 items-center">
            <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-1">
              <div className="skeleton h-8 w-40"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </article>
          <article className="flex gap-3 items-center justify-end">
            <div className="flex flex-col gap-1">
              <div className="skeleton h-8 w-40"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
            <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
          </article>
        </React.Fragment>
      ))}
    </>
  );
};

export default MessageSkeleton;
