<template>
  <ae-main id="app" :class="appClassObject">
    <ae-banner v-if="notification">
      <img v-if="notification.icon" :src="notification.icon" />
      {{notification.text}}
    </ae-banner>
    <router-view />
    <app-footer v-if="displayFooter" :show-back-button="showBackButton" />
  </ae-main>
</template>

<style scoped src="./App.scss" lang="scss" />
<style src="./App.global.css" />
<script src="./App.js" />
