const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});


router.get('/home', (req, res) => {
    res.render('dashboard');
});

router.get('/dynamic-rows-cols', (req, res) => {
    res.sendFile('index.html', {
        root: '../all_project_merged/apps/chess_board_pattern'
    })
})

router.get('/kuku-kube', (req, res) => {
    res.sendFile('index.html', {
        root: '../all_project_merged/apps/kuku_kube'
    })
});

router.get('/tic-tac-toe', (req, res) => {
    res.sendFile('index.html', {
        root: '../all_project_merged/apps/tic_tac_toe'
    })
});

router.get('/all-js-events', (req, res) => {
    res.sendFile('index.html', {
        root: '../all_project_merged/apps/all_events_in_js'
    })
});

router.get('/css_1', (req, res) => {
    res.sendFile('index.html', {
        root: '../all_project_merged/apps/css_task_1'
    })
});

router.get('/css_2', (req, res) => {
    res.sendFile('index.html', {
        root: '../all_project_merged/apps/css_task_2'
    })
});

router.get('/css_3', (req, res) => {
    res.sendFile('index.html', {
        root: '../all_project_merged/apps/css_task_3'
    })
});




module.exports = router;