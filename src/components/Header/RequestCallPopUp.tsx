import React, { useState } from 'react';

interface CallBackPopupProps {
    isOpen: boolean;
    onClose: () => void;
    dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const CallBackPopup: React.FC<CallBackPopupProps> = ({ onClose, isOpen, dropdownRef }) => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Data:', { name, phone });
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    if (!isOpen) return null;

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
                    <button type="submit" className="w-full bg-latte text-white py-2 rounded-lg">
                        Отправить
                    </button>
                </form>
            )}
        </div>
    );
};

export default CallBackPopup;
