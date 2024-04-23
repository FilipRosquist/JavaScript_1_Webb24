const txt1 = " Skärmskydd , 499";
const txt2 = "Mobiltelefon, 299, ";
const txt3 = " Telefonfodral, 89, ";
const txt4 = " Laptop, 799";
const txt5 = " Hörlurar , 199 ";

function extractProductAndPrice(txt) {
    const parts = txt.split(",");

    const productName = parts[0].trim().toUpperCase();
    const price = parseInt(parts[1]); 
    if (productName.includes("TELEFON")) {
        console.log(productName);
    }

    return { productName, price };
}

const product1 = extractProductAndPrice(txt1.replace(",", " -"));
const product2 = extractProductAndPrice(txt2.replace(",", " -"));
const product3 = extractProductAndPrice(txt3.replace(",", " -"));
const product4 = extractProductAndPrice(txt4.replace(",", " -"));
const product5 = extractProductAndPrice(txt5.replace(",", " -"));

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);
console.log("Product 4:", product4);
console.log("Product 5:", product5);
