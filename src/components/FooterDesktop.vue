<template>
  <footer-modal
    :show-back-button="showBackButton"
    @toggle="toggleDesktopFooter"
    :closable="!transactionIdToSignByRemote"
  >
    <remote-connection-prompt v-if="showRemoteConnectionPrompt" />
    <waiting-for-confirmation v-if="transactionIdToSignByRemote" />
    <accounts-horizontal v-if="showIdManager" />
  </footer-modal>
</template>

<script>
import { mapState } from 'vuex'
import FooterModal from '@/components/FooterModal.vue'
import AccountsHorizontal from '@/components/AccountsHorizontal.vue'
import RemoteConnectionPrompt from '@/components/RemoteConnectionPrompt.vue'
import WaitingForConfirmation from '@/components/WaitingForConfirmation.vue'

export default {
  components: {
    FooterModal,
    AccountsHorizontal,
    RemoteConnectionPrompt,
    WaitingForConfirmation
  },
  props: {
    showBackButton: { type: Boolean, default: false }
  },
  computed: {
    ...mapState(['showIdManager']),
    ...mapState({
      showRemoteConnectionPrompt: ({ desktop }) => desktop.showRemoteConnectionPrompt,
      transactionIdToSignByRemote: ({ desktop }) => desktop.transactionIdToSignByRemote
    })
  },
  methods: {
    toggleDesktopFooter () {
      if (this.transactionIdToSignByRemote) return
      this.$store.commit(`toggle${this.$store.getters.loggedIn
        ? 'IdManager' : 'RemoteConnectionPrompt'}`)
    }
  }
}
</script>
