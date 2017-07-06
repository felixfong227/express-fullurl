module.exports = function(req){
    if(req){
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        return fullUrl;
    }else{
        throw new Error('Please pass in the req(request) object');
    }
}