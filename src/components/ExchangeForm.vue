<template>
    <div class="exchange-form">
        <h1> Обменник </h1>

        <div class="exchange-form__fields">

            <div class="exchange-form__money-field">
                <label for="gaved"> Отдали  </label>
                <select id="gaved" v-model="gavedCurrency">
                    <option value="BTC"> BTC</option>
                    <option value="ETH"> ETH</option>
                    <option value="EUR"> EUR </option>
                    <option value="UAH"> UAH </option>
                </select> 
            </div>

            <div class="exchange-form__money-field">
                <label for="gaved__sum"> Сумма в {{ gavedCurrency}} </label>
                <input 
                id="gaved__sum" 
                v-on:input= "selectReceivedCurrency"
                v-bind:value="gavedSum">
            </div>

            <div class = "exchange-form__money-loading">
                <img width="50px" height="50px" src="@/assets/loading.png">
            </div>

            <div class="exchange-form__money-field">
                <label for="received"> Получатели </label>

                <select id="received" v-model="receivedCurrency">
                    <option value="BTC"> BTC</option>
                    <option value="ETH"> ETH</option>
                    <option value="EUR"> EUR </option>
                    <option value="UAH"> UAH </option>
                </select> 
            </div>

            <div class="exchange-form__money-field">
                <label for="select_value" > Сумма в {{receivedCurrency}} </label>
                <input
                 id="select_value" 
                 v-on:input="selectViceVersaCurrency"
                 v-bind:value="receivedSum" 
                />
            </div>
        </div>   

        <div class="exchange-form__button">
            <button @click= "buyCurrency"> Отправить </button>
        </div>    

        <ExchangeBalance 
          v-bind:gavedCurrency="gavedCurrency"
          v-bind:receivedCurrency="receivedCurrency"
          v-bind:balance="balance"
          v-bind:course="course"
          > 
        </ExchangeBalance> 
    </div>    
</template>


<script>
import ExchangeBalance from "../components/EchangeBalance.vue";
import {getCourse} from "../courseExchange";

const courseBalance = {
    "BTC": 4,
    "UAH": 30000,
    "ETH": 18,
}

export default {
    name: "exchange-form",
    components: {
      ExchangeBalance
    },


    data(){
        return {
            gavedCurrency:"",
            receivedCurrency:"",
            gavedSum: "",
            receivedSum: "",
            course: 0,
            balance: 0,

        }
    },

    watch: {
        gavedCurrency(currency) {
           this.receivedSum = getCourse(currency,this.receivedCurrency) * this.gavedSum;
           this.course = getCourse(currency, this.receivedCurrency);
        },

        receivedCurrency(currency) {
            this.receivedSum = getCourse(this.gavedCurrency,currency) * this.gavedSum;
            this.balance = this.getBalance(currency);
        }
    },

    methods: {
        selectReceivedCurrency(e){
           this.gavedSum = e.target.value;
           this.receivedSum = getCourse(this.gavedCurrency,this.receivedCurrency) * this.gavedSum
        },

        selectViceVersaCurrency(e) {
            this.receivedSum = e.target.value;
            this.gavedSum = getCourse(this.receivedCurrency,this.gavedCurrency)
        },

        getBalance (currency) {
            let currentbalance = courseBalance[currency];

            if(currentbalance) {
                return currentbalance;
            }
        },    

        buyCurrency() {
            if(this.balance > 0) {
                courseBalance[this.receivedCurrency] -= this.receivedSum;
                courseBalance[this.gavedCurrency] += this.gavedSum;
                this.balance -= this.receivedSum;
            }
        },

        successFullExchange(currency,sum){
            if (this.currencyBalance[currency] > sum) {
                return true 
            }
        },
        
    }
}
</script>

<style lang="scss">
  .exchange-form{
      padding: 100px 20px 100px 20px;
  }

  .exchange-form__fields{ 
     padding:80px 30px 100px 30px; 
     display: flex;
     justify-content: center;
     align-items: center;
     width:100%
  }

  .exchange-form__money-field {
    width:100%;
  }

  .exchange-form__money-field input, 
  .exchange-form__money-field input:active {
      width:200px;
      border:none;
      border-bottom: 1px solid grey;
  }

  .exchange-form__money-field select {
      width:100px;
      border:none;
      border-bottom: 1px solid grey;
  }

  label {
    position:absolute;
    margin-top:-25px;
    font-size:14px;
  }

</style>