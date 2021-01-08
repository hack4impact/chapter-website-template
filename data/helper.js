// converts "Timothy Ko" to "/images/people/timothy_ko.jpg"
const ImagePathConversion = (name) => `/images/people/${name.toLowerCase().replace(/ /g, '_')}.jpg`;

export { ImagePathConversion };
