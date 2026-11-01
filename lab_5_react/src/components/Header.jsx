function Header({ theme, onToggleTheme }) {
    return (
        <header className="relative bg-linear-to-r from-blue-700 to-blue-500 text-white text-center py-10 px-5 shadow-lg dark:from-blue-950 dark:to-blue-800">
            <button
                type="button"
                onClick={onToggleTheme}
                className="mb-4 md:mb-0 md:absolute md:top-4 md:right-4 px-4 py-2 rounded-full border border-white/60 bg-white/15 text-sm cursor-pointer transition hover:bg-white/30"
            >
                {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
            </button>
            <h1 className="text-4xl font-bold tracking-wide mb-2">Кирило Ковалюк</h1>
            <p className="text-lg opacity-90">Студент спеціальності "Кібербезпека" Національного університету "Львівська політехніка"</p>
        </header>
    );
}

export default Header;
