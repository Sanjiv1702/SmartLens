# Backend (Express)

Create a `.env` file in this folder with:

```
PORT=4000
MONGO_URI=mongodb://mongo:27017/smartfinance
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRY=7d
BCRYPT_SALT_ROUNDS=10
```

Install and run:

```
cd backend
npm install
npm run dev
```

Seed demo data:

```
node src/seed.js
```
