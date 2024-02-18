<template>
    <div class="exchange-balance">
        <div class="exchange-balance__course">
            1 {{gavedCurrency}} =  {{course}} {{receivedCurrency}}
        </div>   
        <div class="exchange-balance__total">
            Резерв {{balance}} {{receivedCurrency}}
        </div>     
    </div>   
</template>


<script>
export default {
  name: "exchange-balance",
  props : ['course', 'balance', 'gavedCurrency', 'receivedCurrency']
}
</script>

<style lang="scss">
    .exchange-balance {
      display:flex;
      justify-content: center;
      width:100%;
      padding:50px 0 ;
    }

    .exchange-balance__course{
        width:100%
    }

    .exchange-balance__total {
        width:100%
    }
</style>
