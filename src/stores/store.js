import { persisted } from 'svelte-local-storage-store';
export let curruser = persisted('curruser', {
	name: '',
	key: '',
});
export let state = persisted('state', 0);