import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    pinterestLink: string;
    title: string;
    amazonLink: string;
    description: string;
    imageUrl: string;
    isFeatured: boolean;
    category: string;
}
export interface backendInterface {
    addProduct(title: string, description: string, imageUrl: string, amazonLink: string, pinterestLink: string, category: string, isFeatured: boolean): Promise<void>;
    getAllProducts(): Promise<Array<Product>>;
    getFeaturedProducts(): Promise<Array<Product>>;
    getProduct(title: string): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
}
