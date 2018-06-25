import { mapState } from 'vuex'
import { AeMain, AeBanner } from '@aeternity/aepp-components'
import FooterMobile from './components/FooterMobile'
import FooterDesktop from './components/FooterDesktop'
import store from './store'
import PostMessageHandler from './lib/postMessageHandler'

export default {
  name: 'app',
  components: {
    AeMain,
    AeBanner,
    AppFooter: process.env.IS_MOBILE_DEVICE ? FooterMobile : FooterDesktop
  },
  computed: {
    ...mapState(['notification']),
    appClassObject () {
      return {
        stage: process.env.IS_STAGE === true,
        development: process.env.NODE_ENV === 'development',
        'quick-id-hidden': !this.displayQuickId
      }
    },
    displayFooter () {
      const hideQuickIdOn = ['onboarding', 'login', 'recover', 'new-account', 'set-password']
      if (process.env.IS_MOBILE_DEVICE) hideQuickIdOn.push('intro')
      return !hideQuickIdOn.includes(this.$route.name)
    },
    showBackButton () {
      return !['intro', 'apps'].includes(this.$route.name)
    }
  },
  created: function () {
    // set domain to base host because of iframe cross domain policy, very nice hardcoded urls
    if (document.domain.includes('aepps.com')) {
      document.domain = 'aepps.com'
    } else if (document.domain.includes('aepps.dev')) {
      document.domain = 'aepps.dev'
    }
  },
  mounted: function () {
    let postMessagehandler = new PostMessageHandler(store)
    postMessagehandler.registerListener()
  }
}
