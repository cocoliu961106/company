<template>
    <div class="col frame1" :style="{backgroundImage: `url(${src1})`}">
        <div class="bottom">
            {{bottom}}
        </div>
    </div>
</template>

<script>

    export default {
        name: "Service",
        props: {
            'src1': String,
            'bottom': String
        },
        data() {
            return {
            }
        },
        methods: {

        }
    }
</script>

<style lang="stylus" scoped>
    .col {
        position: relative
        height: 350px;
        padding: 0 5px;
        flex: 1;
        background-size: cover;
    .bottom {
        position: absolute
        flex: auto;
        height: 30px;
        width: 100%;
        bottom: 0;
        background-color: azure
        font-size: 20px;
        line-height: 30px;
        font-family: "STFangsong"
    }
    }
</style>