// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import SearchIcon from '../../Icons/SearchIcon/SearchIcon';
// import MenuIcon from '../../Icons/MenuIcon/MenuIcon';
// import headerStyles from './Header.module.scss';
// import styles from './Navigation.module.scss';

// function HeaderMenu() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchValue, setSearchValue] = useState('');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   function handleToggleSearch() {
//     setIsSearchOpen((prev) => !prev);
//   }

//   function handleToggleMobileMenu() {
//     setIsMobileMenuOpen((prev) => !prev);
//   }

//   function handleSearchSubmit(e) {
//     e.preventDefault();
//   }

//   function handleSearchChange(e) {
//     setSearchValue(e.target.value);
//   }

//   return (
//     <>
//       <nav className={headerStyles.headerInner}>
//         <div className={styles.leftSection}>
//           <SearchIcon onClick={handleToggleSearch} />
//           <form
//             onSubmit={handleSearchSubmit}
//             className={`${styles.searchForm} ${isSearchOpen ? styles.open : ''}`}
//           >
//             <input
//               type="text"
//               value={searchValue}
//               onChange={handleSearchChange}
//               placeholder="Search products"
//               className={styles.searchInput}
//             />
//           </form>
//         </div>

//         <div className={styles.rightSection}>
//           <Link to="/contact" className={styles.contactLink}>
//             Contact
//           </Link>

//           <div className={styles.hamburgerButton}>
//             <MenuIcon
//               onClick={handleToggleMobileMenu}
//               isOpen={isMobileMenuOpen}
//             />
//           </div>
//         </div>
//       </nav>
//       {isMobileMenuOpen && (
//         <div className={styles.mobileMenu}>
//           <Link to="/contact" className={styles.mobileMenuLink}>
//             Contact
//           </Link>
//         </div>
//       )}
//     </>
//   );
// }

// export default HeaderMenu;
