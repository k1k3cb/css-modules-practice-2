import styles from './CardGrid.module.css';

const CardGrid = ({ children }) => {
	return <main className={styles.grid}>{children}</main>;
};

export default CardGrid;
