import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import forEach from "lodash/forEach";

import CatalogServices from "../../services/catalog";

import categories from "./categories";

export default {
  namespaced: true,
  
  modules: {
    categories
  },
  
  state: {
    items: []
  },

  getters: {},

  actions: {
    async fetchProduct({ commit, state }) {
      try {
        const opts = {
          params: {
            sort: "-updated_at",
            user_id: 96,
            tags: 2
          }
        };

        const responseProducts = await CatalogServices.getCatalog(opts);
        const productsIncluded = responseProducts.data.included;
        
        commit("ITEMS_RESET");
        
        forEach(responseProducts.data.data, products => {
          const addProducts = {
            id: products.attributes.id,
            imported: products.attributes.imported,
            name: products.attributes.title,
            regular_price: products.attributes.regular_price,
            original_url: products.attributes.original_url,
            image: products.attributes.image,
            sale_price: products.attributes.sale_price,
            supplier_name: isEmpty(products.relationships.supplier) ? null : productsIncluded.relationships[products.relationships.supplier[0].id].attributes.name
          };
          commit("ITEMS_ADD", addProducts);
        });

      } catch (error) {
        console.log("error fetch product", error)
      }
    }
  },

  mutations: {
    ITEMS_RESET: state => {
      state.items = [];
    },

    ITEMS_ADD(state, product) {
      const duplicated = find(state.items, item => {
        return item.id === product.id;
      });
      if (isEmpty(duplicated)) state.items.push(product);
    }
  }
};
