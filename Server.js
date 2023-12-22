const express = require("express")
const app = express();
require("dotenv").config();
require("./Config/Config")
const user = require("./Models/Auth")
app.use(express.json())
const bcrypt = require("bcrypt")

PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log(`App is running at port:${PORT}`)


})


app.post("/signup", async (req, res) => {
    const { firstname, lastname, email, phone, password } = req.body

    if (!firstname || !lastname || !email || !phone || !password) {
        return res.json({ "msg": "All fields are mandatory" })
    }

    const checkUser = await user.findOne({ email });

    if (checkUser) {
        return res.json({ "msg": "User Already registered with this email address" })
    }

    else {

        const hashpassword = await bcrypt.hash(password, 10)
        const createUser = await user.create({
            firstname,
            lastname,
            email,
            phone,
            password:hashpassword
        });

        res.json(createUser)
    }
})


