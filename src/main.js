import UiAlert from './components/Alert'
import UiSelect from './components/Select'

const UiLibrary = {
	UiAlert,
	UiSelect
}
UiLibrary.install = function(Vue, opts = {}) {
	// Install the components
	Object.keys(UiLibrary).forEach(key => {
		if (key === 'install') {
			return
		}
		const Component = UiLibrary[key]
		Vue.component(Component.name, Component)
	})
}

// Automatically install if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(UiLibrary)
}

export default UiLibrary

export { UiAlert }
export { UiSelect }
