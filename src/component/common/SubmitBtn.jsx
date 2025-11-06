export const SubmitBtn = ({ onClick, className, props, name }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-slate-900 text-white ${className}`}
      {...props}
    >
      {name}
    </button>
  );
};
