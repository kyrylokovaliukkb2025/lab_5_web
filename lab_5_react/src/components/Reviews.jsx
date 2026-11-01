import { useEffect, useState } from 'react';

const VARIANT = 10;

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getComments() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                setComments(data);
            } catch (err) {
                console.error(err);
                setError('Не вдалося завантажити відгуки.');
            } finally {
                setLoading(false);
            }
        }
        getComments();
    }, []);

    return (
        <section className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-300 shadow-sm dark:bg-slate-800 dark:border-slate-600">
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-600 pb-1.5 mb-4 dark:text-blue-400 dark:border-blue-400">
                Відгуки попередніх роботодавців
            </h3>

            {loading && <p>Завантаження відгуків...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comments.map(comment => (
                    <article
                        key={comment.id}
                        className="p-4 rounded-lg border border-slate-200 border-l-4 border-l-blue-600 dark:border-slate-600 dark:border-l-blue-400"
                    >
                        <h4 className="font-semibold capitalize">{comment.name}</h4>
                        <a href={`mailto:${comment.email}`} className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                            {comment.email}
                        </a>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">{comment.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
