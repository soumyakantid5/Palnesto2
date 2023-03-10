const express = require('express')
const router = express.Router()
const {register,login} = require("../controllers/userController")
const {create,view,edit} = require("../controllers/itineryController")
const {auth} = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);

router.post("/create", create);
router.post("/edit/:id", edit);
router.get("/view/:id", view);


//if api is invalid OR wrong URL
router.all("*", (req, res) =>
    res.status(404).send({
        status: false,
        message: "The api you requested is not available"
    })
)


module.exports = router



//API Key 1Gc7piWDaZuRqoizC9yU4W94jybAR1Gm
//API Secret 3QkZtLIA1cqo8Yjd
//https://developers.amadeus.com/my-apps/Test?userId=soumyakantid6@gmail.com