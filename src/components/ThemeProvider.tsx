import React, { ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface Props {
    children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    return (
        <NextThemeProvider attribute="class">
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;