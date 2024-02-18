<template>
    <div class="exchange-menu">
        <div class="exchange-menu__logo">
            DLExchanger
        </div>    

        <div class="exchange-menu__check">
            Check ID
        </div>   
    </div>    
</template>


<script>
export default {
    name: 'exchange-menu'
}
</script>

<style lang="scss">
.exchange-menu{
    display:flex;
    justify-content: space-between;
    background:#6c5ce7;
    align-items: center;
    color:#FFFF;
    height: 60px;
    padding: 10px 20px;
}
</style>
