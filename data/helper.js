// converts "Timothy Ko" to "/static/images/people/timothy_ko.jpg"
const ImagePathConversion = name =>
  `/static/images/people/${name.toLowerCase().replace(/ /g, "_")}.jpg`;

export { ImagePathConversion };
