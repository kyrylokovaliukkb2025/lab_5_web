import { useEffect, useState } from 'react';

function Footer() {
    const [storageData, setStorageData] = useState([]);

    useEffect(() => {
        const systemInfo = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            screen: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };

        Object.entries(systemInfo).forEach(([key, value]) => {
            localStorage.setItem(key, String(value));
        });

        const data = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            data.push([key, localStorage.getItem(key)]);
        }
        setStorageData(data);
    }, []);

    return (
        <footer className="max-w-5xl mx-auto px-5 pb-8">
            <div className="p-5 bg-white border border-slate-300 rounded-xl shadow-sm dark:bg-slate-800 dark:border-slate-600">
                <p className="text-center text-slate-500 italic dark:text-slate-400">
                    &copy; 2025 Кирило Ковалюк. Резюме створене для лабораторної роботи.
                </p>
                <h4 className="mt-4 mb-2 font-semibold">Інформація про систему (з localStorage)</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 break-words dark:text-slate-400">
                    {storageData.map(([key, value]) => (
                        <li key={key}>
                            <b className="text-slate-800 dark:text-slate-200">{key}:</b> {value}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
