const products=[
    { id: 1, title: 'gpu', quantity: 2},
    { id: 2, title: 'cpu', quantity: 12},
    { id: 3, title: 'ram', quantity: 200}

]

export default class ProductService{
    list(){
        return products
    }
}
export const productService = new ProductService()