<script>
	import '../app.css';
	import { DarkMode } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';
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
      <NavLi href="/login">Login</NavLi>
      <NavLi href="/signup">Signup</NavLi>
      <NavLi href="/registration">Vaccine Registration</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
<slot />
