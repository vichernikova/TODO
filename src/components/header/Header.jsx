import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<img className={styles.logo} src={logo} alt="logo" />
			<h1>TODO</h1>
		</div>
	)
  }
  
  export default Header;
