<template>
    <header class="one">
        <div class="logo">
            <div class="nav-title">Hold</div>
        </div>
        <div class="container">
            <ul class="t-nav">
                <li v-for="title in titles" :key="title.name">
                    <router-link :to="title.path">
                        {{title.name}}
                    </router-link>
                </li>
            </ul>

        </div>

    </header>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                titles: [
                    {name: 'home', path: '/home'},
                    {name: 'About', path: '/about'}
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .one {
        position: fixed
        top: 0
        left: 0
        right: 0
        width: 100%
        background: rgba(0, 0, 0, 0.6)
        .logo {
            float: left
            width: 10%
            height: 96px
            .nav-title {
                line-height: 96px
                font-size: 3em
                font-style: italic
                font-weight: bold
                word-break: break-all
                color: deepskyblue
            }
        }
        .container {
            height: 96px;
            width: 80%
            margin: 0 auto
            vertical-align: middle
            .t-nav {
                display: flex
                justify-content: center
                margin-right: 0
                li {
                    width: 10%;
                    min-width: 75px;
                    max-width: 100px;
                    list-style: none;
                    line-height: 96px;
                    padding: 0 20px;
                    a {
                        display: block
                        color: #fff
                        text-decoration: none
                        &:hover {
                            background: #fff
                            color: crimson
                        }
                    }
                }
            }
        }
    }

</style>