import { ChangeEvent, FC, FormEvent, useState } from 'react';

const EmailSubscribe: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setIsSubscribed(true);
        setEmail('');
    };

    const handleSetEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <div className="mt-4 text-white">
            <p className="text-sm mb-2">Подпишись на новинки и скидки</p>

            {isSubscribed ? (
                <p className="text-sm text-latte">Спасибо за подписку!</p>
            ) : (
                <form onSubmit={handleSubmit} className="">
                    <input
                        type="email"
                        value={email}
                        onChange={handleSetEmail}
                        placeholder="E-mail"
                        className="bg-white text-gray-400 px-3 py-2 text-sm w-1/2"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-latte text-white px-4 py-2 text-sm font-medium mb-4 w-1/2"
                    >
                        ОТПРАВИТЬ
                    </button>
                </form>
            )}
        </div>
    );
};

export default EmailSubscribe;
