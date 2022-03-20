const express = require('express');
const router = express.Router();

const {
  getAllData,
  createData,
  getOneItem,
  updateData,
  deleteData,
} = require('../controllers/product');

router.route('/').get(getAllData).post(createData);
router.route('/:id').get(getOneItem).post(updateData).delete(deleteData);

module.exports = router;
