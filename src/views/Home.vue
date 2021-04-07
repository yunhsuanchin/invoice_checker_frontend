<template>
  <div class="home">
    <h1 class="text-center">Invoice Checker</h1>
    <form @submit.stop.prevent="handleSubmit">
      <select class="form-control my-5" v-model="checkingMonth">
        <option
          v-for="(item, index) in shownPeriod"
          :key="item.value"
          :value="item.value"
          :selected="index === 0"
          >{{ item.text }}</option
        >
      </select>
      <input
        type="text"
        class="form-control"
        placeholder="請輸入統一發票末三碼"
        v-model="checkingNumber"
        maxlength="3"
      />
      <div class="text-center py-5">
        <div class="spinner-border text-primary" role="status" v-if="checking">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </form>

    <form
      class="py-3"
      v-show="winningPossibility"
      @submit.prevent.stop="furtherCheckWinnings"
    >
      <label for="fullNumberInput">您有可能中大獎！請輸入完整發票號碼：</label>
      <input type="text" id="fullNumberInput" max="8" v-model="furtherInput" />
      <button class="btn-primary ml-1">提交</button>
    </form>

    <div class="row mt-5 mb-3">
      <div class="col">
        <span>查詢次數：{{ queryingCount }}</span>
      </div>
      <div class="col">
        <span>中獎次數：{{ winningCount }}</span>
      </div>
    </div>

    <table class="table" v-show="results.length">
      <thead>
        <tr>
          <th scope="col">序號</th>
          <th scope="col">期別</th>
          <th scope="col">發票號碼</th>
          <th scope="col">是否中獎</th>
          <th scope="col">中獎金額</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in results" :key="index">
        <tr>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.month }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.isWinner }}</td>
          <td>{{ item.amount | toThousands }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'https://fathomless-journey-79826.herokuapp.com/'

export default {
  name: 'Home',
  data() {
    return {
      today: '',
      period: ['01-02', '03-04', '05-06', '07-08', '09-10', '11-12'],
      shownPeriod: [
        { value: '01-02 2021', text: '2021年01-02月' },
        { value: '11-12 2020', text: '2020年11-12月' },
      ],
      checkingMonth: '01-02 2021',
      checkingNumber: '',
      results: JSON.parse(localStorage.getItem('results')) || [],
      checking: false,
      furtherInput: '',
      winningPossibility: false,
      jackpotNumber: '',
      possiblyWinnings: '',
      possiblyWinningPrize: '',
    }
  },
  computed: {
    queryingCount() {
      return this.results.length
    },
    winningCount() {
      return this.results.filter((item) => item.amount !== 0).length
    },
  },
  mounted() {
    this.today = new Date()
  },
  methods: {
    handleSubmit() {
      this.checking = true
      if (!this.checkingMonth) {
        return alert('請選擇查詢月份')
      }
      if (this.checkingNumber.length < 3) {
        return alert('請確認發票號碼是否輸入正確')
      }

      axios
        .post(BASE_URL, {
          checkingMonth: this.checkingMonth,
          checkingNumber: this.checkingNumber,
        })
        .then((response) => {
          if (!response.data.isWinner || response.data.amount === 200) {
            this.saveResult(response.data.isWinner, response.data.amount)
          } else {
            this.winningPossibility = true
            this.jackpotNumber = response.data.invoice
            this.possiblyWinnings = response.data.amount
            this.possiblyWinningPrize = response.data.prize
          }
        })
        .then(() => {
          this.checking = false
        })
    },
    furtherCheckWinnings() {
      if (this.furtherInput.length !== 8) {
        return alert('請確認發票號碼是否輸入正確')
      }
      let matchResult = []
      let amount = 0
      const array1 = this.furtherInput.split('')
      const array2 = this.jackpotNumber.split('')
      let j = 0
      for (let i = 0; i < array1.length; i++) {
        matchResult.push(array1[i] === array2[j])
        j++
      }
      const differenceNumIndex = matchResult.lastIndexOf(false)
      if (differenceNumIndex === -1) {
        amount = this.possiblyWinnings
      } else if (this.possiblyWinningPrize !== 'First Prize') {
        amount = 0
      } else {
        switch (differenceNumIndex) {
          case 0:
            amount = 40000
            break
          case 1:
            amount = 10000
            break
          case 2:
            amount = 4000
            break
          case 3:
            amount = 1000
            break
          default:
            amount = 200
        }
      }
      this.saveResult(amount, amount)
      this.jackpotNumber = ''
      this.winningPossibility = false
      this.possiblyWinnings = ''
      this.possiblyWinningPrize = ''
    },
    saveResult(isWinner, amount) {
      this.results.push({
        month: this.checkingMonth,
        number: this.furtherInput ? this.furtherInput : this.checkingNumber,
        isWinner: isWinner ? '是' : '否',
        amount: amount ? amount : 0,
      })
      localStorage.setItem('results', JSON.stringify(this.results))

      this.checkingNumber = ''
      this.furtherInput = ''
    },
  },
  filters: {
    toThousands(num) {
      num = (num || 0).toString()
      let result = ''
      while (num.length > 3) {
        result = ',' + num.slice(-3) + result
        num = num.slice(0, num.length - 3)
      }
      if (num) {
        result = num + result
      }
      return result
    },
  },
  watch: {
    checkingNumber() {
      if (this.checkingNumber.length === 3) {
        this.handleSubmit()
      }
    },
  },
}
</script>
