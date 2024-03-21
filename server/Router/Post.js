const express = require("express");
const multer = require("multer");
const {Counter} = require("../Model/Counter");
const {Post} = require("../Model/Post");
const router = express.Router();

router.post("/submit", (req, res) => {
    let temp = req.body;
    Counter.findOne({name: "counter"})
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;
            const CommunityPost = new Post(temp);
            CommunityPost.save().then(() => {
                Counter.updateOne({name: "counter"}, {$inc: {postNum: 1}})
                    .then(() => {
                            res.status(200).json({success: true});
                        }
                    );
            });
        })
        .catch((err) => {
            res.status(400).json({success: false});
        });
});

router.post("/list", (req, res) => {
    Post.find().exec().then((doc) => {
        res.status(200).json({success: true, postList: doc});
    }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/detail", (req, res) => {
    Post.findOne({postNum:Number(req.body.postNum)})
        .exec()
        .then((doc) => {
            console.log(doc);
            res.status(200).json({success: true, post: doc});
        }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/edit", (req, res) => {
    let temp = {
        title: req.body.title,
        content:req.body.content,
        image:req.body.image,
    };
    Post.updateOne({postNum:Number(req.body.postNum)}, {$set: temp})
        .exec()
        .then(() => {
            res.status(200).json({success: true});
        }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/delete", (req, res) => {
    Post.deleteOne({postNum:Number(req.body.postNum)})
        .exec()
        .then(() => {
            console.log();
            res.status(200).json({success: true});
        }).catch((err) => {
        res.status(400).json({success: false});
    });
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname)
    }
})

const upload = multer({ storage: storage }).array("files",5);

router.post("/image/upload", (req,res)=>{
    upload(req,res,err => {
        if(err){

            res.status(400).json({success:false});
        }else{
            console.log(req.files);
            const filePaths = req.files.map(file => file.path);
            res.status(200).json({success:true, filePaths});
        }
    })
})

module.exports = router;