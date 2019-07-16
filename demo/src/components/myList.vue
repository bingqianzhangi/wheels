<template>
    <div>
        <ul v-for="(item, index) in list" :key="index">
            <p>{{index}}</p>
            <li v-for="(value) in item" :key="value.MasterID">
                <img :src="value.CoverPhoto" :alt="value.Name">
                <span>{{value.Name}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        list: {
            type: Object,
            value: {}
        }
    }
})
</script>


<style lang="scss" scoped>

</style>
