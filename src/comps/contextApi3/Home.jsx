import React from "react";
import Nav from "./Nav";

export default function Home() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    padding: ".5rem 4rem",
  };
  return (
    <>
      <Nav />
      <div style={styles}>
        <h1 style={{ color: "red", margin: "1rem" }}>Home Component</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in,
          delectus harum laboriosam asperiores et! Temporibus magnam tempore
          quas velit ullam, porro laboriosam tempora repellat quod excepturi
          quos nam praesentium error eius nobis accusantium repellendus animi
          earum reiciendis delectus aperiam. Recusandae minima qui voluptatibus
          impedit quaerat dicta, ex nam illum eius, quo explicabo dolore hic.
          Dolores quibusdam doloribus pariatur in unde reprehenderit magni
          neque, ipsam itaque provident ad tempora voluptatem consequatur
          laudantium sed accusantium, doloremque officia esse animi voluptas?
          Laborum, maiores molestiae minima quasi fugit, nesciunt qui enim
          dignissimos non pariatur mollitia rerum eos velit ab atque sunt
          similique alias.
        </p>
      </div>
    </>
  );
}
