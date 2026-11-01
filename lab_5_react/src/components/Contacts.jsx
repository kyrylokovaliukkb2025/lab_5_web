function Contacts() {
    return (
        <section className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm dark:bg-slate-800 dark:border-slate-600 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-1.5 mb-3 dark:text-blue-400 dark:border-blue-400">Контакти</h3>
            <ul className="space-y-2">
                <li>Телефон: <a href="tel:+380991362649" className="hover:text-blue-600 hover:underline dark:hover:text-blue-400">+380 99 136 26 49</a></li>
                <li>Email: <a href="mailto:kyrylo.kovaliuk.kb.2025@lpnu.ua" className="hover:text-blue-600 hover:underline dark:hover:text-blue-400">kyrylo.kovaliuk.kb.2025@lpnu.ua</a></li>
                <li>Локація: м. Львів вул. Лукаша 5</li>
            </ul>
        </section>
    );
}

export default Contacts;