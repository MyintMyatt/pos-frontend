

const PaymentCard = ({ name, logo }) => {
  return (
    <div className="size-9 flex flex-col shadow-sm sha rounded-sm cursor-pointer">
      <div>{logo}</div>
      <div className="font-bold text-xl">{name}</div>
    </div>
  );
};

export default PaymentCard;
