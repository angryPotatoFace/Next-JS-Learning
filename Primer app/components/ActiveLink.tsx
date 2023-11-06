import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSProperties } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface TypeLink {
    text: string,
    href: string
};

export const ActiveLink: React.FC<TypeLink> = ({ text, href } ) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};



