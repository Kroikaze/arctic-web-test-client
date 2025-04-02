import { FC } from 'react';

interface FooterListProps {
    items: Array<{ text: string; link?: string }>;
}

const FooterList: FC<FooterListProps> = ({ items }) => {
    return (
        <div className="flex flex-col">
            <ul className="space-y-1">
                {items.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.link}
                            className="text-gray-400 hover:text-white text-sm whitespace-pre-line"
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;
