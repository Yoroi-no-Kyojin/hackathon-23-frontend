<script>
	import '../app.css';
	import { Button, DarkMode, Label } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import {curruser, state} from '../stores/store';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
    function logout()
	{
		$state=0;
		$curruser.name="";
	}
</script>

<DarkMode btnClass={darkmodebtn} />

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="/logo.png"
        class="mr-3 h-6 sm:h-9"
        alt="Website Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Online Vaccination Portal
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      {#if $state == 0}
      <NavLi href="/login">Login</NavLi>
      <NavLi href="/signup">Signup</NavLi>
       {:else}
      <NavLi href="/registration">Vaccine Registration</NavLi>
      {/if}
      <NavLi href="/contact">Contact</NavLi>  
      
    </NavUl>
    {#if $state==1}
    <Label>{$curruser.name} is logged in</Label>
    <Button on:click={logout}>Logout</Button>
    {/if}
  </Navbar>
<slot />
