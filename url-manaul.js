const widht = 300;
const height = 300;
const url = new URL("https://mememe.io/v1/image");
url.searchParams.set("width", widht);
url.searchParams.set("height", height);
url.toString();

// result: 'https://mememe.io/v1/image?width=300&height=300'
