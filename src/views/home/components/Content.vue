<template>
    <div class="main frame">
        <div class="module">
            <h3 class="sub-title">厚德服务</h3>
            <div class="row">
                <Service v-for="val in services" :key="val.id" :src1="val.src1" :bottom="val.bottom" />
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '@/components/Service'
    export default {
        name: "Content",
        components: {Service},
        data() {
            return {
                services: [
                    {id: 1, src1: require('assets/images/solution_profile.png'), bottom: '先进的高精度设备'},
                    {id: 2, src1: require('assets/images/solution_profile.png'), bottom: '重视工厂及周边地区的环境保护'},
                    {id: 3, src1: require('assets/images/solution_profile.png'), bottom: '水处理及地坪'}
                    ]
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
        }
    }
}
</style>