<template>
    <div class="main frame">
        <div class="module">
            <h3 class="sub-title">厚德服务</h3>
            <div class="row">
                <div class="col frame1" :style="{backgroundImage: `url(${src1})`}"></div>
                <div class="col frame1"></div>
                <div class="col frame1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    const src1 = require('assets/images/solution_profile.png')
    export default {
        name: "Content",
        data() {
            return {
                src1: src1
            }
        }
    }
</script>

<style lang="stylus" scoped>
.main {
    width: 90%;
    margin: 0 auto;
    .module {
        .sub-title {
            margin-top: 30px;
            padding-left: 15px
            color: deepskyblue
            font-size: 1.5em
            text-align: left
            font-weight: bold
            border-left: 4px solid deepskyblue;
        }
        .row {
            display: flex
            justify-content: space-between
            .col {
                height: 350px;
                padding: 0 5px;
                flex: auto
            }
        }
    }
}
</style>