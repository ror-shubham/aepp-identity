<template>
  <mobile-page
    title="Network"
    :redirectToOnClose="{ name: 'settings' }"
    back-button
    class="settings"
  >
    <heading>Available networks</heading>
    <item v-for="network in networks" :key="network.url">
      {{network.name}}
      <ae-radio
        slot="right"
        name="network"
        :value="network.url"
        :checked="network.url === rpcUrl"
        @change="setRPCUrl(network.url)"
      />
    </item>
    <item inactive>
      Network ID
      <span slot="right">{{networkId}}</span>
    </item>
  </mobile-page>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MobilePage from '@/components/MobilePage.vue'
import AeRadio from '@/components/AeRadio.vue'
import SettingsHeading from '@/components/SettingsHeading'
import SettingsItem from '@/components/SettingsItem'
import networks from '@/lib/networksRegistry'

export default {
  components: {
    MobilePage,
    AeRadio,
    Heading: SettingsHeading,
    Item: SettingsItem
  },
  data: () => ({ networks }),
  computed: mapState(['rpcUrl', 'networkId']),
  methods: mapMutations(['setRPCUrl'])
}
</script>

<style src="./Settings.scss" lang="scss" scoped />
