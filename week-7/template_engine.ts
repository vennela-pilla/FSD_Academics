const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req: any, res: any) => {
    res.render('index', {
        title: 'User Registration',
        error: null,
        user: null
    });
});

app.post('/register', (req: any, res: any) => {
    const { username, age } = req.body;

    let errorMessage: string | null = null;

    if (!username || username.trim().length < 3) {
        errorMessage = 'Username must be at least 3 characters long.';
    }

    const parsedAge = parseInt(age, 10);

    if (!age || isNaN(parsedAge) || parsedAge < 0) {
        errorMessage = 'Please enter a valid age.';
    }

    if (errorMessage) {
        res.render('index', {
            title: 'User Registration',
            error: errorMessage,
            user: null
        });
    } else {
        res.render('index', {
            title: 'User Registration',
            error: null,
            user: username
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
