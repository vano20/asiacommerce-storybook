<template>
    <div class="shadow w-full bg-grey-light">
        <div class="bg-black text-xs leading-none py-1 text-center" :style="getPerecentage"></div>
    </div>
</template>

<script>
export default {
    name: "progress-bar",
    data () {
        return {
            percentage: 0
        }
    },
    mounted () {
        setInterval(() => {
            // + 10 as step per 2 second
            this.percentage = Math.min(this.percentage + 10, 100)

            // Hide progress bar if 100%
        }, 2000) // -> 2000 ms === 2 second
    },
    computed: {
        getPerecentage () {
            let style = {
                "width": this.percentage + "%"
            }
            return style
        }
    }
}
</script>