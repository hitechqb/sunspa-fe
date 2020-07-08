<template>
  <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-card flat bordered class="col">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>NV001</q-item-label>
            <q-item-label caption>
              KeToan
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-responsive :ratio="16/9">
          <!-- notice "border-radius-inherit" below; it's important when in a QCard -->
          <q-card-section class="border-radius-inherit flex flex-center bg-grey-1">
            <div>Information NV001</div>
          </q-card-section>
        </q-responsive>
      </q-card>

      <q-card flat bordered class="col">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>NV002</q-item-label>
            <q-item-label caption>
              IT
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-responsive :ratio="1">
          <!-- notice "border-radius-inherit" below; it's important when in a QCard -->
          <q-card-section class="border-radius-inherit flex flex-center bg-grey-1">
            <div>Information NV001</div>
          </q-card-section>
        </q-responsive>
      </q-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageSetting',
    data () {
      return {
        slide: 1
      }
    }
  }
</script>
