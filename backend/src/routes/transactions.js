const express = require('express');
const jwt = require('jsonwebtoken');
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const router = express.Router();
const auth = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: 'Unauthorized' });
    const token = header.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id);
    if (!req.user) return res.status(401).json({ message: 'User not found' });
    next();
  } catch (err) { return res.status(401).json({ message: 'Invalid token' }); }
};
router.get('/', auth, async (req, res, next) => {
  try { const txns = await Transaction.find({ userId: req.user._id }).sort({ date: -1 }); res.json(txns); }
  catch(err){ next(err); }
});
router.post('/', auth, async (req, res, next) => {
  try { const doc = await Transaction.create({ ...req.body, userId: req.user._id }); res.json(doc); }
  catch(err){ next(err); }
});
router.put('/:id', auth, async (req, res, next) => {
  try { const doc = await Transaction.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, req.body, { new: true }); res.json(doc); }
  catch(err){ next(err); }
});
router.delete('/:id', auth, async (req, res, next) => {
  try { await Transaction.deleteOne({ _id: req.params.id, userId: req.user._id }); res.json({ ok: true }); }
  catch(err){ next(err); }
});
module.exports = router;
