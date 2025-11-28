
import MenuActionCardSkeleton from "./MenuActionCardSkeleton";

const MenuCardSkeletonList = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-4 gap-2 h-3/4">
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <MenuActionCardSkeleton key={idx} />
        ))}
    </div>
  );
};

export default MenuCardSkeletonList;
