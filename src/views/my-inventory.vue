<template>
<div class="body">
    <inSearch/>
    <inTitle/>
    <div class="in-top"></div>
    <inItem v-for="(item,index) in inData" :key="index" :inItem="item"/>
    <Bottom/>
    <Btn/>
</div>
</template>
<script>
import inSearch from '../components/inventory/inventory-search'
import inTitle from '../components/inventory/inventory-title'
import inItem from '../components/inventory/inventoty-item'
import Bottom from '../components/tohome2'
import Btn from '../components/inventory/inventory-bottom'
export default {
  data () {
    return {
      inData: [
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000},
        {model: '936139-1', price: 9.3, num: 2000}
      ]
    }
  },
  components: {
    inSearch,
    inTitle,
    inItem,
    Bottom,
    Btn
  },
  created () {
    document.title = '我的库存'
  }
}
</script>
<style>
    .content {
        width: 100%;
        padding: 0 40px;
    }
    .in-top {
        height: 185px;
    }
</style>
