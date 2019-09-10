import BaseServices from "./baseServices";

class CatalogServices extends BaseServices {
  async getCatalog(opts = {}) {
    this.endPoint = "api/v2/products?include=variations";
    return this.get(opts);
  }

  async getCategories(opts = {}) {
    this.endPoint = "api/v2/categories";
    return this.get(opts);
  }

  async getChildCategories(id, opts = {}) {
    this.endPoint = `api/v2/categories?filter[parent_id][is]=${id}`;
    return this.get(opts);
  }
}

export default new CatalogServices();
