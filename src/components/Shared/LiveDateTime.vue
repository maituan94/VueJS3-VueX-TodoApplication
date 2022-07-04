<template>
  <div class="fw-bold">
    {{ date }}
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'live-date-time',
  data: () => ({ 
    date: ''
  }),
  methods: {
    getDate() {
      this.date = moment(new Date()).format('YYYY MMMM DD HH:mm:ss')
      setTimeout(this.getDate, 1000)
    }
  },
  mounted() {
    this.getDate()
  }
}
</script>
