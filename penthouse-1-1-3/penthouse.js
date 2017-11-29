const penthouse = require('penthouse');
const fs = require('fs');

penthouse({
    //url: 'http://google.com',
    url: 'file:///E:/Users/giovanni.mendes/Desktop/LABS/penthouse-diff/penthouse-1-1-3/base.index.html', // replace to your local file
    css: 'css/all.css',

    // OPTIONAL params
    width: 400,                    // viewport width
    height: 700,                    // viewport height
    keepLargerMediaQueries: false,  // when true, will not filter out larger media queries
    forceInclude: [ // selectors to keep
      '.keepMeEvenIfNotSeenInDom',
      /^\.regexWorksToo/
    ],
    timeout: 30000,                 // ms; abort critical CSS generation after this timeout
    blockJSRequests: true,          // set to false to load (external) JS (default: true)
	screenshots: {
      // turned off by default
      basePath: 'homepage', // absolute or relative; excluding file extension
      type: 'jpeg', // jpeg or png, png default
      quality: 20 // only applies for jpeg type
    }
})
.then(criticalCss => {
	//console.log('criticalCss', criticalCss);
    // use the critical css
    fs.writeFileSync('outfile-pent.css', criticalCss);
})
.catch(err => {
    // handle the error
	console.log('err', err);
})