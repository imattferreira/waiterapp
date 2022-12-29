import { globalFontFace } from "@vanilla-extract/css";

globalFontFace('GeneralSans', {
  src: `url('/fonts/GeneralSans-Regular.woff2') format('woff2'),
  url('/fonts/GeneralSans-Regular.woff') format('woff'),
  url('/fonts/GeneralSans-Regular.ttf') format('truetype')`,
  fontDisplay: 'swap',
  fontWeight: 400,
  fontStyle: 'normal'
});

globalFontFace('GeneralSans', {
  src: `url('/fonts/GeneralSans-Medium.woff2') format('woff2'),
  url('/fonts/GeneralSans-Medium.woff') format('woff'),
  url('/fonts/GeneralSans-Medium.ttf') format('truetype')`,
  fontDisplay: 'swap',
  fontWeight: 500,
  fontStyle: 'normal'
});

globalFontFace('GeneralSans', {
  src: `url('/fonts/GeneralSans-Semibold.woff2') format('woff2'),
  url('/fonts/GeneralSans-Semibold.woff') format('woff'),
  url('/fonts/GeneralSans-Semibold.ttf') format('truetype')`,
  fontDisplay: 'swap',
  fontWeight: 600,
  fontStyle: 'normal'
});
