import * as React from 'react';
import { 
    ThemeProvider, 
    ColorModeProvider,
    CSSReset,
} from "@chakra-ui/core";

import '../icons/library';

export function Layout({ children }) {
    return (
        <ThemeProvider>
            <CSSReset />
            <ColorModeProvider>
                {children}
            </ColorModeProvider>
        </ThemeProvider>
    );
}