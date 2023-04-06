import express from 'express';
// import { getUserById, getUsers } from './services/Userservice';

const app = express();

// app.get('/users', async (req, res) => {
//   const users = await getUsers();
//   res.json(users);
// });

// app.get('/users/:id', async (req, res) => {
//   const id = Number(req.params.id);
//   const user = await getUserById(id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send('User not found');
//   }
//});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});