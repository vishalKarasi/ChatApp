const ConversationSkeleton = () => {
  const skeletonNum = [1, 2, 3, 4, 5];
  return (
    <>
      {skeletonNum.map((e) => (
        <article key={e} className="flex items-center gap-6 p-2">
          <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
          <div className="skeleton h-8 w-[50%]"></div>
        </article>
      ))}
    </>
  );
};

export default ConversationSkeleton;
