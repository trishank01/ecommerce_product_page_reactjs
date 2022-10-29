import React from "react";
import FilterListToggle from "../../common/FilterListToggle/FilterListToggle";
import { categoryList , ratingList  } from "../../../constants/constants";
import CheckBoxProton from "../../common/CheckBoxProton/CheckBoxProton";
import "./styles.css";
import SliderProton from "../../common/SliderProton/SliderProton";

const FilterPanel = ({ selectedCategory, selectToggle , selectedRating , selectRating  , cusines , changeChecked , selectedPrice  , changedPrice}) => {

  return (
    <div>
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      <div className="input-group">
      <p className="label">Cuisine</p>
         {cusines.map(cusine => <CheckBoxProton
           key={cusine.id}
           cusine={cusine}
           changeChecked={changeChecked}
         />)}
      </div>
      <div className="input-group">
      <p className="label-range">Range</p>
      <SliderProton value={selectedPrice} changePrice={changedPrice}/>
      </div>
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
