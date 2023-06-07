/* eslint-disable no-return-assign */
class SidebarCreator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    return this.innerHTML = `
            <a>Dashboard</a>
            <a>Profile</a>
            <div>
                <p>Daftar Pinjaman</p>
                <button></button>
                <ul>
                    <li>Flat</li>
                    <li>Efektif</li>
                    <li>Anuitas</li>
                </ul>
            </div>
            <div>
                <p>Daftar Pelunasan</p>
                <button></button>
                <ul>
                    <li>Flat</li>
                    <li>Efektif</li>
                    <li>Anuitas</li>
                </ul>
            </div>
        `;
  }
}

customElements.define('side-bar', SidebarCreator);
