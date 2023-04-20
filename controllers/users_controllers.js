const User = require('../models/user');



module.exports.profile = async function(req , res){
  if (req.cookies.user_id){
    const user = await User.findById(req.cookies.user_id)
      if (user){
        return res.render('user_profile', {
          title: "user profile",
          user: user
        })
      }
    
  else{
    return res.redirect('/users/sign-in');
  }
}

    // return res.end( 'user_profile', {
    //   title: 'User Profile'
    // })
}
// render the sign up page
module.exports.signUp  = function(req , res){
    return res.render('user_sign_up',{
        title: "Codeial \ Sign up"
    })
}
//render the sign in page
module.exports.signIn = function(req , res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}


//render the forgot page
module.exports.forgot = function(req , res){
    return res.render('forgot_pass',{
        title: "Codeial| Forgot password"
    })
}
// get the sign up data
module.exports.create = async function(req ,res){

    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    const data = await User.findOne({email :req.body.email})
    console.log(data)
    if(data){
        console.log('User already exsists please login to continue')
    }
    if(!data){
        const {email, name, password} = req.body
        try {
            await User.create({email, name, password} )
            return res.redirect('/users/sign-in')
        } catch (error) {
            console.log(error.message)
            
        }
    }
}

//get the sign in data

      module.exports.createSession = async function(req, res) {
        const user = await User.findOne({ email: req.body.email })
        try {
          if(!user || user.password !== req.body.password){
            return res.redirect('back');
          }
          res.cookie('user_id', user._id);
              return res.redirect('/users/profile');
        } catch (error) {
          console.log('error in finding user in signing in', error);
            return res.redirect('back')
        }
       


      };

      