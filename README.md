step 1: First we installed express, nodemon, dotenv, mongoose, cookie-parser (authentication ke liye), jsonwebtoken, nodemailer (mails bhejne ke liye), otp-generator and bcrypt (hashing password).

step 2: config ke andar database naamka folder banayenge, and usme mongoose ka instance laayenge
environment confis se chizo ko load krke db connection setup kar lenge

step3.1: Then we'll create models
User ka model create krenge
Model create krne ke liye 2 chiz chahiye - model ka naam and schema.
mongoose ka instance create krenge and the mongoose ka schema banayenge,
step3.2: Then we'll create Profile ka model
step3.3: Course Progress ka model
step3.4: Subsection
step3.5: Section
step3.6: Course
step3.6: RatingAndReview
step3.7: tags
step3.8: OTP

step4: 
User -> data enter -> mail aaye OTP ka -> OTP enter -> SUBMIT (if correct) -> db entry create

pre save,
utils naamke folder me isko as a funt pass krenge
isme transporter banayenge
Schema ke baad and Model ke pehle ye function ko dalna h
OTP ke model me jake is function create krenge jo email send krega

step5:
Controllers
Auth
    //signup
    //login

ResetPassword
    
                Model
-----------------------------------------
|                                       |
|   User                                |
|   Profile                             |
|   Section                             |
|   Subsection                          |
|   Course Progress                     |
|   Course                              |
|   tag                                 |
|   OTP                                 |
|   Rating and Review                   |              
|                                       |
-----------------------------------------

step 6:
Auth me OTP ka feature implement