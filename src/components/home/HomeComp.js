import React from 'react'
import styles from './home.module.css'
import Featured from '../featured/Featured'
import CategoryList from '../categoryList/CategoryList'
import CardList from '../cardList/CardList'
import Menu from '../menu/Menu'
const HomeComp = () => {
  return (
    <div className={styles.container}>
        <Featured/>
        <CategoryList/>
            <div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
    </div>
  )
}

export default HomeComp