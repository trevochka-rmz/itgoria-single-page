import React from 'react';

function Contact() {
    return (
        <section className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
            <form className="max-w-lg mx-auto flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Ваше имя"
                    className="p-3 border rounded"
                />
                <input
                    type="email"
                    placeholder="Ваш email"
                    className="p-3 border rounded"
                />
                <textarea
                    placeholder="Ваше сообщение"
                    className="p-3 border rounded"
                ></textarea>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Отправить
                </button>
            </form>
        </section>
    );
}

export default Contact;
