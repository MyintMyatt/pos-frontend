// Dashboard Card (Plain JavaScript + JSX)
// No TypeScript, no external UI library required

export default function DashboardStatCard({ title, value, type }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h2 className="text-4xl font-bold mt-1 text-gray-800">{value}</h2>
        </div>

        <div className="p-4 rounded-2xl bg-gray-50 shadow-inner">
          {type === "category" ? (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
          ) : (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </div>
      </div>
    </div>
  )
}
