import { useRef } from "react";

function UnControlledComponentUseRef() {
  const nameRef = useRef("ankit");
  function signup(e) {
    e.preventDefault()
    console.log(e.target);
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    console.log(nameRef.current.value);
  }

  return (
    <div>
      <h1>Form in React (UnControlled Component UseRef)</h1>
      <form action="" onSubmit={signup}>
        <label htmlFor="name">Name : </label>
        <input ref={nameRef} type="text" name="name" id="name"/>
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

export default UnControlledComponentUseRef