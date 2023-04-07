import { useState } from "react";

function Input() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearClick = () => {
    setSearchTerm("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка поискового запроса
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          {searchTerm && (
            <button type="button" onClick={handleClearClick}>
              <i className="fa fa-times"></i>
            </button>
          )}
        </div>
        <button type="submit">
          <i className={searchTerm ? "fa fa-search active" : "fa fa-search"}></i>
        </button>
      </form>
    </div>
  );
}

export default Input;
