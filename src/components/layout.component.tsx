import * as React from 'react';

import { 
    ThemeProvider, 
    ColorModeProvider,
    CSSReset,
    theme
} from "@chakra-ui/core";

export function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <ColorModeProvider value='dark'>
                {children}
            </ColorModeProvider>
        </ThemeProvider>
    );
}