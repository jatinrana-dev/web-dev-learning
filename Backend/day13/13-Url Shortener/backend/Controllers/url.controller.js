const urlModel = require('../Models/url.model');
const generateCode = require('../utils/generateCode');
const mongoose = require('mongoose');


const urlController = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ message: 'Please enter a URL' });
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return res.status(400).json({ message: 'Please enter a valid URL' });
    }
    if(url.length > 2048){
        return res.status(400).json({ message: 'URL is too long' });
    }
try {
    const code = generateCode();
    const newUrl =  await  urlModel.create({
        orginalUrl: url,
        shortCode: code,

    });
    res.status(201).json({
        message: 'URL shortened successfully',
        data: {
            orginalUrl: newUrl.orginalUrl,
            shortCode: newUrl.shortCode,
         
        }
    })
}
catch (error) {
    console.log("Error while shortening url", error.message);
    res.status(500).json({ message: 'Internal server error' });
    
}
}
 const getAllUrlController = async (req, res) => {
    const urls = await urlModel.find();
    res.status(200).json({
        message: 'Urls fetched successfully',
        data: urls
    })


 }


 const getUrlController = async (req, res) => {
    try {
        const { code } = req.params;
        const url = await urlModel.findOne({ shortCode: code });

        if (!url) {
            return res.status(404).json({ message: 'URL not found' });
        }

        return res.redirect(302, url.orginalUrl);
    } catch (error) {
        console.log("Error while redirecting", error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
};







module.exports = {urlController,getAllUrlController,getUrlController}
