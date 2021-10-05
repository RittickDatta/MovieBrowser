import React from 'react';
import styles from './CategoryBar.module.css';
function CategoryBar(props: any) {
  const { categories, categorySelected } = props;
  const { keys, values } = categories;
  const categoryPills = keys.map((category: any, index: number) => (
    <div
      className={styles.categoryPill}
      onClick={() => categorySelected(values[index])}
    >
      {values[index]}
    </div>
  ));
  return <div className={styles.categoryPillsWrapper}>{categoryPills}</div>;
}

export default CategoryBar;
