const express = require("express")
const multer = require("multer")
const fs = require("fs")
const [verifyToken,verifyTokenAdmin] = require("../verification")

const Frontend = require("../models/Frontend")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/frontends')
    },
    fieldSize: 104857600,
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })
const router = express.Router()

router.post("/",verifyTokenAdmin, upload.single("pic"), async (req, res) => {
    try {
        var data = new Frontend(req.body)
        if (req.file)
            data.pic = req.file.filename
        
            await data.save()
        res.send({ result: "Done", message: "Record is Created!!!", data: data })
    }
    catch (error) {
        console.log(error);
        if (error.errors.des)
            res.status(400).send({ result: "Fail", message: error.errors.des.message })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})

router.get("/", async (req, res) => {
    try {
        var data = await Frontend.find().sort({ _id: -1 })
        res.send({ result: "Done", total: data.length, data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})

router.get("/:_id", async (req, res) => {
    try {
        var data = await Frontend.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "No Record Found" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})
router.put("/:_id",verifyTokenAdmin, upload.single("pic"), async (req, res) => {
    try {
        var data = await Frontend.findOne({ _id: req.params._id })
        if (data) {
            data.des = req.body.des ?? data.des
            data.status = req.body.status ?? data.status

            try {
                if (req.file && data.pic) {
                    fs.unlinkSync(`public/frontends/${data.pic}`)
                }
            } catch (error) { }
            if(req.file)
            data.pic = req.file.filename

            
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "No Record Found" })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "Name Must Be Unique" })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})
router.delete("/:_id",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await Frontend.findOne({ _id: req.params._id })
        try {
            fs.unlinkSync(`public/frontends/${data.pic}`)
        } catch (error) { }
        await data.deleteOne()
        res.send({ result: "Done", message: "Record is Deleted!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})

router.post("/search",async(req,res)=>{
    try{
        var data = await Frontend.find({
            $or:[
               {des:{$regex:`.*${req.body.search}.*`,$options:"i"}}
            ]
        })
        res.send({result:"Done",count:data.length,data:data})
    }
    catch(error){
        res.status(500).send({result:"Fail",message:"Internal Server Error!!!"})
    }
})
module.exports = router