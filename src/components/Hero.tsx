import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/image/ruang keluarga.jpeg';

export default function Hero() {
    return (
        <header className="hero">
            <div className="hero-shape-dark"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="badge">Properti Eksklusif Tersedia</span>
                    <h1 className="hero-title">Hunian Mewah<br />Siap Huni</h1>
                    <p className="hero-desc">Temukan kenyamanan maksimal dan gaya hidup modern di properti eksklusif dengan lokasi paling strategis. Solusi tepat untuk hunian idaman atau investasi Anda.</p>
                    <div className="hero-buttons">
                        <Link href="#" className="btn btn-outline-light">Lihat Detail <i className="ph ph-arrow-right"></i></Link>
                        <div className="hero-phone">
                            <div className="phone-icon"><i className="ph-fill ph-phone-call"></i></div>
                            <span>+62 812-3456-7890</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <Image src={heroImg} alt="Interior Modern" className="hero-img" style={{ objectFit: 'cover' }} priority />
                </div>
            </div>
        </header>
    );
}
