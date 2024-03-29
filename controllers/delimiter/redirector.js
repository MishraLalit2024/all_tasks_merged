/**
 * Developer Name:  Lalit Mishra
 * Developer ID:    24DEV018
 * Date:            05-MAR-2024
 * 
 * Description: This file contains the fuction to redirect the user if invalid url is entered.
 */

function homeRedirector(req, res, next){
    res.redirect(302, '/home');
}

module.exports = homeRedirector;