const breakpoints = [
    '0px', // min
    '390px', //mobile
    '780px', // tablet
    '1280px',  // pc
    '1920px',
    '2560px',
];

const breakpoints_obj = {
    'zero': '0px',
    'sm': '390px',
    'md': '780px',
    'lg': '1280px',
    'xl': '1920px',
    'xxl': '2560px',
};

for (const [key, value] of Object.entries(breakpoints_obj)) {
    breakpoints[key as any] = value;
}

const colors = {
    /* Gray Scale */
    white: '#FFFFFF',
    grey_50: '#F9F9F9',
    grey_100: '#F3F3F3',
    grey_200: '#EBEBEB',
    grey_300: '#DCDCDC',
    grey_400: '#B8B8B8',
    grey_500: '#999999',
    grey_600: '#707070',
    grey_700: '#5D5D5D',
    grey_800: '#3E3E3E',
    grey_900: '#1D1D1D',
    black: '#000000',
    blue_500: '#0078FF',

    /* Background */
    bg01: '#F9FAFA',
    bg02: '#F1F3F5',
};

const BasicTheme = {
    colors,
    breakpoints,
    breakpoints_obj,
};

export default BasicTheme;


