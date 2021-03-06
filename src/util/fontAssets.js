import { Font } from 'expo';

const cachedFonts = fonts => 
    fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
    { montserrat: require('../../assets/fonts/Montserrat-Regular.ttf') }    
])