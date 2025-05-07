import { styled } from "..";


export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 590,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300'
        }
    }
})

export const ImageContainer = styled('div', {
    maxWidth: 150,
    height: 150,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)' ,
    borderRadius: '9999px',
    // padding: '0.25rem',
    marginTop: '4rem',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },

    position: 'relative',
    boxShadow: '0 0 60px rgba(0, 0, 0, 0.8)'


})

export const ItemsContainer = styled('div', {

    display: 'flex',
    // justifyContent: 'center',
    position: 'relative',

    ':not(:first-child)': {

        
    },

    div: {
        width: '150px'
    }


})