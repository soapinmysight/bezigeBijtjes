// Colors for both themes
const commonColor = {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',
};

// Colors for light theme
const light = {
    themeColor: '#FFFFFF',
    white: '#000000',
    sky: '#DE5E69',
    gray: 'gray',
    black:  '#FFFFFF',
    ...commonColor,
};

// Colors for dark theme
const dark = {
    themeColor: '#000000',
    white: '#FFFFFF',
    sky: '#831a23',
    gray: 'gray',
    black:  '#000000',
    ...commonColor,
};

export default { light, dark };
