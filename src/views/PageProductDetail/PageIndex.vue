<template>
  <div class="product-detail-page">
    <div class="breadcrumb">
      <div class="text-gray-600">
        Recommendation > Recommendation for Reymond > Sneakers
      </div>
    </div>
    
    <div class="w-full shadow flex mx-auto bg-white">
      <div class="flex-none product-image-gallery">
        <div class="w-fulsl">
          <agile class="main" ref="main" :fade="true" :as-nav-for="asNavFor1" :options="options1">
            <div
              class="slide"
              v-for="(slide, idx) in slides"
              :key="idx"
              :class="`slide--${idx}`"
            >
              <img :src="slide" >
            </div>
          </agile>
          <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div
              class="slide slide--thumbnail"
              v-for="(slide, idx) in slides"
              :key="idx"
              :class="`slide--${idx}`"
              @click="$refs.thumbnails.goTo(idx)"
            >
              <img :src="slide">
            </div>
            <template slot="prevButton">
              prv
            </template>
            <template slot="nextButton">
              nxt
            </template>
          </agile>
        </div>
      </div>
      <div class="flex-auto p-4">
        <h1 class="text-xl">Meat meat sauce original mouse pad trumpet cute girl cartoon pad table home writing desk surface desk pad</h1>
        <div class="py-2">
          <badge variant="primary" title="Retail" />
          <badge variant="info">
            Minimum quantity: <strong>1</strong>
          </badge>
        </div>
        <div class="product-summary has-prices">
          <p class="text-gray-500 py-1">Price: <span class="text-gray-700">Rp.435.356,32</span></p>
          <div class="flex-auto product-summary-content flex -ml-2">
            <div class="flex-none mx-2">
              <span class="">< 10 <span class="text-gray-600">pcs</span></span><br>
              <strong class="text-accent-500">Rp.435.356,32</strong>
            </div>
            <div class="flex-none mx-2">
              <span class="">11 - 999 <span class="text-gray-600">pcs</span></span><br>
              <strong class="text-accent-500">Rp.435.356,32</strong>
            </div>
            <div class="flex-none mx-2">
              <span class="">1000 > <span class="text-gray-600">pcs</span></span><br>
              <strong class="text-accent-500">Rp.435.356,32</strong>
            </div>
          </div>
        </div>
        <div class="product-summary lg:hidden">
          <p class="text-gray-500 py-1 uppercase">Info</p>
          <div class="product-summary-content">
            <span class="text-gray-500">
              Weight:
            </span>
            0.6kg
            from 
            <a href="#">Sneaker <dynamic-icon icon="caret-down" /></a>
            rule
            <a href="">
              <dynamic-icon icon="info" />
            </a>
          </div>
        </div>
        <p class="uppercase text-gray-600 pt-3">Product variant</p>
        <div class="product-summary -mt-1">
          <p class="text-gray-500 py-1">Color Spesification: <span class="text-gray-700">Electric Blue</span></p>
          <div class="flex-auto product-summary-content">
            <ul class="inline-block">
              <li>
                <base-button class="has-image">
                  <div class="w-10 h-10">
                    <div class="bg-cover w-full h-full" style="background-image: url('https://placeimg.com/41/41/any')" />
                  </div>
                </base-button>
              </li>
              <li>
                <base-button class="has-image is-chosen">
                  <div class="w-10 h-10">
                    <div class="bg-cover w-full h-full" style="background-image: url('https://placeimg.com/40/40/any')" />
                  </div>
                </base-button>
              </li>
              <li>
                <base-button>
                  Red Velvet
                </base-button>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-summary">
          <p class="text-gray-500 py-1">Size: <span class="text-gray-700">Small</span></p>
          <div class="flex-auto product-summary-content">
            <ul class="inline-block">
              <li>
                <base-button>
                  Small
                </base-button>
              </li>
              <li>
                <base-button>
                  Medium
                </base-button>
              </li>
              <li>
                <base-button>
                  Large
                </base-button>
              </li>
            </ul>
          </div>
        </div>
        <div class="-ml-1 mt-4">
          <base-button class="mx-1" variant="primary" size="large" is-solid @click="toggleSlideBar">add to cart</base-button>
          <base-button class="mx-1" variant="primary" size="large">Push to shop</base-button>
        </div>
      </div>
      <div class="flex-none w-64 p-4 hidden lg:block">
        <div class="border border-info-200 p-3 rounded sticky top-0">
          <h6 class="uppercase text-gray-600">
            Info
          </h6>
          <div class="py-1">
            <p class="text-gray-500">Weight (estimated):</p>
            <p class="font-semibold text-lg">0.68 kg</p>
          </div>
          <div class="py-1">
            <p class="text-gray-500">Category rule:</p>
            <a href="" class="border border-gray-300 rounded-lg cursor-pointer px-2 py-1 flex items-center">
              <p class="flex-auto">
                Sneaker
              </p>
              <div class="flex-none">
                <dynamic-icon icon="pencil" />
              </div>
            </a>
          </div>
          <p class="text-sm text-gray-600 pt-2">These number are estimation of specific product weight (and also its CBM) based on our Category rule due to Custom Charge calculation</p>
        </div>
      </div>
    </div>

    <div class="bg-white shadow my-4 p-4">
      <p class="externalInfo"><table><tbody><tr><td>Listed year season</td><td> : </td><td>Winter of 2018</td></tr><tr><td>package volume</td><td> : </td><td>1</td></tr><tr><td>popular elements</td><td> : </td><td>Cross strap</td></tr><tr><td>Gross weight</td><td> : </td><td>1</td></tr><tr><td>Insole material</td><td> : </td><td>Artificial short plush</td></tr><tr><td>Item number</td><td> : </td><td>1990213</td></tr><tr><td>Style</td><td> : </td><td>Sports shoes</td></tr><tr><td>Brands</td><td> : </td><td>Fuzisha</td></tr><tr><td>Sales channel type</td><td> : </td><td>Pure e-commerce only online sales</td></tr><tr><td>Suitable</td><td> : </td><td>Youth 18-40 years old</td></tr><tr><td>Applicable scene</td><td> : </td><td>motion</td></tr><tr><td>Cortical features</td><td> : </td><td>shave</td></tr><tr><td>Help surface material</td><td> : </td><td>PU</td></tr><tr><td>Inner material</td><td> : </td><td>Artificial short plush</td></tr><tr><td>Closed way</td><td> : </td><td>Lace</td></tr><tr><td>pattern</td><td> : </td><td>Solid color</td></tr><tr><td>Sole material</td><td> : </td><td>Composite bottom</td></tr><tr><td>Opening depth</td><td> : </td><td>Deep mouth</td></tr><tr><td>Color Classification</td><td> : </td><td>White large cotton beige cotton white shoes beige single shoes</td></tr><tr><td>style</td><td> : </td><td>Korean version</td></tr><tr><td>Toe style</td><td> : </td><td>Round head</td></tr><tr><td>Heel height</td><td> : </td><td>Medium with 3-5cm</td></tr><tr><td>With the bottom style</td><td> : </td><td>Muffin bottom</td></tr><tr><td>size</td><td> : </td><td>353637383940</td></tr><tr><td>Shoe making process</td><td> : </td><td>Pressure shoes</td></tr></tbody></table></p>
    </div>

    <!-- <product-detail></product-detail> -->
    <!-- <slide-bar :shown="slideBarState" /> -->


    <div class="bottom-bar sm:hidden fixed inset-x-0 bottom-0 bg-white border-t border-gray-200">
      <div class="flex items-center pl-2">
        <div class="flex-none px-4">
          <p class="text-gray-500">
            Min. qty
          </p>
          <strong>1</strong>
        </div>
        <div class="flex-auto w-full flex items-center">
          <div class="w-1/2">
            <div class="cursor-pointer text-white bg-accent-500 px-2 py-4 text-center">
              <span class="">
                <dynamic-icon icon="eye" />
                Push to store
              </span>
            </div>
          </div>
          <div class="w-1/2">
            <div
              class="cursor-pointer text-white bg-primary-500 px-2 py-4 text-center"
              @click="toggleSlideBar"
            >
              <span class="">
                <dynamic-icon icon="eye" />
                Add to cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ProductDetail from "../../components/products/Productdetail";
