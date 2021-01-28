<template>
  <div class="modal">
    <p>
      {{ $t('instructions') }}
    </p>

    <select name="" id="" v-model="$i18n.locale">
      <option :value="lang" v-for="lang of langs" :key="lang">{{lang}}</option>
    </select>
  </div>
</template>

<script>

export default {
  data(){return {
    langs: ['sv', 'en']
  }},

}
</script>

<style>

</style>