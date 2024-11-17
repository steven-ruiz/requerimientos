import Image from "next/image";
import styles from "./css/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navbar Section */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/login">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/">Menú</Link>
        </div>
        <div className={styles.profile}>
          <Link href="/profile">Mi perfil</Link>
        </div>
      </nav>

      {/* Services Section */}
      <section className={styles.services}>
        <h2>Agendar servicios</h2>
        <div className={styles.serviceCards}>
          {["/service1.png", "/service2.png", "/service3.png"].map((img, index) => (
            <div key={index} className={styles.card}>
              <Image src={img} alt={`Service ${index + 1}`} width={250} height={150} className={styles.image} />
              <div className={styles.cardFooter}>
                <button className={styles.scheduleButton}>Agendar</button>
                <span className={styles.price}>$150</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
