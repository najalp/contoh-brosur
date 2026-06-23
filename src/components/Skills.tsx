import Image from 'next/image';
import poolImg from '../../public/image/kolam renang.jpeg';

export default function Skills() {
    return (
        <section className="skills section-padding bg-light">
            <div className="container skills-container">
                <div className="skills-content">
                    <span className="section-subtitle">Nilai Investasi Terbaik</span>
                    <h2 className="section-title">Aksesibilitas &<br />Lokasi Strategis</h2>
                    <p className="section-desc">Selain desain bangunan yang menawan, properti ini menawarkan kemudahan akses ke berbagai fasilitas umum utama, menjadikannya pilihan investasi yang sangat menguntungkan di masa depan.</p>
                    
                    <div className="progress-bars">
                        <div className="progress-item">
                            <div className="progress-info">
                                <span>Pusat Perbelanjaan (5 Menit)</span>
                                <span className="progress-value" style={{ left: '95%' }}>95%</span>
                            </div>
                            <div className="progress-track"><div className="progress-fill" style={{ width: '95%' }}></div></div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-info">
                                <span>Sekolah & Rumah Sakit (10 Menit)</span>
                                <span className="progress-value" style={{ left: '90%' }}>90%</span>
                            </div>
                            <div className="progress-track"><div className="progress-fill" style={{ width: '90%' }}></div></div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-info">
                                <span>Akses Jalan Tol (15 Menit)</span>
                                <span className="progress-value" style={{ left: '85%' }}>85%</span>
                            </div>
                            <div className="progress-track"><div className="progress-fill" style={{ width: '85%' }}></div></div>
                        </div>
                    </div>
                </div>
                <div className="skills-image">
                    <Image src={poolImg} alt="Interior Kustom" className="main-img" style={{ objectFit: 'cover' }} />
                </div>
            </div>
        </section>
    );
}
