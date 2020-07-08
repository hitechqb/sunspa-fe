<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
         App Management
        </q-toolbar-title>
        <q-btn flat round icon="account_circle" class="q-mr-xs"></q-btn>
        <div>v{{ 0.1 }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Danh mục
        </q-item-label>
        <Navigator
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
  import Navigator from '../components/Navigator';
   import {RouterName} from "../router";

  export default {
    name: 'MainLayout',
    components: {
      Navigator,
    },

    data() {
      return {
        leftDrawerOpen: false,
        essentialLinks: [
          {
            title: 'Home',
            caption: 'Trang chủ',
            icon: 'tag',
            link: RouterName.HOME
          },
          {
            title: 'IN-OUT',
            caption: 'Chấm công',
            icon: 'access_alarm',
            link: RouterName.INOUT
          },
          {
            title: 'Setting',
            caption: 'Cài đặt',
            icon: 'settings',
            link: RouterName.SETTING
          },
        ]
      };
    }
  };
</script>
