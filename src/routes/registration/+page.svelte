<script>
    import { Label, } from 'flowbite-svelte';
    import { goto } from '$app/navigation';
    import { curruser, state} from '../../stores/store';
    import { Button, Select } from 'flowbite-svelte'
	let vaccine_id=0;
    let vaccination_date="";
    let vaccines=[
      {value:1,name:"covid"},
    ];
    const attributes2 = {required: true};
    async function proxyreg() {
		
		console.log(vaccine_id)
		const dataArray = 
		{
			type: 0,
			name: $curruser.key,
			vaccine_id:vaccine_id,
			date:vaccination_date	
		}
		
		// for (var key of dataArray.entries()) {
		// 	console.log(key[0] + ', ' + key[1]);
		// }
		// console.log(user);
		//console.log(dataArray);
		let endpoint = 'http://localhost:3000/vaccine-registration';
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
			alert('Successfully Registered');
		}
	}
</script>
<div class='flex items-center justify-center mb-6'>
    
    <Label for='Vaccine Registration'  class='block mb-2'>Vaccine Registration</Label>
  </div>
  {#if $state==1}
  <div class='flex items-center justify-center mb-6'>
  <Label>Select a vaccine
	<Select class="mt-2" items={vaccines} bind:value={vaccine_id} />
  </Label>
</div>
<div class='flex items-center justify-center mb-6'>
  <Label for='Vaccine Registration'  class='block mb-2'>Select Date</Label>
<input type=date {...attributes2} bind:value={vaccination_date}/>
  </div>
  <div class='flex items-center justify-center mb-6'>
  <Button on:click={handlereg} href="/">Register</Button>
</div>
{:else}
<div class='flex items-center justify-center mb-6'>
    
    <Label for='Vaccine Registration'  class='block mb-2'>You are not Logged in.</Label>
  </div>
{/if}