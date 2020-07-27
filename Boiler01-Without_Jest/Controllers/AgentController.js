const dummyAPi = async (req,res) => {
    
    console.log(req.query)
    console.log(req.body)
    return res.status(200).json({
        "status": 200,
        "message": "Agents substrings Received",
        "data": { subStrings: "success" }
    });
}


module.exports = {
    dummyAPi: dummyAPi,

}