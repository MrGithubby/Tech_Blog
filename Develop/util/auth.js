const withAuth = (req, res, next) => {
    //If the user is not logged in, redrect the request to the login route
    if (!req.session.logged_in){
        reduce.redirect('/login');
    } else {
        next(); //next middleware function
    }
};

module.exports = withAuth;