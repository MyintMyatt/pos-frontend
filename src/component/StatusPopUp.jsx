export const StatusPopup = ({ children, statusMessage, onClose }) => {
  return (
    <div className="fixed gap-5 inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="flex flex-col justify-center bg-white w-[70%] max-w-xs rounded-2xl shadow-xl p-6">
        <div className="flex justify-center items-center">{children}</div>
        <h2 className="text-center text-wrap text-lg font-semibold">{statusMessage}</h2>
        <button className="mt-10 p-4 bg-gray-100 hover:bg-gray-200 rounded-2xl text-sm " onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