import SlideBar from "../../components/slidebar/SlideBar";
import theBadge from "../../components/ui/TheBadge";
import { BaseButton } from "../../components/ui/Buttons";
import DynamicIcon from "../../components/ui/DynamicIcon";
import { VueAgile } from "vue-agile";

import { mapState, mapMutations } from 'vuex'

export default {
  name: "PageProductDetail",
  components: {
    agile: VueAgile,
    badge: theBadge,
    DynamicIcon,
    ProductDetail,
    BaseButton,
    SlideBar
  },
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },
      options2: {
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 1000,
            settings: {
              navButtons: true
            }
          }
        ]
      },
      slides: [
        "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      ]
    };
  },
  computed: {
    ...mapState({
      slideBarState: 'slideBar'
    })
  },
  methods: {
    ...mapMutations({
      toggleSlideBar: 'TOGGLE_SLIDE_BAR'
    })
  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  }
};
</script>

<style lang="css" scoped>
.thumbnails {
  margin: 10px -5px;
  width: calc(100% + 10px);
}

.agile {

    >>> &__nav-button {
    background: transparent;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 24px;
		height: 100%;
		position: absolute;
		top: 0;
		transition-duration: .3s;
		width: 80px;

    .thumbnails & {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &--prev {
        left: -45px;
      }

      &--next {
        right: -45px;
      }
    }

    &:hover {
      color: blue;
    }
  }

  &__dot {
    margin: 0 10px;

    button {
      background-color: #eee;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: .3s;
      width: 10px;
    }

    &--current,
    &:hover {
      button {
        background-color: #888;
      }
    }
  }
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 320px;
  justify-content: center;

  &--thumbnail {
    cursor: pointer;
    height: 66px;
    padding: 0 5px;
    transition: opacity .3s;

    &:hover {
      opacity: .75;
    }
  }

  img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

}


.product-image-gallery {
  @apply p-4;
  width: 360px;
}


.product-summary {
  @apply py-2;

  &.has-prices {
    @apply items-center;
  }

  &-label {
    @apply text-gray-500 w-40;
  }
}


.product-summary-content {

  ul {
    @apply flex items-center -ml-1;

    li {
      @apply inline-flex;

      .btn {
        @apply mx-1;
      }
    }
  }

  .btn.has-image {
    padding: 2px;
  }

}

.is-chosen {
  border-color: theme(colors.primary.500);
  border-width: 2px;

  &.btn.has-image {
    padding: 1px;
  }
}
</style>
