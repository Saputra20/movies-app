import { useState } from "react";

const movieCreateForm = (props) => {
  const { categories } = props;
  const [form, setForm] = useState({
    name: "Some movie",
    description: "Some movies",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  return (
    <div>
      {JSON.stringify(form)}
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={form.name}
            name="name"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Lord of the Rings"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            value={form.description}
            name="description"
            type="text"
            className="form-control"
            id="description"
            placeholder="Somewhere in Middle-earth..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Rating</label>
          <input
            onChange={handleChange}
            value={form.rating}
            name="rating"
            type="number"
            max="5"
            min="0"
            className="form-control"
            id="rating"
            placeholder="3"
          />
          <small id="emailHelp" className="form-text text-muted">
            Max: 5, Min: 0{" "}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            onChange={handleChange}
            value={form.image}
            name="image"
            type="text"
            className="form-control"
            id="image"
            placeholder="http://....."
          />
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover</label>
          <input
            onChange={handleChange}
            value={form.cover}
            name="cover"
            type="text"
            className="form-control"
            id="cover"
            placeholder="http://......"
          />
        </div>
        <div className="form-group">
          <label htmlFor="longDesc">Long Description</label>
          <textarea
            onChange={handleChange}
            value={form.longDesc}
            name="longDesc"
            className="form-control"
            id="longDesc"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            onChange={handleGenreChange}
            value={form.genre}
            name="genre"
            multiple
            className="form-control"
            id="genre"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
            {/* <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option> */}
          </select>
        </div>
      </form>
    </div>
  );
};

export default movieCreateForm;