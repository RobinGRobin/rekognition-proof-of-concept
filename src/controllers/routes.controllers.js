import AWS from "aws-sdk";
import fs from 'fs';

const rekognition = new AWS.Rekognition({
    region: "us-east-2"
});

// Using S3 Bucket
export const detectBucketFace = async (req, res) => {
    await rekognition.detectFaces({
        Image:{
            S3Object: {
                Bucket: "face-detect-photos",
                Name: "face5.png"
            }
        },
        Attributes: ['ALL']
    },
    function(err, data){
        if(err){
            console.log(err, err.stack);
        }else{
            console.log(data.FaceDetails[0].Emotions);
            res.send(data.FaceDetails[0].Emotions);
        }
    })
}

// Using base64 data
export const detectBucketFaceBase64 = async (req, res) => {
    await rekognition.detectFaces({
        Image:{
            Bytes: fs.readFileSync(req.file.path)
        },
        Attributes: ['ALL']
    },
    function(err, data){
        if(err){
            console.log(err, err.stack);
        }else{
            console.log(data.FaceDetails[0].Emotions);
            res.send(data.FaceDetails[0].Emotions);
        }
    })
}

