export const SubmitBtn = ({ onClick, className, props, name }) => {
  return (
    <button
      onClick={onClick}
      className={`text-lg rounded-md w-full cursor-pointer hover:bg-slate-950 bg-slate-900 text-white ${className}`}
      {...props}
    >
      {name}
    </button>
  );
};
