import Image from 'next/image';
import Link from 'next/link';
import terasImg from '../../public/image/teras.jpeg';
import tanggaImg from '../../public/image/tangga ke lanati 2.jpeg';
import musholaImg from '../../public/image/mushola.jpeg';
import depanImg from '../../public/image/depan samping.jpeg';

export default function Services() {
    return (
        <section className="services section-padding">
            <div className="container text-center">
                <span className="section-subtitle text-center">Fasilitas Utama</span>
                <h2 className="section-title text-center mb-5">Fitur Unggulan Properti</h2>
                
                <div className="service-grid">
                    <div className="service-card">
                        <Image src={terasImg} alt="Teras Nyaman" className="service-img" style={{ objectFit: 'cover' }} />
                        <div className="service-info">
                            <div className="service-icon"><i className="ph-light ph-armchair"></i></div>
                            <div className="service-text">
                                <h3>Teras Bersantai</h3>
                            </div>
                            <Link href="#" className="service-link"><i className="ph ph-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src={tanggaImg} alt="Interior Luas" className="service-img" style={{ objectFit: 'cover' }} />
                        <div className="service-info">
                            <div className="service-icon"><i className="ph-light ph-stairs"></i></div>
                            <div className="service-text">
                                <h3>Interior Luas</h3>
                            </div>
                            <Link href="#" className="service-link"><i className="ph ph-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src={musholaImg} alt="Fasilitas Mushola" className="service-img" style={{ objectFit: 'cover' }} />
                        <div className="service-info">
                            <div className="service-icon"><i className="ph-light ph-star"></i></div>
                            <div className="service-text">
                                <h3>Fasilitas Mushola</h3>
                            </div>
                            <Link href="#" className="service-link"><i className="ph ph-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-card">
                        <Image src={depanImg} alt="Fasad Modern" className="service-img" style={{ objectFit: 'cover' }} />
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
