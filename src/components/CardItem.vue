<template>
  <div>
    <article
      class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
    >
      <a
        id="hotProduct"
        class="f6 link dim br1 ph3 pv2 mb2 dib white bg-hot-pink global-overlay"
        href="#0"
      >
        Hot Product
      </a>
      <a
        id="pushReady"
        class="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib light-purple global-overlay"
        href="#0"
      >
        Ready to push
      </a>
      <img
        src="http://placekitten.com/g/600/300"
        class="db w-100 br2 br--top"
        alt="Photo of a kitten looking menacing."
      />
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0">Rp. 250.000,-</h1>
          </div>
          <div class="dtc tr">
            <h2 class="f5 mv0"></h2>
          </div>
        </div>
        <p class="f6 lh-copy measure mt2 mid-gray">
          <a
            class="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib light-purple"
            href="#0"
          >
            Wholesale
          </a>
          Bengal Cat
        </p>
        <hr class="mw3 bb bw1 b--black-10"/>
        <div class="flex items-center mb2">
          <input
            class="mr2"
            type="checkbox"
            id="spacejam"
            disabled
            value="spacejam"
          />
          <label for="spacejam" class="lh-copy">
            <p>
                Seller name should be here
            </p>
          </label>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "card-item",
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style>
.global-overlay {
  position: absolute;
  z-index: 9999;
}

#hotProduct {
  left: 550px;
  top: 50px;
}

#pushReady {
  left: 550px;
  top: 120px;
}
</style>

