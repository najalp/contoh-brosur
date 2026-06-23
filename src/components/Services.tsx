import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
    return (
        <section className="services section-padding">
            <div className="container text-center">
                <span className="section-subtitle text-center">Fasilitas Utama</span>
                <h2 className="section-title text-center mb-5">Fitur Unggulan Properti</h2>
                
                <div className="service-grid">
                    <div className="service-card">
                        <Image src="/image/teras.jpeg" alt="Teras Nyaman" className="service-img" width={300} height={250} />
                        <div className="service-info">
                            <div className="service-icon"><i className="ph-light ph-armchair"></i></div>
                            <div className="service-text">
                                <h3>Teras Bersantai</h3>
                            </div>
                            <Link href="#" className="service-link"><i className="ph ph-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src="/image/tangga ke lanati 2.jpeg" alt="Interior Luas" className="service-img" width={300} height={250} />
                        <div className="service-info">
                            <div className="service-icon"><i className="ph-light ph-stairs"></i></div>
                            <div className="service-text">
                                <h3>Interior Luas</h3>
                            </div>
                            <Link href="#" className="service-link"><i className="ph ph-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src="/image/mushola.jpeg" alt="Fasilitas Mushola" className="service-img" width={300} height={250} />
                        <div className="service-info">
                            <div className="service-icon"><i className="ph-light ph-star"></i></div>
                            <div className="service-text">
                                <h3>Fasilitas Mushola</h3>
                            </div>
                            <Link href="#" className="service-link"><i className="ph ph-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src="/image/depan samping.jpeg" alt="Fasad Modern" className="service-img" width={300} height={250} />
                        <div className="service-info">
                            <div className="service-icon"><i className="ph-light ph-buildings"></i></div>
                            <div className="service-text">
                                <h3>Fasad Modern</h3>
                            </div>
                            <Link href="#" className="service-link"><i className="ph ph-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
