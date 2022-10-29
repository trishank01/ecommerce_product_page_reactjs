import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EmptyView from "../components/common/EmptyView";
import FilterPanel from "../components/home/FilterPanel/FilterPanel";
import List from "../components/home/List/List";
import SearchBar from "../components/home/SearchBar/SearchBar";
import { dataList } from "../constants/constants";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [ListItem, setListItem] = useState(dataList);
  const [ResultFound , setResultFound] = useState(false)
  const [SearchInput, setSearchInput] = useState("");
  const [cusines, setCusines] = useState([
    { id: 1, checked: false, label: "american" },
    { id: 2, checked: false, label: "chinese" },
    { id: 3, checked: false, label: "italian" },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cusines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCusines(changeCheckedCuisines);
  };

  const applyFilters = () => {
    let updatedList = dataList;
    //Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //Catefory filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    //cusines filter
    const cuisineChecked = cusines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisineChecked.includes(item.cuisine)
      );
    }

    //price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );


    setListItem(updatedList);


    !updatedList.length ? setResultFound(false) : setResultFound(true)
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cusines , selectedPrice]);

  const handleChangePrice = (event, value) => setSelectedPrice(value);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    const SearchFilter = dataList.filter((item) =>
      item.title.includes(event.target.value)
    );
    setListItem(SearchFilter);
  };

  console.log(dataList);
  console.log(SearchInput);
  return (
    <div className="home">
      <SearchBar changeInput={handleSearchChange} value={SearchInput} />
      <div className="home_panelList_wrap">
        <div className="home_panel_wrap">
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cusines={cusines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
        </div>
        <div className="home_list_wrap">
          {ResultFound ? <List list={ListItem} /> : <EmptyView/>}
        
        </div>
      </div>

      {/* <EmptyView /> */}
    </div>
  );
};

export default Home;
