<template>
    <div class="main frame">
        <div class="module">
            <div class="sub-title"></div>
            <div class="row">
                <div class="col frame1"></div>
                <div class="col frame1"></div>
                <div class="col frame1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style lang="stylus" scoped>
.main {
    width: 90%;
    margin: 0 auto;
    .module {
        .sub-title {
            height: 56px;
            margin-top: 30px;
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