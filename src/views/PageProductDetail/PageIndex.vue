<template>
  <div class="product-detail-page">
    <div class="breadcrumb">
      <div class="text-gray-600">
        Recommendation > Recommendation for Reymond > Sneakers
      </div>
    </div>
    
    <div class="w-full shadow flex mx-auto">
      <div class="flex-none relative">
          <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions"/>
        
      </div>
      <div class="flex-auto">
        <h1 class="text-lg">Meat meat sauce original mouse pad trumpet cute girl cartoon pad table home writing desk surface desk pad</h1>
        <div>
          <span class="badge">
            Retail
          </span>
          <p class="inline-block">Minimum quantity: 1</p>
        </div>
        <div class="flex exposure">
          <label class="flex-none w-32 expousure-label">
            Info
          </label>
          <div class="flex-auto exposure-content">
            Weight: .2kg choose category
          </div>
        </div>
        <div class="flex exposure">
          <label class="flex-none w-32 expousure-label">
            Color classification
          </label>
          <div class="flex-auto exposure-content">
            <ul class="inline-block">
              <li>
                <base-button>
                  Jan
                </base-button>
              </li>
              <li>
                <base-button>
                  cok
                </base-button>
              </li>
              <li>
                <base-button>
                  cik
                </base-button>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex exposure">
          <label class="flex-none w-32 expousure-label">
            Info
          </label>
          <div class="flex-auto exposure-content">
            Weight: .2kg choose category
          </div>
        </div>
      </div>
    </div>

    <product-detail></product-detail>
  </div>
</template>

<script>
import ProductDetail from "../../components/products/Productdetail";
import { BaseButton, ButtonGroup } from "../../components/ui/Buttons";
export default {
name: "PageProductDetail",
components: {
    ProductDetail,
    BaseButton
  },
  data() {
    return {
      images: {
        thumbs: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/2.jpeg"
          },
          {
            id: 3,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/3.jpeg"
          },
          {
            id: 4,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/4.jpeg"
          },
          {
            id: 5,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/5.jpeg"
          },
          {
            id: 6,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/6.jpeg"
          },
          {
            id: 7,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/7.jpeg"
          },
          {
            id: 8,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/8.jpeg"
          },
          {
            id: 9,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/thumbs/9.jpeg"
          }
        ],
        normal_size: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/2.jpeg"
          },
          {
            id: 3,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/3.jpeg"
          },
          {
            id: 4,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/4.jpeg"
          },
          {
            id: 5,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/5.jpeg"
          },
          {
            id: 6,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/6.jpeg"
          },
          {
            id: 7,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/7.jpeg"
          },
          {
            id: 8,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/8.jpeg"
          },
          {
            id: 9,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/normal_size/9.jpeg"
          }
        ],
        large_size: [
          {
            id: 1,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/1.jpeg"
          },
          {
            id: 2,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/2.jpeg"
          },
          {
            id: 3,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/3.jpeg"
          },
          {
            id: 4,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/4.jpeg"
          },
          {
            id: 5,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/5.jpeg"
          },
          {
            id: 6,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/6.jpeg"
          },
          {
            id: 7,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/7.jpeg"
          },
          {
            id: 8,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/8.jpeg"
          },
          {
            id: 9,
            url:
              "https://yoohooworld.com/assets/images/vue_product_zoomer/large_size/9.jpeg"
          }
        ]
      },
      zoomerOptions: {
        zoomFactor: 3,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer-left",
        move_by_click: false,
        scroll_items: 4,
        choosed_thumb_border_color: "#dd2c00",
        scroller_position: "left"
      }
    };
  },
}
</script>

<style>

</style>