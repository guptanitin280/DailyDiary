const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const app=express();
const session=require('express-session');
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");