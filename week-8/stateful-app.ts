const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.set('view Engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

const authMiddleware = (req: any, res: any, next: any) => {
    if (req.session.isLoggedIn) {
        next();
    }else{
        res.redirect('/login');        
    }
};

app.get('/login', (req: any, res: any) => {
    res.render('login', {
        error: null
    });
});

app.post('/login', (req: any, res: any) => {
    const { username, password } = req.body;
    
    // Simple authentication logic (replace with your actual authentication logic)
    if (username === 'admin' && password === 'password') {
        req.session.isLoggedIn = true;
        req.session.user = { username };
        res.cookie('lastVisit', new Date().toLocaleTimeString());
        res.redirect('/dashboard');
    } else {
        res.render('login', {
            error: 'Invalid username or password'
        });
    }
});

app.get('/dashboard', authMiddleware, (req: any, res: any) => {
    const lastVisit = req.cookies.lastVisit ||'First time!';
    res.render('dashboard', { user:req.session.username,
        lastVisit: lastVisit });
});

app.get('/logout', (req: any, res: any) => {
    req.session.destroy(() => {
        res.clearCookie('lastVisit');
        res.redirect('/login');
    });
});

app.listen(3000,()=>console.log('Server is running on http://localhost:3000'));