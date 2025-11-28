const MenuActionCardSkeleton = () => {
  return (
    <div className="relative w-52 sm:w-44 md:w-52 rounded-xl flex flex-col items-center gap-y-2 h-fit p-3 bg-white shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-36 bg-slate-200 rounded-md"></div>

      {/* Details Skeleton */}
      <div className="flex flex-col w-full mt-2 gap-y-2">
        <div className="h-5 bg-slate-300 rounded w-3/4"></div> {/* Name */}
        <div className="h-4 bg-slate-300 rounded w-1/2"></div> {/* Category */}
    
      </div>



      {/* Buttons Skeleton */}
      <div className="flex gap-2 mt-3 w-full justify-between">
        <div className="h-8 bg-slate-300 rounded w-1/2"></div>
        <div className="h-8 bg-slate-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default MenuActionCardSkeleton;
