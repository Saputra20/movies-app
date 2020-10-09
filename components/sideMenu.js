import { useState } from "react";
import Modal from './modal'
import Form from './movieCreateForm'

const SideMenu = (props) => {
  const { categories } = props;

  return (
    <div>
      <Modal>
        <Form  categories={categories}/>
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
