// const shortid = require("shortid");
// const fs = require("fs/promises");
// const path = require("path");

// const productsPath = path.join(__dirname, "./products.json");

// async function getAllProducts() {
//   const data = await fs.readFile(productsPath);
//   const products = JSON.parse(data);
//   return products;
// }

// async function getProductById(productId) {
//   const findId = String(productId);
//   const data = await fs.readFile(productsPath);
//   const productFind = JSON.parse(data).find((product) => product.id === findId);
//   if (!productFind) {
//     return null;
//   }
//   return productFind;
// }

// async function removeProductById(id) {
//   const data = await fs.readFile(productsPath);
//   const products = JSON.parse(data);
//   const idFind = products.findIndex((product) => product.id === id);

//   if (idFind !== -1) {
//     const deleteProduct = products.filter((_, index) => index !== idFind);
//     await fs.writeFile(productsPath, JSON.stringify(deleteProduct));
//   }
//   return products;
// }

// async function addProduct({ title, squirrels, fats, carbohydrates, kcal }) {
//   const data = await fs.readFile(productsPath);
//   const product = JSON.parse(data);
//   const productNew = { id: shortid.generate(), title, squirrels, fats, carbohydrates, kcal };
//   product.push(productNew);
//   await fs.writeFile(productsPath, JSON.stringify(product));
//   return productNew;
// }

// async function updateProductById(id, dataUpdate) {
//   const findId = String(id);
//   console.log(findId);
//   const data = await fs.readFile(productsPath);
//   const products = JSON.parse(data);
//   const idFind = products.findIndex((contact) => contact.id === findId);
//   products[idFind] = { id, ...dataUpdate };
//   await fs.writeFile(productsPath, JSON.stringify(products));
//   if (idFind === -1) {
//     return null;
//   }
//   return products[idFind];
// }

// module.exports = {
//   getAllProducts,
//   addProduct,
//   getProductById,
//   removeProductById,
//   updateProductById,
// };
