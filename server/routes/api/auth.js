const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")

const Data = require("../../models/Data")



module.exports=router