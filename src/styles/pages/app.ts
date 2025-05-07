import { styled } from "..";


export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
})


export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1100,
    margin: '0 auto',

    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',

    position: 'relative',

    variants: {
        
        headerJustify: {
            normal: {
                justifyContent: 'space-between'
            },

            success: {
                justifyContent: 'center'
            }
        }
    },


    defaultVariants: {
        headerJustify: 'normal'
    }

})

export const ShopCartHeaderButtonEmpty = styled('button', {

    boxSizing: 'border-box',
        all: 'unset',
        backgroundColor: '$gray800',
        
        borderRadius: 6,

        width: '48px',
        height: '48px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        cursor: 'pointer',

        transition: '0.125s ease-in',
    
        svg: {
            color: '$grayIcon',
            transition: '0.125s ease-in',
    
        },

        '&:hover': {
            backgroundColor: '$grayIcon',

            svg: {
                color: '$gray800',
        
            },
        }
})

export const ShopCartHeaderButtonFull = styled('button', {

    boxSizing: 'border-box',
        
        position: 'relative',

        all: 'unset',
        backgroundColor: '$gray800',
        
        borderRadius: 6,

        width: '48px',
        height: '48px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        cursor: 'pointer',

        transition: '0.125s ease-in',
    
        svg: {
            color: '$gray300',
            transition: '0.125s ease-in',
    
        },

        '&:hover': {
            backgroundColor: '$grayIcon',

            svg: {
                color: '$gray300',
        
            },
        }
})

export const ShopCartCount = styled('span', {

    width: '1.75rem',
    height: '1.75rem',

    borderRadius: '9999px',

    backgroundColor: '$green500',

    fontFamily: 'Roboto',
    fontWeight: 'bold',
    lineHeight: '160%',
    fontSize: '0.875rem',
    color: '$white',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: 25,
    right: -6,

    border: '3px solid $colors$gray900',


})

export const ShopCartContainer = styled('div', {
    boxSizing: 'border-box',

    width: '30rem',
    minHeight: '100vh',
    backgroundColor: '$gray800',
    boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.8)',

    position: 'fixed',
    zIndex: 10000,
    top: 0,
    right: 0,

    paddingTop: '1.5rem',
    paddingBottom: '3rem',
    paddingInline: '3rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',


    header: {
        width: '100%',
        marginBottom: '2rem',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',

        button: {
            all: 'unset',
            cursor: 'pointer'
        }
    },

    h1: {
        fontFamily: 'Roboto',
        lineHeight: '160%',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '$gray100'
    },

    section: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',

    },

    div: {
        width: '100%'
    }

    
})

export const BagContainer = styled('div', {
    width: '100%',
    maxHeight: '27.25rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',


    p: {
        position: 'absolute',
        top: '40%',
        left: '15%',

        height: '5rem',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',

        svg: {
            color: '$grayIcon'
        }
        
    },

    variants: {

        scrollVariant: {
            normal: { 
                overflowY: 'visible',
            },

            scroll: {
                overflowY: 'scroll',
                scrollbarWidth: 'thin',
                scrollBehavior: 'smooth',
            }
            
        }
    },

    defaultVariants: {
        scrollVariant: 'normal'
    }


})

export const ShopCartItemContainer = styled('div', {

    width: '100%',
    display: 'flex',
    gap: '1.25rem',
    

})

export const ShopCartImage = styled('div', {


    maxWidth: '94px',
    maxHeight: '94px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    borderRadius: '10px'

})

export const ShopCartDetails = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h4: {
        fontFamily: 'Roboto',
        fontWeight: 'normal',
        lineHeight: '160%',
        fontSize: '1.125rem',
        color: '$gray300'
    },

    span: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        lineHeight: '160%',
        fontSize: '1.125rem',
        color: '$gray100',
    },

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    button: {
        all: 'unset',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        lineHeight: '160%',
        fontSize: '1rem',
        color: '$green500',

        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'underline'
        }
    }

})

export const ShopCartFooter = styled('footer', {

    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
    

    div: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },

    aside: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },

    


    'aside:first-child': {
        'span:first-child': {
            fontFamily: 'Roboto',
            fontWeight: 'normal',
            fontSize: '1rem',
            lineHeight: '160%',
            color: '$gray100'

        },

        'span:last-child': {
            fontFamily: 'Roboto',
            fontWeight: 'normal',
            fontSize: '1.125rem',
            lineHeight: '160%',
            color: '$gray300'

        }
    },

    'aside:last-child': {
        'span:first-child': {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            lineHeight: '160%',
            color: '$gray100'

        },

        'span:last-child': {
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            lineHeight: '140%',
            color: '$gray100'

        }
    },


    button: {
        boxSizing: 'border-box',
        all: 'unset',
        cursor: 'pointer',

        width: '100%',
        backgroundColor: '$green500',
        color: '$white',
        textAlign: 'center',
        borderRadius: 8,

        height: '4.3125rem',

        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        lineHeight: '160%',
        transition: '0.125s ease-in',

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
            
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'progress'
        }
    }
})