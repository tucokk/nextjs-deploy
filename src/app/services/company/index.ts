import { sql } from '@vercel/postgres';

export function companyService() {
    const getById = async (id: number) => {
        const { rows } = await sql`SELECT * FROM company WHERE 1=1 AND id = ${id};`;
        return rows;
    }

    const getAll = async () => {
        const { rows } = await sql`SELECT * FROM company WHERE 1=1;`;
        return rows;
    }

    return {
        getById,
        getAll
    }
}