<script>
  import { planets, loading, loggedInUser } from '../../stores/store';

  // Reactive variable for checking if a user is logged in
  $: isLoggedIn = $loggedInUser !== null;

  // Variable for the selected planet
  let selectedPlanet = null;

  // Function to handle planet click
  const handlePlanetClick = (planet) => {
    selectedPlanet = planet;
  };

  // Function to close the popup
  const closePopup = () => {
    selectedPlanet = null;
  };
</script>

<main>
  <!-- Dynamic title based on login state -->
  <h1>
    {#if isLoggedIn}
      Which planet should we visit, Master {$loggedInUser}!
    {:else}
      Star Wars Planets
    {/if}
  </h1>

  <!-- Back Button -->
  <a href="/" class="back-button">Back to Home</a>

  <!-- Planets List -->
  {#if $loading}
    <p>Loading planet data...</p>
  {:else}
    <ul>
      {#each $planets as planet}
        <li on:click={() => handlePlanetClick(planet)}>{planet.name}</li>
      {/each}
    </ul>
  {/if}

  <!-- Planet Popup -->
  {#if selectedPlanet}
    <div class="popup">
      <div class="popup-content">
        <h2>{selectedPlanet.name}</h2>
        <p><strong>Climate:</strong> {selectedPlanet.climate}</p>
        <p><strong>Terrain:</strong> {selectedPlanet.terrain}</p>
        <p><strong>Population:</strong> {selectedPlanet.population}</p>
        <button on:click={closePopup} class="close-button">Close</button>
      </div>
    </div>
  {/if}
</main>

<style>
  main {
    background-color: #121212; /* Dark background */
    color: #ffffff; /* Light text */
    text-align: center;
    padding: 2rem;
    min-height: 100vh;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background: #222222; /* Slightly lighter dark background for contrast */
    color: #ffffff; /* Light text */
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  li:hover {
    background: #333333; /* Even lighter background on hover */
  }

  .back-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #ff6f61; /* Bright button */
    color: #ffffff;
    text-decoration: none;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .back-button:hover {
    background-color: #ff8566; /* Slightly lighter on hover */
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-content {
    background: #ffffff; /* Light background for contrast */
    color: #000000; /* Dark text for readability */
    padding: 2rem;
    border-radius: 0.5rem;
    width: 90%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .close-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #ff6f61; /* Bright button */
    color: #ffffff;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .close-button:hover {
    background-color: #ff8566; /* Slightly lighter on hover */
  }
</style>
