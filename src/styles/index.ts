import {createStitches} from "@stitches/react"

export const {
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    css
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',
            grayIcon: '#8D8D99',

            green500: '#00875f',
            green300: '#00b37e'
        },
        
        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem' 
        }
    }
})