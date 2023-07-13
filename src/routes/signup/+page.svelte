<script>
    import { Label, Input } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { goto } from '$app/navigation';
    import { curruser, state} from '../../stores/store';
    let user={
        name:"",
        address:"",
        nid:"",
        password:""
    }

    async function proxysignup() {
		const dataArray = 
		{
			type: 0,
			name: user.name,
			password_hash: user.password,
			address: user.address,
			n_id: user.nid
		}
		
		// for (var key of dataArray.entries()) {
		// 	console.log(key[0] + ', ' + key[1]);
		// }
		// console.log(user);
		//console.log(dataArray);
		let endpoint = 'http://localhost:3000/sign-up';
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(dataArray)
		});
		// console.log(response);
		return await response.json();
	}

	async function handlesignup() {
		let temp = await proxysignup();
		if (temp.error_code  !=  0) {
			alert('Could not Add');
		} else {
			// console.log(temp);
			goto('/login');
		}
	}
  </script>
  <div class='flex items-center justify-center'>
    
    <Label for='signup'  class='block mb-2'>Signup Page</Label>
  </div>
  
  <div class='mb-6'>
    <Label for='Name' class='block mb-2'>Name</Label>
    <Input bind:value={user.name} id='name' placeholder="Enter user-name" />
  </div>
  <div class='mb-6'>
    <Label for='Address' class='block mb-2'>Address</Label>
    <Input bind:value={user.address} id='address' size="lg" placeholder="Address" />
  </div>
  <div class='mb-6'>
    <Label for='nid' class='block mb-2'>NID</Label>
    <Input bind:value={user.nid} id='nid' placeholder="National Id Number" />
  </div>
  <div class='mb-6'>
    <Label for='password' class='block mb-2'>Password</Label>
    <Input bind:value={user.password} id='name' placeholder="Enter password" />
  </div>
  <div class='flex items-center justify-center'>
  <Button on:click={handlesignup} href="/">Signup</Button>
</div>