import CatalogService from "../../services/catalog";

const storage = window.localStorage;

export default {
  state: {
    categories: [],
    loadedSubcategories: [],
    subCategories: [],
    selectedCategory: {}
  },

  getters: {
    getUserData() {
      return JSON.parse(storage.getItem("user_data"));
    }
  },

  actions: {
    async getCategories({ getters }) {
      const userData = getters.userData;
      const categories = [];
      const included = [];

      const responseCategories = await CatalogService.getCategories();

      console.log(responseCategories);
    }
  },

  commit: {}
};
