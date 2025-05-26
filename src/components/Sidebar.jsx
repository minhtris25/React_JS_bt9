function Sidebar() {
  return (
    <aside className="menu p-4" style={{ minHeight: '100vh' }}>
      <p className="menu-label">Menu</p>
      <ul className="menu-list">
        <li><a href="#" className="is-active">Orders</a></li>
        <li><a href="#">Shipments</a></li>
        <li><a href="#">Accounts</a></li>
        <li><a href="#">Invoices</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;