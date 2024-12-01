<script>
  import { loggedInUser } from '../stores/store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let username = '';
  let password = '';
  let error = '';

  // Hardcoded credentials
  const hardcodedUsername = 'jedi';
  const hardcodedPassword = 'force';

  // Handle Login
  function handleLogin() {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      loggedInUser.set(username); // Set the logged-in user in the store
      dispatch('close'); // Close the popup
    } else {
      error = 'Invalid username or password!';
    }
  }
</script>

<div class="modal">
  <div class="modal-content">
    <h2>Login</h2>
    <label>
      Username:
      <input type="text" bind:value={username} />
    </label>
    <label>
      Password:
      <input type="password" bind:value={password} />
    </label>
    {#if error}
      <p class="error">{error}</p>
    {/if}
    <button on:click={handleLogin}>Login</button>
    <button class="close" on:click={() => dispatch('close')}>Close</button>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9); /* Black with slight transparency */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: #222222; /* Slightly lighter dark */
    color: #ffffff; /* Light text */
    padding: 2rem;
    border-radius: 0.25rem;
    text-align: center;
    width: 90%;
    max-width: 400px;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #444; /* Subtle border */
    border-radius: 0.25rem;
    background: #121212; /* Dark input background */
    color: #ffffff; /* Light text */
  }

  input:focus {
    border-color: #ff6f61; /* Highlight input on focus */
    outline: none;
  }

  .error {
    color: #ff6f61; /* Error messages in bright red/orange */
    margin-top: 1rem;
  }

  .close {
    margin-top: 1rem;
    background-color: #444; /* Dark button */
    color: #ffffff; /* Light text */
    border: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }

  .close:hover {
    background-color: #555; /* Slightly lighter on hover */
  }
</style>

