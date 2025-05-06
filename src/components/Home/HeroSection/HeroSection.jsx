import styles from './HeroSection.module.scss';
import Button from '../../Button/Button';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>This is the Heading</h1>
        <p>Discover Noroff Online Shop</p>
        <Button href="#products" variant="primary" size="small" fullWidth>
          Shop Now
        </Button>
      </div>
    </section>
  );
}
