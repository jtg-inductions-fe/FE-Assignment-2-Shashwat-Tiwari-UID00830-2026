import type { Components } from '@mui/material/styles';

import CircularStdBoldTTF from '@assets/fonts/circularStd/CircularStd-Bold.ttf';
import CircularStdBoldWOFF2 from '@assets/fonts/circularStd/CircularStd-Bold.woff2';
// Local Font files
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';

// TODO: Add necessary font face declarations here
const fontFaceDeclarations = `
       @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterRegularWOFF2}) format('woff2'), 
        url(${InterRegularTTF}) format('truetype');
      }
      @font-face{
        font-display: swap;
        font-family: 'Circular Std';
        font-style: normal;
        font-weight: 700;
        src: url(${CircularStdBoldWOFF2}) format('woff2'),
        url(${CircularStdBoldTTF}) format('truetype');
      }
    `;

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
