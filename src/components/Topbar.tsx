export default function Topbar() {
    return (
        <div className="topbar">
            <div className="container topbar-container">
                <div className="topbar-left">
                    <span>Selamat datang di Artima!</span>
                </div>
                <div className="topbar-center">
                    <span><i className="ph ph-map-pin"></i> Jl. Jend. Sudirman No. 10, Jakarta Selatan</span>
                    <span><i className="ph ph-envelope"></i> info@artima.co.id</span>
                    <span><i className="ph ph-phone"></i> +62 812-3456-7890</span>
                </div>
                <div className="topbar-right">
                    <span>Indonesia <i className="ph ph-caret-down"></i></span>
                    <div className="social-icons">
                        <i className="ph-fill ph-facebook-logo"></i>
                        <i className="ph-fill ph-twitter-logo"></i>
                        <i className="ph-fill ph-instagram-logo"></i>
                        <i className="ph-fill ph-linkedin-logo"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
