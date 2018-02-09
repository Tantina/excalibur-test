import UiAlert from './../pages/Alert'
import UiSelect from './../pages/Select'

const menu = [
	{
		title: 'Components',
		menu: [
			{
				path: '/alert',
				component: UiAlert,
				title: 'Alert',
				sourceUrl: 'src/components/Alert.vue'
			},
			{
				path: '/select',
				component: UiSelect,
				title: 'Select',
				sourceUrl: 'src/components/Select.vue'
			}
		]
	}
]

// Generate a Vue Router compatible routes map from the menu
const routes = menu.reduce((paths, section) => {
	const sectionPaths = section.menu.map(menuItem => ({
		path: menuItem.path,
		component: menuItem.component,
		meta: {
			section: section.title,
			title: menuItem.title,
			sourceUrl: menuItem.sourceUrl
		}
	}))
	return paths.concat(sectionPaths)
}, [])

// Add the default route at the beginning of the routes array
routes.unshift({
	path: '/',
	redirect: '/alert'
})

// Add the catch all route to redirect
routes.push({
	path: '*',
	redirect: '/alert'
})

export { menu, routes }
