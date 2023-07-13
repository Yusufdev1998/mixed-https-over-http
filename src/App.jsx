function App() {
  fetch("http://13.51.196.53:8080/countries?region=Africa&search=a&limit=1")
    .then(res => res.json())
    .then(data => console.log(data));
  return (
    <>
      <div className="red">salom</div>

      <img src="vite.svg" alt="" />
    </>
  );
}

export default App;
