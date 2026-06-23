'use client';

import Image from 'next/image';
import { useState } from 'react';
import aboutImg from '../../public/image/ruang tamu.jpeg';
import checkImg from '../../public/image/tampak depan.jpeg';

export default function About() {
    const [activeTab, setActiveTab] = useState('Spesifikasi');

    return (
        <section className="about section-padding">
            <div className="container about-container">
                <div className="about-image">
                    <Image src={aboutImg} alt="Tentang Interior" className="main-img" style={{ objectFit: 'cover' }} />
                </div>
                <div className="about-content">
                    <span className="section-subtitle">Tentang Properti</span>
                    <h2 className="section-title">Desain Elegan,<br />Kenyamanan Maksimal.</h2>
                    <p className="section-desc">Properti ini dirancang dengan standar kualitas tertinggi, menawarkan ruang hidup yang luas, pencahayaan alami yang optimal, dan material bangunan premium untuk kenyamanan keluarga Anda.</p>
                    
                    <div className="tabs">
                        <div className="tab-header">
                            <span className={activeTab === 'Spesifikasi' ? 'active' : ''} onClick={() => setActiveTab('Spesifikasi')}>Spesifikasi</span>
                            <span className={activeTab === 'Fasilitas' ? 'active' : ''} onClick={() => setActiveTab('Fasilitas')}>Fasilitas</span>
                            <span className={activeTab === 'Legalitas' ? 'active' : ''} onClick={() => setActiveTab('Legalitas')}>Legalitas</span>
                        </div>
                        <div className="tab-content">
                            <div className="tab-text-wrap">
                                <p>Properti ini memiliki luas tanah dan bangunan yang proporsional, dirancang dengan sirkulasi udara yang baik dan tata letak ruangan yang sangat fungsional.</p>
                                <ul className="check-list">
                                    <li><i className="ph-bold ph-check"></i> Luas Bangunan: 250 m² | Luas Tanah: 300 m²</li>
                                    <li><i className="ph-bold ph-check"></i> 4 Kamar Tidur & 3 Kamar Mandi</li>
                                    <li><i className="ph-bold ph-check"></i> Garasi luas untuk 2 mobil</li>
                                </ul>
                            </div>
                            <div className="tab-img-wrap">
                                <Image src={checkImg} alt="Kualitas" className="tab-img" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
