import React from "react";
import "./SearchCityForm.css";

const SearchCityForm = props => {
    return (<form className="searchForm" onSubmit={props.onSubmitCityForm} autocomplete="off">
        <label for="inp" className="inp">
            <input type="text" value={props.city} id="inp" placeholder="&nbsp;" onChange={props.handleInputChange} />
            <span className="label">Search city</span>
            <span className="border"></span>
        </label>
        <input type="submit" value="Search" />
    </form>)
}

export default SearchCityForm;