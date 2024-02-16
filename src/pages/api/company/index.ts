import { companyService } from "@/app/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const service = companyService();
    const results = await service.getAll();

    res.status(200).json(results.map(r => r));
}
