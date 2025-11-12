export const SubmitBtn = ({ onClick, className = "", name, loading = false, ...props }) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            disabled={loading}
            className={`text-lg rounded-md w-full cursor-pointer bg-slate-900 text-white hover:bg-slate-950 
            ${loading ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
            {...props}
        >
            {loading ? (
                <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                </div>
            ) : (
                name
            )}
        </button>
    );
};
