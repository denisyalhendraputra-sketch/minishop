function Badge({ children, variant = "default" }) {
  const styles = {
    default: "bg-gray-100 text-gray-600 border-gray-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    danger: "bg-rose-50 text-rose-700 border-rose-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export default Badge;