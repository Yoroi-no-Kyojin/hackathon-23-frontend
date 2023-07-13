import { persisted } from 'svelte-local-storage-store';
export let curruser = persisted('curruser', {
	name: '',
});
export let state = persisted('state', 0);