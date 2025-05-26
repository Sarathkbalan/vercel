const MetaData =require("../MetaData.json")

module.exports=(req,res)=>{
        const{id}=req.query;
        res.json(Json.parse(JSON.stringify(MetaData[id])))
}