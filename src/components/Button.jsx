function Button({ children, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full rounded-lg bg-fuchsia-800 py-2.5
        text-sm font-medium text-white
        transition-all duration-150
        hover:bg-fuchsia-900
        active:scale-95
        active:shadow-inner
        disabled:cursor-not-allowed
        disabled:bg-gray-200
        disabled:text-gray-400
        disabled:active:scale-100
      "
    >
      {children}
    </button>
  );
}

export default Button;