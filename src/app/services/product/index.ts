import { Product } from "@/app/models";
import { sql } from "@vercel/postgres";

export function useProductService() {
    const save = async (product: Product) => {
        sql`
        INSERT INTO products
            (name, price, amount)
        VALUES
            (
                ${product.name},
                ${product.price},
                ${product.amount}
            );
        `;
    };

    const getbyId = async (id: number) => {
        const { rows } = await sql`
        SELECT 
            * 
        FROM products
        WHERE 1=1
            AND id = ${id}`;
        return rows;
    }

    const getAll = async () => {
        const { rows } = await sql`
        SELECT 
            * 
        FROM products
        WHERE 1=1;`;
        return rows;
    }

    return {
        save,
        getAll,
        getbyId
    }
}