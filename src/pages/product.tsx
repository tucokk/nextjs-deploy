import Button from "@/app/components/Button";
import Fieldset from "@/app/components/Fieldset";
import TextField from "@/app/components/TextField";
import { Product } from "@/app/models";
import { Loader2, Save } from "lucide-react";
import { useEffect, useState } from "react";

export default function Product() {

    const [loading, setLoading] = useState<boolean>(false);
    const [items, setItems] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: '', 
        price: 0, 
        amount: 0
    });

    const handleSubmit = async () => {

        setLoading(true);

        await fetch('/api/product', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(product)
        });

        setLoading(false);
    };

    const load = async () => {
        const response = await fetch('/api/product');
        const data = await response.json();

        setItems(data);
    }

    load();

    return (
        <>
        <Fieldset label="Amazon">
                <div className="flex flex-col my-2 gap-2">
                    <span>Product Name:</span>
                    <TextField 
                        value={product.name} 
                        placeholder="Name" 
                        onChange={e => setProduct({...product, name: e.target.value})}
                    />
                    <span>Price:</span>
                    <TextField 
                        number 
                        value={String(product.price)} 
                        placeholder="Price" 
                        onChange={e => setProduct({...product, price: parseInt(e.target.value)})}
                    />
                    <span>Amount:</span>
                    <TextField 
                        number
                        value={String(product.amount)} 
                        placeholder="Amount" 
                        onChange={e => setProduct({...product, amount: parseInt(e.target.value)})}
                    />
                </div>
                <div className="flex flex-row gap-2 max-w-36 h-8 my-5">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2 w-24 h-8">
                            <Button onClick={handleSubmit}>
                                <span>
                                    {!loading ? (
                                        <Save width={15} height={15} />
                                    ) : (
                                        <Loader2 className="animate-spin" width={15} height={15}/>
                                    )}
                                </span>
                                <span>Salvar</span>
                            </Button>                 
                        </div>
                    </div>
                </div>
            </Fieldset>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Amount</td>
                </tr>
                {
                    items.map(e => {
                        return (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.amount}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
            
    )
}