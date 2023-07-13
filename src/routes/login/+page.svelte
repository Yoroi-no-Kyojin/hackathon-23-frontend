<script>
	import { address } from './../../stores/store.js';
    import { Label, Input, Select } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { goto } from '$app/navigation';
    import { curruser, state} from '../../stores/store';
    let user={
        name:"",
        password:""
    }
	let acctypes=[
      {value:'user',name:'Normal User'},
      {value:'doc',name:"Doctor"}
    ]
	let utype=""
    async function proxyhandlelogin() {
		//console.log(user);
		let type=-1;
		if(utype=="user")
		{
			type=0;
		}
		else if(utype="doc")
		{
			type=1;
		}
		const datarray=
		{
			type: type,
			name: user.name,
			password_hash: user.password
		}
		const response = await fetch($address+'login', {
            method: 'POST',
			headers: {
				 'Content-Type': 'application/json'
				// like application/json or text/xml
			},
			body: JSON.stringify(datarray)
		});
		console.log(response);
		return await response.json();
	}
	async function handlelogin() {
		
		let temp = await proxyhandlelogin();
		console.log(temp);
		if (temp.error_code != 0) {
			alert('Could not log in. Try Again');
			user.name = '';
			user.password = '';
		} else  {
			alert('Logged in');
			state.set(1);
			$curruser.key=temp.name;
			$curruser.name=user.name;
			//console.log(document.cookie)
			//console.log($curruser);
			//console.log(user);
			//console.log($curruser.image);
			goto('/');
		}
    }
	function logout()
	{
		$state=0;
		$curruser.name="";
	}
  </script>

  <div class='flex items-center justify-center'>
    
    <Label for='login'  class='block mb-2'>Login Page</Label>
  </div>
  {#if $state == 0}
  <Label>Select usertype
    <Select class="mt-2" items={acctypes} bind:value={utype} />
    </Label>
	{#if utype!=""}
	{#if utype == "user"}
	<Label>Provide User Login info</Label>
	{:else}
	<Label>Provide Doctor Login info</Label>
	{/if}
  <div class='mb-6'>
    <Label for='Name' class='block mb-2'>Name</Label>
    <Input bind:value={user.name}  id='name' placeholder="Enter user-name" />
  </div>
  <div class='mb-6'>
    <Label for='Password' class='block mb-2'>Password</Label>
    <Input bind:value={user.password} id='password' size="lg" placeholder="password" />
  </div>
 
  <div class='flex items-center justify-center'>
  <Button on:click={handlelogin} href="/">Login</Button>
</div>
{/if}
{:else}
<div class='flex items-center justify-center'>
    <Label for='loggedin'  class='block mb-2'>You are already logged in.</Label>
  </div>
  <div class='flex items-center justify-center'>
	<Button on:click={logout} href="/">Logout</Button>
  </div>
{/if}
 