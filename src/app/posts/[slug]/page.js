import React from "react";
import styles from "./singleBlog.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
const SingleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        {" "}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>{" "}
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />{" "}
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>{" "}
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quam doloremque pariatur iusto cupiditate. Corrupti dignissimos atque facilis porro dolorem incidunt eaque doloremque eius nihil harum, totam quis ea aliquam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quam doloremque pariatur iusto cupiditate. Corrupti dignissimos atque facilis porro dolorem incidunt eaque doloremque eius nihil harum, totam quis ea aliquam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quam doloremque pariatur iusto cupiditate. Corrupti dignissimos atque facilis porro dolorem incidunt eaque doloremque eius nihil harum, totam quis ea aliquam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quam doloremque pariatur iusto cupiditate. Corrupti dignissimos atque facilis porro dolorem incidunt eaque doloremque eius nihil harum, totam quis ea aliquam?</p>
            </div>
            <Comments/>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlog;
