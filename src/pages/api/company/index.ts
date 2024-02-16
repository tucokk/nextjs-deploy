import { useCompanyService } from "@/app/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const service = useCompanyService();
    const results = await service.getAll();

    res.status(200).json(results.map(r => r));
}
