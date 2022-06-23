import { BaseAPI } from './baseAPI';

class ProductAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}
	getAllProducts = () => this.get('products');
}

export const productApi = new ProductAPI(process.env.productUrl);
