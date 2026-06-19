import CartCount from "./CartCount";

export function MiniNavbar() {
  return (
    <div className="flex justify-between">
      <div>Navbar</div>
      <div><CartCount /></div>
    </div>
  );
}
