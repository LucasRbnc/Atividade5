import { Request, Response } from "express";
import Product from "../models/products";

class ProductController{
    public async create(req:Request, res:Response){
        const {idcategory,name} = req.body;
        try{
            const response = await Product.create({idcategory,name});
            res.send(response);
        } catch( error){
            console.error("Erro")
        }
    }

    public async list(req: Request, res:Response){
        res.send( await Product.find(
            {},
            {},
            { sort:{name :1}}
            ))
    }

    public async delete(req: Request, res:Response){
        const {id} = req.body;
        try{
            const response = await Product.findByIdAndDelete(id);
            res.send(response);
        } catch( error ){
            console.error("Erro")
        }
    }

    public async update(req: Request, res:Response){
        const { id, name, idcategory} = req.body;
        try{
            const response = await Product.findByIdAndUpdate(
                id,
                { name },
                {
                    new: true,
                    runValidators: true
                })
            const resposta = await Product.find();
            res.send(resposta);    
        } catch(error){
            console.error("Erro", error);
            res.status(500).send("Erro ao atualizar o produto.")
        }
    }
}

export default new ProductController;