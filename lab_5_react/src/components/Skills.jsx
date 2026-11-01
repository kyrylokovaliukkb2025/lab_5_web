function Skills() {
    return (
        <section className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm dark:bg-slate-800 dark:border-slate-600 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-1.5 mb-3 dark:text-blue-400 dark:border-blue-400">Навички</h3>
            <ul className="flex flex-wrap gap-2">
                <li className="bg-sky-100 text-sky-700 font-semibold rounded-full px-3 py-1 transition hover:bg-sky-200 hover:scale-105 dark:bg-sky-900 dark:text-sky-200">Python</li>
                <li className="bg-sky-100 text-sky-700 font-semibold rounded-full px-3 py-1 transition hover:bg-sky-200 hover:scale-105 dark:bg-sky-900 dark:text-sky-200">C#</li>
                <li className="bg-sky-100 text-sky-700 font-semibold rounded-full px-3 py-1 transition hover:bg-sky-200 hover:scale-105 dark:bg-sky-900 dark:text-sky-200">HTML/CSS</li>
                <li className="bg-sky-100 text-sky-700 font-semibold rounded-full px-3 py-1 transition hover:bg-sky-200 hover:scale-105 dark:bg-sky-900 dark:text-sky-200">OSINT</li>
            </ul>
        </section>
    );
}

export default Skills;