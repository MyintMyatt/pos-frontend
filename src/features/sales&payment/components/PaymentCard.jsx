const PaymentCard = ({ name, logo, className }) => {
  return (
    <div
      className={`w-full p-2 flex gap-x-2 justify-center items-center  
          shadow-sm border-indigo-400 border-2 rounded-sm cursor-pointer ${className}`}
    >
      <div>{logo}</div>
      <div className=" text-slate-900 text-xl">{name}</div>
    </div>
  );
};

export default PaymentCard;
