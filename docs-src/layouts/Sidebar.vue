<template>
  <aside class="docs-sidebar">
    <header class="docs-sidebar__header">
        <h1 class="docs-sidebar__header-title">Test</h1>
        <h3 class="docs-sidebar__header-subtitle">Design Guide</h3>
    </header>
    <nav>
      <ul class="docs-sidebar__menu">
        <li class="docs-sidebar__menu-section" v-for="section in menu" :key="section.title">
          <div class="docs-sidebar__menu-section-header">{{ section.title }}</div>

          <ul class="docs-sidebar__menu-section-links">
            <li v-for="item in section.menu" :key="item.path">
              <router-link
                class="docs-sidebar__menu-item" exact
                :to="item.path"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { menu } from '../router/routes'

export default {
	data() {
		return {
			menu: menu
		}
	}
}
</script>
