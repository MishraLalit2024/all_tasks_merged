/**
 * Developer Name:  Lalit Mishra
 * Date:            28-Feb-2024
 * 
 * Description:     This file contains the express routes, database configs and all the needed queries.
 */

const { attendanceHome, reportMaker } = require("../../controllers/attendance_report/attendance");
const { authorization } = require('../../middlewares/login/authorization');
const express = require('express');
const attendance_router = express.Router();



attendance_router.get('/attendance-home',authorization, attendanceHome)

attendance_router.get('/attendance-report', authorization, reportMaker);



module.exports = attendance_router;