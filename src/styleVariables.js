export const colors = {
  purple: '#1A1936',
  white: '#FFFFFF',
}

// Breakpoints
export const breakpoints = {
  xs: 0,
  sm: 656,
  md: 1024,
  lg: 1280,
  xl: 1920,
};

// Border Radius
export const radius = '2px';
export const lineHeight = '1.5';

// Colors
export const color = {
  background: '#FAFAFA',
  black: '#1D1D1D',
  charcoal: '#3C3C3C',
  white: '#FFFFFF',
  error: '#d0021b',
  success: '#4e976b',
  blue: 'rgba(3, 54, 255)',
  blueHover: 'rgba(3, 54, 255, .7)',
  formError: '#FB433C',
  warning: '#c54b0a',
  warningBorderColor: '#e48654',

  gray: {
    default: '#141414',
    dark: '#999999',
    light: '#F7F7F7',
    hover: '#4C4C4C',
    border_light: '#CCCCCC',
    border: '#979797',
    table: '#F2F2F2',
  },
  primary: {
    default: '#004997',
    dark: '#002f61',
    light: '#91ADCD',
    hover: '#002f61',
  },
  secondary: {
    // green
    default: '#91B57F',
    dark: '#799b68',
    light: '#abd198',
    hover: '#799b68',
  },
  // TODO check if this colors for whole app
  newGray: {
    default: 'rgba(0, 0, 0, 0.7)',
    hover: 'rgba(0, 0, 0, 0.3)',
  },
};

// Fonts
export const fontfamily = {
  sans: "'Open Sans', sans-serif",
  serif: "'Cormorant Garamond', serif",
};

// Font Sizes
export const fontsize = {
  tiny: '10px', // 0.75em / 10px
  small: '12px', // 0.75em / 12px
  reg: '14px', // 0.875em / 14px
  large: '16px', // 1em / 16px
  plus: '18px', // 1.125em / 18px
  tabs: '19px',
  extra: '20px',
  pageTitle: '40px',
};

// Font Sizes
export const fontweight = {
  sansbold: '600',
  sans: '400',
  serifbold: '700',
  serif: '400',
  semibold: '500',
};

export const zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// Margin
export const margin = '2%';
export const elementMargin = '50px';

export const drawerSelectedBorderWidth = 8;
export const drawerItemVerticalPadding = 12;
export const drawerListPadding = 20;
export const drawerWidth = 240;
export const drawerWidthClose = 60;
export const drawerIconColor = color.gray.hover;
export const muiListItemGutterPadding = 16;

export const card = {
  width: '300px',
  mobileWidth: '299px',
  radius: '2px',
  contentPadding: '15px',
  mediaWidth: '100px',
  mediaHeight: '100px',
  mediaMobileWidth: '80px',
  mediaMobileHeight: '80px',
  shadow: '0px 0px 0px 1px rgba(0,0,0,0.2)',
};

export const dropDown = {
  shadow: '1px 2px 30px 0 rgba(0, 0, 0, 0.25)',
};

export const letterSpacing = {
  title: '.2em',
  regular: '.6px',
  sectionTitle: '2.8px',
};

export const MainNavTabHeight = 44;
export const PreviewHeaderHeight = 62;
export const TopSearchBarHeight = 32;
export const TopSearchBarHeightMobile = 55;

export const sizes = {
  topBarHeight: 44,
  filtersToolbarHeight: 64,
  bulkActionToolbarHeight: 64,
  stickyToolbar: 137,
  listDividerMargin: 16,
  optionsListHeight: 40,
  optionsListMargin: 0,
};

// Elements
export const border = `1px solid ${color.gray.border_light}`;

// successTextHelper

export const successTextHelperStyles = {
  color: color.success,
  position: 'absolute',
  bottom: -20,
};

export const dotElement = {
  content: "'\u00B7'",
  margin: '0 0.5em',
  fontSize: 'inherit',
};

export const cardContentBox = {
  padding: 12,
  flexDirection: 'column',
  alignItems: 'flex-start',
};
