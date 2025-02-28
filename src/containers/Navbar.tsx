const Navbar = () => {

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };


  return <section>
    <h1>NewsSphere</h1>
    <button onClick={async () => {
      toggleDarkMode()
    }} >click</button>
  </section>
}

export default Navbar
