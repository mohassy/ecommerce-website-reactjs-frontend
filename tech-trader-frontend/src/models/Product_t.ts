type Product = {
    id: bigint;
    title: string;
    img: string;
    type: string;
    price: number;
    stock: bigint;
    conditions: string[];
    colors: string[];
    specs: [string, string, string];
    color: string;
    condition: string;
    quantity: number;
}
export const initialProduct: Product = {
    id: BigInt(1),
    title: 'Product Title',
    img: 'product-image.jpg',
    type: 'Product Type',
    price: 9.99,
    stock: BigInt(100),
    conditions: ['Condition 1', 'Condition 2'],
    colors: ['Color 1', 'Color 2'],
    specs: ['Spec 1', 'Spec 2', 'Spec 3'],
    color: 'Product Color',
    condition: 'Product Condition',
    quantity: 1,
};

export default Product;