import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Reliable, efficient delivery</h2>
			<h2 className={styles['title-bold']}>Powered by Technology</h2>
			<p className={styles.text}>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</p>
		</div>
	);
};

export default Header;
