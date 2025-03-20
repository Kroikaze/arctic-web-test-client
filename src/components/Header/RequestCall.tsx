import { ChangeEvent, FC, FormEvent, useState } from 'react';

import PopUp from './PopUp.tsx';

const RequestCall: FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleOpenDropdown = () => {
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Data:', { name, phone });
        setIsSubmitted(true);
        setTimeout(() => {
            closeDropdown();
            setName('');
            setPhone('');
            setIsSubmitted(false);
        }, 2000);
    };

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    return (
        <div className="flex flex-col text-center relative">
            <a href="tel:88003027915" className="font-semibold text-2xl">
                8 (800) 302 79 15
            </a>

            <span
                className="text-sm underline text-latte pb-3 cursor-pointer"
                onMouseEnter={handleOpenDropdown}
            >
                Заказать обратный звонок
            </span>

            {isDropdownOpen && (
                <PopUp callback={closeDropdown}>
                    <div className="absolute top-full mt-2 bg-white border border-gray-200 p-4 w-64">
                        {isSubmitted ? (
                            <p className="text-sm">
                                Наш специалист свяжется с вами в ближайшее время.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    value={name}
                                    onChange={handleChangeName}
                                    className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Номер телефона"
                                    value={phone}
                                    onChange={handleChangePhone}
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
                </PopUp>
            )}
        </div>
    );
};

export default RequestCall;
