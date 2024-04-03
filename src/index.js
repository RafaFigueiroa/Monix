import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mjcgotoicfvpzwfhbvuy.supabase.co', process.env.API_KEY)

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: req.body.email,
        password: req.body.password,
      })

    return res.send('usuario logado com sucesso');
});

app.post('/users', async (req, res) => {
    const { data, error } = await supabase.auth.signUp({
        email: req.body.email,
        password: req.body.password,
    })

    return res.send("usuario registrado com sucesso")
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);