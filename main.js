const options = {
    bottom: '90%', // default: '32px'
    right: '20px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: 'fff',  // default: '#fff'
    buttonColorDark: '#000000',  // default: '#100f2c'
    buttonColorLight: '#FFFAF0', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌙', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
