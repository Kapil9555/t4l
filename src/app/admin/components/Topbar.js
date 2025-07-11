export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <input type="text" placeholder="Search or type command..." className="w-72 px-4 py-2 rounded-lg border text-sm focus:outline-none" />
      </div>

      <div className="flex items-center gap-6">
        <button>
          🌙
        </button>
        <button>
          🔔
        </button>
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/40" alt="user" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium">Tech4Logic ▾</span>
        </div>
      </div>
    </header>
  );
}