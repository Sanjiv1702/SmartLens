require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Transaction = require('./models/Transaction');
mongoose.connect(process.env.MONGO_URI).then(async ()=>{
  await User.deleteMany({}); await Transaction.deleteMany({});
  const u = await User.create({ email: 'test@test.com', password: 'password123', name: 'Demo User' });
  await Transaction.create([ {userId:u._id, amount:1500, category:'Food', type:'expense'}, {userId:u._id, amount:5000, category:'Salary', type:'income'} ]);
  console.log('Seeded demo user: test@test.com / password123');
  process.exit(0);
}).catch(err=>console.error(err));
