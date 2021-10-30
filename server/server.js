const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const app = express()

const auth = require("./routes/api/auth")

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//Bodyparser Middleware
app.use(bodyParser.json())

// DB Config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    process.env.MONGODB_URI || db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize())

// Passport config
require("./config/passport")(passport)

// Routes
app.use("/api/auth", auth)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server up and running on port ${port} !`)
})

