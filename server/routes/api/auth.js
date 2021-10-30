const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")

const Data = require("../../models/Data")

//post data objects {email:..., birthYear:...}
router.post('/data', async (req, res) => {
    try {
        const data = new Data(req.body)
        data.save()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ message: err }))
    }
    catch (err) {
        return res.status(500).json({ message: err })
    }
})

//get data objects
router.get('/data', async (req, res) => {
    try {
        const data = await Data.find()
        res.status(200).json(data)
    }
    catch (err) {
        return res.status(500).json({ message: err })
    }
})

router.post('/login', async (req, res) => {
    try {
        const payload = {
            is_logged_in: true
        }

        jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 600 // 10 minutes
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              })
            }
        )
    }
    catch (err) {
        return res.status(500).json({ message: err })
    }
})



module.exports = router