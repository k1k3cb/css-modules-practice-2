import styles from './Card.module.css';

const Card = ({ title, color, text, image,cardStyle }) => {
	
	return (
		<div className={`${styles.container} ${styles[cardStyle]} ${styles[`container--${color}`]}`}>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
			</div>
			<div className={styles.image}>
				<img src={image} alt='' />
			</div>
		</div>
	);
};

export default Card;
