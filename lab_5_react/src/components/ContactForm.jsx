import { useEffect, useRef, useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/mvkkwjkg';
const DELAY = 60000;

const inputClass =
    'px-3 py-2 rounded-md border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-600';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);
    const pressedOnOverlay = useRef(false);

    useEffect(() => {
        if (sessionStorage.getItem('modalClosed') === 'true') return;

        const timer = setTimeout(() => setIsOpen(true), DELAY);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('modalClosed', 'true');
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/55"
                    onMouseDown={e => { pressedOnOverlay.current = e.target === e.currentTarget; }}
                    onClick={e => {
                        if (pressedOnOverlay.current && e.target === e.currentTarget) handleClose();
                        pressedOnOverlay.current = false;
                    }}
                >
                    <div className="relative w-full max-w-md p-6 rounded-xl bg-white text-slate-800 shadow-xl dark:bg-slate-800 dark:text-slate-200">
                        <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-1.5 mb-4 dark:text-blue-400 dark:border-blue-400">
                            Зворотний зв'язок
                        </h3>

                        <form action={FORMSPREE_URL} method="POST" className="flex flex-col gap-3">
                            <label className="flex flex-col gap-1 text-sm">
                                Ім'я
                                <input type="text" name="name" required className={inputClass} />
                            </label>
                            <label className="flex flex-col gap-1 text-sm">
                                Email
                                <input type="email" name="email" required className={inputClass} />
                            </label>
                            <label className="flex flex-col gap-1 text-sm">
                                Номер телефону
                                <input type="tel" name="phone" placeholder="+380..." required className={inputClass} />
                            </label>
                            <label className="flex flex-col gap-1 text-sm">
                                Повідомлення
                                <textarea name="message" rows="4" required className={inputClass} />
                            </label>

                            <div className="flex gap-3 mt-2">
                                <button type="submit" className="flex-1 py-2 rounded-md bg-blue-600 text-white font-semibold cursor-pointer hover:bg-blue-700">
                                    Надіслати
                                </button>
                                <button type="button" onClick={handleClose} className="flex-1 py-2 rounded-md border border-slate-300 cursor-pointer hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700">
                                    Закрити
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm;
