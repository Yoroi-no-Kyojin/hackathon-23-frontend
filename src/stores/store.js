import { persisted } from 'svelte-local-storage-store';
export let curruser = persisted('curruser', {
	name: '',
	key: '',
});
export let state = persisted('state', 0);
export let usertype=persisted('usertype',"");
export let address=persisted('address',"https://vaccination-webapp.azurewebsites.net/");
export let address1=persisted('address1',"localhost:3000/");