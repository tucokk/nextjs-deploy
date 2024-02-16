import { useCompanyService } from "@/app/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const service = useCompanyService();
    const id = req.query.id as string | undefined;

    if (id && !isNaN(parseInt(id))) {
        const results = await service.getById(parseInt(id));
        res.status(200).json(results.map(r => r));
    } else {
        res.status(404).json({ error: "The ID must be an integer value" });
    }

    
}