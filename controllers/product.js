const ProductSchema = require('../models/product');

const getAllData = async (req, res) => {
  try {
    const products = await ProductSchema.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createData = async (req, res) => {
  try {
    const product = await ProductSchema.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getOneItem = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductSchema.findOne({ id });

    if (!product) {
      return res.status(404).json({ message: 'Item does not Exist !!!' });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductSchema.findOneAndUpdate({ id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.statusnode(404).json({ messgae: 'No Items with that ID' });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await ProductSchema.findOneAndDelete({ id });

    if (!product) {
      return res.status(404).json({ messgae: 'No Items with that ID' });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllData,
  createData,
  getOneItem,
  updateData,
  deleteData,
};
