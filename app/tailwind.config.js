module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'asagao-device-zoom': "url('/images/device/zoom.png')",
        'logo': "url('/images/logo/asagao/bg_logo.svg')"
      }),
      listStyleType: {
        square: 'square',
      },
      colors: {
        default: '#333333',
        'asagao-lightest': '#d3edfb',
        'asagao-light': '#7ecef4',
        asagao: '#00b9ef',
        'asagao-dark1': '#009de1',
        'asagao-dark2': '#008dbd',
        'asagao-darkest': '#1e3564',
        'sanzaka-light': '#ef8eb8',
        sanzaka: '#ea6092',
        'sanzaka-dark': '#e9546f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
