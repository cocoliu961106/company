<template>
    <div>
        <RotationImage :initialSpeed="10"/>
        <Content/>
    </div>
</template>

<script>
    import RotationImage from './components/RotationImage'
    import Content from './components/Content'

    export default {
        name: "home",
        components: {RotationImage, Content}
    }
</script>

<style scoped>

</style>