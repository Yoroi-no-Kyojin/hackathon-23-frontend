<script>
    import { Label, Input } from 'flowbite-svelte';
    import { goto } from '$app/navigation';
    import { curruser, state} from '../../stores/store';
    import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
    let vaccine_name="";
    let vaccination_date="";
    let vaccines=[
      {id:0,name:"covid"},
      {id:1,name:"b"},
      {id:2,name:"c"},
      {id:3,name:"d"},
      {id:4,name:"e"}

    ];
    const attributes2 = {required: true};
    async function proxyreg() {
		const dataArray = 
		{
			type: 0,
			name: $curruser.name,
			
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

	async function handlereg() {
		let temp = await proxyreg();
		if (temp.error_code  !=  0) {
			alert('Could not Add');
		} else {
			// console.log(temp);
			goto('/login');
		}
	}
</script>
<div class='flex items-center justify-center mb-6'>
    
    <Label for='Vaccine Registration'  class='block mb-2'>Vaccine Registration</Label>
  </div>
  <div class='flex items-center justify-center mb-6'>
  <Button bind:value={vaccine_name}><Chevron>Select Vaccine</Chevron></Button>
<Dropdown >
  {#each vaccines as vaccine}
    <DropdownItem>{vaccine.name}</DropdownItem>
  {/each}
</Dropdown>
</div>
<div class='flex items-center justify-center mb-6'>
  <Label for='Vaccine Registration'  class='block mb-2'>Select Date</Label>
<input type=date {...attributes2} bind:value={vaccination_date}/>
  </div>
  <div class='flex items-center justify-center mb-6'>
  <Button  href="/">Register</Button>
</div>