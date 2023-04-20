module.exports.home = function(req, res){
    // for gettting the cookies from the browser
    // console.log(req.cookies);
    //for showing on the browser
    // res.cookie('user_id', 25);
    return res.render('home', {
        title: 'Home'
    });
}