const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const config = require("./config.json");

const uploadImage = async (url: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.config(config);
    cloudinary.uploader
      .upload(url)
      .then((result: any) => {
        fs.unlinkSync(url);
        resolve(result);
      })
      .catch((error: any) => {
        console.log(error);
        reject(error);
      });
  });
};

export default uploadImage;
