import { persisted } from 'svelte-local-storage-store';
export let curruser = persisted('curruser', {
	name: '',
	key: '',
});
export let state = persisted('state', 0);
export let usertype=persisted('usertype',"");