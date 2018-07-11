/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const colors = {
  transparent: 'transparent',
  inherit: 'inherit',

  // Raw colors
  white: '#ffffff',
  black: '#22292F',
  gray: '#777777',
  red: '#e3342f',
  orange: '#f6993f',
  yellow: '#ffed4a',
  green: '#38c172',
  teal: '#4dc0b5',
  blue: '#3490dc',
  indigo: '#6574cd',
  purple: '#9561e2',
  pink: '#f66d9b',
  'black-pure': '#000',
  // Alpha
  'black-10': 'rgba(0, 0, 0, .10)',
  'black-25': 'rgba(0, 0, 0, .25)',
  'black-50': 'rgba(0, 0, 0, .5)',
  'black-65': 'rgba(0, 0, 0, .65)',
  'black-75': 'rgba(0, 0, 0, .75)',
  'black-90': 'rgba(0, 0, 0, .90)',
  'white-10': 'rgba(255, 255, 255, .10)',
  'white-25': 'rgba(255, 255, 255, .25)',
  'white-50': 'rgba(255, 255, 255, .5)',
  'white-65': 'rgba(255, 255, 255, .65)',
  'white-75': 'rgba(255, 255, 255, .75)',
  // Algolia
  cosmos: '#21243d',
  jupiter: '#89d9d3',
  mars: '#f695a0',
  mercury: '#5bbfdd',
  moon: '#f5f5fa',
  nebula: '#5468ff', // links
  neptune: '#7178cc',
  nova: '#848ab8',
  proton: '#c5c9e0',
  saturn: '#f8be9a',
  solstice: '#3a416f', // Headers
  telluric: '#5d6494', // Text
  venus: '#ea71bc',
  // Algolia variations
  'neptune-0': '#3944a0',
  'neptune-1': '#565db6',
  'neptune-2': '#7178cc',
  'neptune-3': '#8c93e2',
  'neptune-4': '#a6b0f9',
  'mercury-0': '#008fba',
  'mercury-1': '#2da7cb',
  'mercury-2': '#5bbfdd',
  'mercury-3': '#88d6ee',
  'mercury-4': '#b5eeff',
  'jupiter-0': '#3ab2bd',
  'jupiter-1': '#61c5c8',
  'jupiter-2': '#89d9d3',
  'jupiter-3': '#b0ecde',
  'jupiter-4': '#d7ffe9',
  'saturn-0': '#ec8b63',
  'saturn-1': '#f3a57e',
  'saturn-2': '#f8be9a',
  'saturn-3': '#fcd7b7',
  'saturn-4': '#fdf1d4',
  'mars-0': '#ed5a6a',
  'mars-1': '#f27885',
  'mars-2': '#f695a0',
  'mars-3': '#fbb3ba',
  'mars-4': '#ffd0d5',
  'venus-0': '#ae3e88',
  'venus-1': '#d44fa4',
  'venus-2': '#ea71bc',
  'venus-3': '#f89ad3',
  'venus-4': '#ffcae9',
};

