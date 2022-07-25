const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

const config = require("./config.json");

const uploadImageToCloud = async (url: any, filename: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.config(config);

    cloudinary.uploader
      .upload(path.join(__dirname, `/uploadProfile/${filename}`))
      .then((result: any) => {
        // console.log(__dirname);
        fs.unlinkSync(path.join(__dirname, `/uploadProfile/${filename}`));
        resolve(result);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};

export default uploadImageToCloud;
