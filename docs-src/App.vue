<template>
  <div id="app" class="docs">
    <sidebar />
    <section class="docs-content">
      <router-view/>
    </section>
  </div>
</template>

<script>
import Sidebar from './layouts/Sidebar'

export default {
	name: 'app',
	components: {
		Sidebar
	}
}
</script>

<style lang="scss">
@import './styles/index.scss';
</style>
