import React from 'react';
import styles from './CategoryBar.module.css';
function CategoryBar(props: any) {
  const { categories, categorySelected, activeGenreID } = props;
  const { keys, values } = categories;
  const categoryPills = keys.map((category: any, index: number) => (
    <div
      className={activeGenreID === keys[index] ? styles.activeCategory : styles.categoryPill }
      onClick={() => categorySelected(values[index])}
      key={keys[index]}
    >
      {values[index]}
    </div>
  ));
  return <div className={styles.categoryPillsWrapper}>{categoryPills}</div>;
}

export default CategoryBar;
