import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    <i className="ph-fill ph-house-line" style={{ color: "var(--primary)", fontSize: "2rem" }}></i>
                    <div className="logo-text">
                        <strong>Properti</strong>
                        <span>EKSKLUSIF</span>
                    </div>
                </div>

                <div className="nav-actions">
                    <i className="ph ph-magnifying-glass search-icon"></i>
                    <Link href="#" className="btn btn-primary">Dapatkan Penawaran <i className="ph ph-arrow-right"></i></Link>
                </div>
            </div>
        </nav>
    );
}
