/**
 * Developer Name:  Lalit Mishra
 * Date:            28-Feb-2024
 * 
 * Description:     This file contains the express routes, database configs and all the needed queries.
 */

const { attendanceHome, reportMaker } = require("../../controllers/attendance_report/attendance");
const express = require('express');
const attendance_router = express.Router();

attendance_router.get('/attendance-home', attendanceHome)


attendance_router.get('/attendance-report', reportMaker);


module.exports = attendance_router;