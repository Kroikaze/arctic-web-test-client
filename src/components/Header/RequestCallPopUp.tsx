import { ChangeEvent, FC, FormEvent, RefObject, useState } from 'react';

interface CallBackPopupProps {
    onClose: () => void;
    dropdownRef: RefObject<HTMLDivElement | null>;
}

const CallBackPopup: FC<CallBackPopupProps> = ({ onClose, dropdownRef }) => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(e);
        console.log('Data:', { name, phone });
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 2000);
    };
    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    return (
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
                    <button type="submit" className="w-full bg-latte text-white py-2 rounded-lg">
                        Отправить
                    </button>
                </form>
            )}
        </div>
    );
};

export default CallBackPopup;
