import Post from './Post'
// import json from './assets/json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo.png'


const post = new Post ('Webpack Post Title', WebpackLogo)

console.log('Post to string:', post.toString());

// console.log("JSON", json);
// console.log("XML", xml);
// console.log("CSV", csv);

