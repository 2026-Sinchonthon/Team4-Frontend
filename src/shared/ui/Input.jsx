export function Input({ id, label, error, hint, className = '', ...props }) {
  const inputId = id ?? props.name
  return <label className="grid gap-1.5" htmlFor={inputId}>{label && <span className="text-sm font-bold text-stone-800">{label}</span>}<input id={inputId} className={`h-10 w-full rounded-lg border bg-white px-3 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:ring-3 focus:ring-stone-200 ${error ? 'border-red-400' : 'border-stone-300'} ${className}`} aria-invalid={Boolean(error)} {...props} />{(error || hint) && <span className={`text-xs ${error ? 'text-red-600' : 'text-stone-500'}`}>{error ?? hint}</span>}</label>
}
