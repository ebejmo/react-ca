import styles from './HeroSection.module.scss';
import Button from '../../Button/Button';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>This is the Heading</h1>
        <p>Discover Noroff Online Shop.</p>
        <a href="#products">
          <Button variant="primary">Shop Now</Button>
        </a>
      </div>
    </section>
  );
}
