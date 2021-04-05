<template>
  <div class="home">
    <h1 class="text-center">Invoice Checker</h1>
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <select class="form-control my-5" v-model="checkingMonth">
        <option selected disabled>請選擇查詢的發票月份</option>
        <option value="11-12 2020">11-12</option>
        <option value="2">01-02</option>
        <option value="3">Three</option>
      </select>
      <input
        type="text"
        class="form-control"
        placeholder="請輸入統一發票末三碼"
        v-model="checkingNumber"
        maxlength="3"
      />
      <div class="text-center py-5">
        <button type="submit" class="btn btn-primary ">
          查詢
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'https://fathomless-journey-79826.herokuapp.com/'

export default {
  name: 'Home',
  data() {
    return {
      checkingMonth: '',
      checkingNumber: '',
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit')
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
          console.log('response', response)
        })
    },
  },
}
</script>
