
function Navbar({user ={isActive : false , name: "Rahul"}}) {
  const {isActive , name} = user;
  return (
    <ul>
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      {/* Conditional Rendering */}
      <li>{isActive ? name : "Login"}</li>
    </ul>
  );
}

export default Navbar;