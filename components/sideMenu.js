import { useState  } from "react";
import { useRouter } from 'next/router'
import Modal from "./modal";
import Form from "./movieCreateForm";
import { createMovie } from "../actions";

const SideMenu = (props) => {
  const router = useRouter();
  const { categories } = props;
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      modal.closeModal()
      router.push("/")
    });
  };

  return (
    <div>
      <Modal ref={ele => modal = ele} hasSubmit={false}>
        <Form categories={categories} handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map((category, index) => (
          <a key={category.id} href="#" className="list-group-item">
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
