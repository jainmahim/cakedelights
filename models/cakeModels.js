const mongoose = require('mongoose')
const cakeSchema = mongoose.Schema({
    name:String,
    img:String,
    size:[],
    price:[],
    index:Number,
},
{
    timestamps:true,
})

const cakeModel = mongoose.model('cakes',cakeSchema);

module.exports=cakeModel