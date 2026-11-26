import type { Components } from '@mui/material/styles';

// Inter font files
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';
import InterMediumTTF from '@assets/fonts/inter/inter-v20-latin-500.ttf';
import InterMediumWOFF2 from '@assets/fonts/inter/inter-v20-latin-500.woff2';
import InterSemiBoldTTF from '@assets/fonts/inter/inter-v20-latin-600.ttf';
import InterSemiBoldWOFF2 from '@assets/fonts/inter/inter-v20-latin-600.woff2';
import InterBoldTTF from '@assets/fonts/inter/inter-v20-latin-700.ttf';
import InterBoldWOFF2 from '@assets/fonts/inter/inter-v20-latin-700.woff2';

// TODO: Add other Inter font imports here when available.

const fontFaceDeclarations = `
    @font-face {
        font-display: swap;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterRegularWOFF2}) format('woff2'),
             url(${InterRegularTTF}) format('truetype');
    }
@font-face {
  font-display: swap; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url(${InterMediumWOFF2}) format('woff2'), 
       url(${InterMediumTTF}) format('truetype');
}

@font-face {
  font-display: swap; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url(${InterSemiBoldWOFF2}) format('woff2'), 
       url(${InterSemiBoldTTF}) format('truetype');
       }

@font-face {
  font-display: swap; 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url(${InterBoldWOFF2}) format('woff2'), 
       url(${InterBoldTTF}) format('truetype');}`;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: `
            html {
                font-size: 62.5%;
            }

            ${fontFaceDeclarations}
        `,
    },
};
