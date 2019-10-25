import BaseServices from "./baseServices";

class ProductServices extends BaseServices {
  async getProduct(opts = {}) {
    this.endPoint = "/api/v2/my-products?include=images,variations,platforms,attributes,setting,wholesale_prices&sort=-created_at";
    return this.get(opts);
  }
}

export default new ProductServices();
