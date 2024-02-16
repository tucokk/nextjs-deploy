import { Product } from "@/app/models";
import { useProductService } from "@/app/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const method = req.method

    switch(method) {
        case "POST":
            post(req, res)
            break;
        case "GET":
            get(req, res)
            break;
    }
}

const post = async (req: NextApiRequest, res: NextApiResponse) => {

    const service = useProductService();
    const product: Product = req.body;

    try {
        service.save(product);
        res.status(200).send("");
    } catch(e) {
        res.status(400).json({error: "An error occurred during the proccess."})
    }
    
}

const get = async (req: NextApiRequest, res: NextApiResponse) => {
    const service = useProductService();
    const results = await service.getAll();
    res.status(200).json(results.map(r => r))
}