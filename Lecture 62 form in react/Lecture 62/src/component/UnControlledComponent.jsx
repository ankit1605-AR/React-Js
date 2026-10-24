
function UnControlledComponent() {

  function signup(e) {
    e.preventDefault()
    console.log(e.target);
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  }

  return (
    <div>
      <h1>Form in React (UnControlled Component)</h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input defaultValue={"ANKIT"} type="text" name="name" id="name"/>
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" id="email"  />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="text" name="password" id="password"  />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default UnControlledComponent