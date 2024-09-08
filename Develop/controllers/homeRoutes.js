const router = require('express').Router();  
const {User, Comments, Post} = require('../models'); //nodeJS will automatically look for the index file
const withAuth = require('../util/auth');

