function Experience() {
    return (
        <section className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm dark:bg-slate-800 dark:border-slate-600 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-1.5 mb-3 dark:text-blue-400 dark:border-blue-400">Досвід</h3>
            <ul className="space-y-3">
                <li className="font-medium">Стажування в компанії "CyberSec Solutions" (2023-2024)
                    <p className="mt-1 font-normal text-slate-500 italic dark:text-slate-400">Розробка та тестування систем безпеки, аналіз вразливостей.</p>
                </li>
                <li className="font-medium">Проект "Безпечний веб-додаток" (2024)
                    <p className="mt-1 font-normal text-slate-500 italic dark:text-slate-400">Розробка веб-додатку з акцентом на безпеку та захист даних користувачів.</p>
                </li>
            </ul>
        </section>
    );
}

export default Experience;