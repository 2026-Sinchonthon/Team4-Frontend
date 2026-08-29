export function EmptyState({ title, description, action, icon = '○' }) {
  return <section className="grid place-items-center rounded-xl border border-dashed border-stone-300 px-5 py-12 text-center"><span className="text-3xl text-stone-400" aria-hidden="true">{icon}</span><h3 className="mt-3 text-base font-bold text-stone-800">{title}</h3>{description && <p className="mt-1 text-sm text-stone-500">{description}</p>}{action && <div className="mt-5">{action}</div>}</section>
}
