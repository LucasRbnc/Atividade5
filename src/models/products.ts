import mongoose, { ObjectId,Schema, Types } from "mongoose";
import Category from "./category";


const productsSchema = new Schema({
    name:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "O nome é obrigatório"]
    },
    idcategory:{
        type: Types.ObjectId,
        ref: Category,
        required: [true, "A categoria é obrigatória"],
        validate: {
            validator: async function(_id:ObjectId){
                const document = await mongoose.models.Category.findById(_id);
                return !!document;
            },
            message: "A categoria não existe no cadastro"
        }
    }
},{
    toJSON: {
        transform: function(doc,ret,options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
})

const Product = mongoose.model("Products", productsSchema, "products");

export default Product;