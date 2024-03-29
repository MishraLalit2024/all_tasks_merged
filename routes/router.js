const express = require('express');
const auth = require('../middlewares/login/authorization')
const router = express.Router();


router.get('/home', auth.authorization, (req, res)=>{
    res.render('home');
})

router.get('/dynamic-rows-cols', auth.authorization, (req, res) => {
    res.sendFile('index.html', {
        root: '../all_tasks_merged/apps/chess_board_pattern'
    })
})

router.get('/kuku-kube', auth.authorization, (req, res) => {
    res.sendFile('index.html', {
        root: '../all_tasks_merged/apps/kuku_kube'
    })
});

router.get('/tic-tac-toe', auth.authorization, (req, res) => {
    res.sendFile('index.html', {
        root: '../all_tasks_merged/apps/tic_tac_toe'
    })
});

router.get('/all-js-events', auth.authorization, (req, res) => {
    res.sendFile('index.html', {
        root: '../all_tasks_merged/apps/all_events_in_js'
    })
});

router.get('/css_1', auth.authorization, (req, res) => {
    res.sendFile('index.html', {
        root: '../all_tasks_merged/apps/css_task_1'
    })
});

router.get('/css_2', auth.authorization, (req, res) => {
    res.sendFile('index.html', {
        root: '../all_tasks_merged/apps/css_task_2'
    })
});

router.get('/css_3', auth.authorization, (req, res) => {
    res.sendFile('index.html', {
        root: '../all_tasks_merged/apps/css_task_3'
    })
});




module.exports = router;