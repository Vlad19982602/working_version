import scrolling from './modules/pageup.js';
import tabs from './modules/tabs.js';

window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	tabs('.vikon-tabs', '.vikon-nav-item', '.vikon-tab-pane ', 'active');
});

