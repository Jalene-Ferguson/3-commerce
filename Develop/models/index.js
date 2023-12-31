// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  
  })
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  
  })
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
