import { styled } from "..";
import Link from "next/link"


export const HomeContainer = styled('div', {
    // display: "flex",
    // gap: '3rem',
    // maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    // maxWidth: '100vh',
    // marginLeft: 'auto',
    minHeight: 656,
    
})


export const Product = styled(Link, {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    cursor: "pointer",
    position: 'relative',

    width: '696px',

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: 'hidden',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',
        borderRadius: 6,

        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        div: {
            display: "flex",
            alignItems: 'start',
            flexDirection: 'column',
            gap: '0.5rem',
            justifyContent: 'space-between',
        },

        strong: {
            fontSize: '$lg',
            color: '$gray100'
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        },

    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 100
        }
    }

})


export const AddProductSlideButton = styled('span', {

    boxSizing: 'border-box',
    backgroundColor: '$green500',
    borderRadius: 6,

    width: '3.5rem',
    height: '3.5rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    cursor: 'pointer',

    transition: '0.125s ease-in',

    svg: {
        color: '$white',
        transition: '0.125s ease-in',

    },

    '&:hover': {
        backgroundColor: '$white',

        svg: {
            color: '$green500',
    
        },
    }
})