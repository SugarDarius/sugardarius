import * as React from 'react';
import { 
    ThemeProvider, 
    ColorModeProvider,
    CSSReset,
    theme,
} from "@chakra-ui/core";

import '../icons/library';
import { usePrefersColorScheme } from '../hooks';

export function Layout({ children }) {
    const prefersColorSchme = usePrefersColorScheme();
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <ColorModeProvider value={prefersColorSchme}>
                {children}
            </ColorModeProvider>
        </ThemeProvider>
    );
}