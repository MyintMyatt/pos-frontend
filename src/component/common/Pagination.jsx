import { ChevronLeft, ChevronRight } from "lucide-react";

const ArrowBtn = ({ icon, onClick, disabled = false, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gray-800 text-white rounded-sm p-2 w-fit flex items-center justify-center
        cursor-pointer disabled:cursor-not-allowed disabled:opacity-50
        hover:bg-gray-700 transition
        ${className}
      `}
    >
      {icon}
    </button>
  );
};

const Pagination = ({ totalPages, current, onPageChange }) => {
  return (
    <div className="flex items-center gap-6">
      <ArrowBtn
        icon={<ChevronLeft />}
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
      />

      <div className="text-gray-800 font-medium">
        {current} of {totalPages}
      </div>

      <ArrowBtn
        icon={<ChevronRight />}
        onClick={() => onPageChange(current + 1)}
        disabled={current === totalPages}
      />
    </div>
  );
};

export default Pagination;
