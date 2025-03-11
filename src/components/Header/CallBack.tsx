import React, { useRef, useState } from 'react';

import useClickOutside from '@/components/hooks/useClickOutside.ts';
import useDropdown from '@/components/hooks/useDropdown.ts';

const CallBack = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const { isDropdownOpen, openDropdown, closeDropdown } = useDropdown();
    useClickOutside(dropdownRef, () => {
        closeDropdown();
        resetForm();
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const resetForm = () => {
        setName('');
        setPhone('');
        setIsSubmitted(false);
    };

    return (
        <div className="flex flex-col text-center relative">
            <a href="tel:88003027915" className="font-semibold text-2xl">
                8 (800) 302 79 15
            </a>

            <span
                className="text-sm underline text-latte pb-3 cursor-pointer"
                onMouseEnter={openDropdown}
            >
                Заказати зворотний дзвінок
            </span>

            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full mt-2 bg-white border border-gray-200 p-4 w-64"
                >
                    {isSubmitted ? (
                        <p className="text-sm">Наш специалист свяжется с вами в ближайшее время.</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Номер телефона"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-latte text-white py-2 rounded-lg"
                            >
                                Отправить
                            </button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
};

export default CallBack;
