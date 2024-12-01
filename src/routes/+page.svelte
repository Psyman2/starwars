<script>
  import { onMount } from 'svelte';
  import { planets, loading, loggedInUser } from '../stores/store'; // Add loggedInUser
  import LoginPopup from '../components/LoginPopup.svelte'; // Import LoginPopup

  let showLoginPopup = false;

  onMount(async () => {
    try {
      const res = await fetch('https://swapi.dev/api/planets/');
      const data = await res.json();
      planets.set(data.results); // Update the store with the fetched data
    } catch (err) {
      console.error('Error fetching planet data:', err);
    } finally {
      loading.set(false); // Set loading to false after the data is fetched
    }
  });

  // Toggle login popup visibility
  function toggleLoginPopup() {
    showLoginPopup = !showLoginPopup;
  }
</script>

<main>
  <h1>Welcome to the Star Wars Planet Encyclopedia!</h1>
  
  {#if $loggedInUser}
    <p>Greetings, Master {$loggedInUser}!</p>
  {/if}

  <p>Explore the planets from the Star Wars Universe.</p>
  <a href="/planets" class="button">Discover Planets</a>

  <!-- Login Button -->
  {#if !$loggedInUser}
    <button class="login-button" on:click={toggleLoginPopup}>Login</button>
  {/if}

  <!-- Login Popup -->
  {#if showLoginPopup}
    <LoginPopup on:close={toggleLoginPopup} />
  {/if}
</main>
//Katze kaufen
<style>
  main {
    background-color: #121212; /* Dark background */
    color: #ffffff; /* Light text */
    text-align: center;
    padding: 2rem;
    min-height: 100vh;
  }

  .button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #ff6f61; /* Bright button */
    color: #ffffff;
    text-decoration: none;
    border-radius: 0.25rem;
    margin-top: 1rem;
  }

  .button:hover {
    background-color: #ff8566; /* Slightly lighter on hover */
  }
</style>