const dimensionScale = {
  auto: 'auto',
  '0': '0',
  '1': '1rem',
  '2': '2rem',
  '3': '4rem',
  '4': '8rem',
  '5': '16rem',
  '1x': '1.5rem',
  '2x': '3rem',
  '3x': '6rem',
  '4x': '12rem',
  '10': '10%',
  '20': '20%',
  '25': '25%',
  '30': '30%',
  '33': 'calc(100% / 3)',
  '40': '40%',
  '50': '50%',
  '60': '60%',
  '66': 'calc(100% / 1.5)',
  '70': '70%',
  '75': '75%',
  '80': '80%',
  '90': '90%',
  '100': '100%',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const widthScale = {
  ...dimensionScale,
  '100vw': '100vw',
};
const heightScale = {
  ...dimensionScale,
  '100vh': '100vh',
};

const spacingScale = {
  '0': '0',
  '05': '.5rem',
  '1': '1rem',
  '2': '2rem',
  '3': '4rem',
  '4': '8rem',
  '5': '16rem',
  '0x': '.25rem',
  '05x': '.75rem',
  '1x': '1.5rem',
  '2x': '3rem',
  '3x': '6rem',
  '4x': '12rem',
  '10': '10%',
  '20': '20%',
  '25': '25%',
  '30': '30%',
  '33': 'calc(100% / 3)',
  '40': '40%',
  '50': '50%',
  '60': '60%',
  '66': 'calc(100% / 1.5)',
  '70': '70%',
  '75': '75%',
  '80': '80%',
  '90': '90%',
  '100': '100%',
};
const marginScale = {
  ...spacingScale,
  auto: 'auto',
};

const fontScale = {
  '-2': '0.75rem',
  '-1': '0.875rem',
  '1': '1rem', // 16px
  '2': '1.125rem', // 18px
  '3': '1.25rem', // 20px
  '4': '1.5rem', // 24px
  '5': '1.875rem', // 30px
  '6': '2.25rem', // 36px
  '7': '3rem', // 48px
  '8': '3.5rem', // 56px
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const borderRadius = {
  '0': '0',
  '1': '.125rem',
  '2': '.25rem',
  '3': '.5rem',
  auto: '6px',
  '100': '9999px',
};

const zIndex = {
  auto: 'auto',
  '-2': -20,
  '-1': -10,
  '0': 0,
  '1': 10,
  '2': 20,
  '3': 30,
  '4': 40,
  '5': 50,
};

const opacity = {
  '0': '0',
  '15': '.15',
  '25': '.25',
  '50': '.5',
  '75': '.75',
  '100': '1',
};

// Use font-weight without prefixes (.bold, .thin, etc)
const customFontWeight = _.reduce(fontWeights, (result, value, key) =>
  _.assign(result, {
    [`${key}`]: { fontWeight: value },
  })
);
const customUtilities = {
  'outline-none': {
    outline: 'none',
  },
  'text-outline': {
    'text-shadow':
      '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },
  'bg-blur': {
    filter: 'blur(10px)',
  },
};
const customFlexbox = {
  flrnw: {
    display: 'flex',
    flexDirection: 'row',
  },
  flrw: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flcnw: {
    display: 'flex',
    flexDirection: 'column',
  },
  flcw: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  fln: {
    flex: 'none',
  },
  fla: {
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0,
  },
  flccv: {
    justifyContent: 'center',
  },
  flcch: {
    alignItems: 'center',
  },
  flrcv: {
    alignItems: 'center',
  },
  flrch: {
    justifyContent: 'center',
  },
  flc: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flrar: {
    justifyContent: 'flex-start',
  },
  flral: {
    justifyContent: 'flex-end',
  },
  flcat: {
    justifyContent: 'flex-start',
  },
  flcab: {
    justifyContent: 'flex-end',
  },
  flspa: {
    justifyContent: 'space-around',
  },
  flspb: {
    justifyContent: 'space-between',
  },
};
// Use the spacing scale for top/right/bottom/let positioning
const customPositions = _.reduce(spacingScale, (result, value, key) =>
  _.assign(result, {
    [`top-${key}`]: { top: value },
    [`right-${key}`]: { top: value },
    [`bottom-${key}`]: { top: value },
    [`left-${key}`]: { top: value },
  })
);
// Add calculated height and width with cropped parts, like .h-100vh-3
const customCroppedVhVw = _.reduce(dimensionScale, (result, value, key) => {
  // Only do it for simple scale and half/scales
  const isSimpleScale = key.length === 1;
  const isHalfScale = key.length === 2 && key[1] === 'x';
  if (!(isSimpleScale || isHalfScale)) {
    return result;
  }
  return _.assign(result, {
    [`h-100vh-${key}`]: { height: `calc(100vh - ${value})` },
    [`w-100vw-${key}`]: { width: `calc(100vw - ${value})` },
  });
});

function addCustomClasses(customClasses) {
  return ({ addUtilities }) => {
    const prefixedClasses = _.mapKeys(customClasses, (value, key) => `.${key}`);
    addUtilities(prefixedClasses);
  };
}

const plugins = [
  addCustomClasses(customFontWeight),
  addCustomClasses(customFlexbox),
  addCustomClasses(customUtilities),
  addCustomClasses(customPositions),
  addCustomClasses(customCroppedVhVw),
];

module.exports = {
  textSizes: fontScale,
  fontWeights,
  width: widthScale,
  minWidth: widthScale,
  maxWidth: widthScale,

  height: heightScale,
  minHeight: heightScale,
  maxHeight: heightScale,

  padding: spacingScale,

  margin: marginScale,
  negativeMargin: marginScale,

  colors,
  zIndex,
  opacity,
  borderRadius,

  plugins,
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    print: { raw: 'print' },
  },
  textColors: colors,
  backgroundColors: colors,
  borderWidths: {
    default: '1px',
    '0': '0',
    '1': '2px',
    '2': '4px',
    '3': '8px',
  },
  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
  fonts: {
    sans: [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    serif: [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
  },
  // Line-height
  leading: {
    '0': '0',
    '01': 1,
    '1': 1.25,
    '2': 1.5,
    '3': 2,
  },
  // Letter-spacing
  tracking: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em',
    poppins: '1.5px',
  },
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    none: 'none',
  },
  svgFill: {
    current: 'currentColor',
  },
  svgStroke: {
    current: 'currentColor',
  },

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColors: ['responsive', 'hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive'],
    svgFill: [],
    svgStroke: [],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: '_',
  },
};
