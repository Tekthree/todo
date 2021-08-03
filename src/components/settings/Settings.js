import React, {useContext} from "react";
import {SettingsContext} from "../../context/Settings.js"

function Settings() {
  const settings = useContext(SettingsContext);

  console.log(settings)
  return (
    <div>
      <form>
        <label>
          Display Completed: 
          <input
            name="isDisplayed"
            type="checkbox"
            onChange={(e)=>settings.handleDisplayComplete(e.target.checked)}
          />
        </label>
        <br />
        <label>
          Number of Todos to display: 
          <input
            name="numberOfGuests"
            type="number"
            onInput={(e)=>settings.handleDisplayNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          sorting options: 
        <select
          onChange={(e)=> settings.setSortType(e.target.value)}
        >
          <option value="assignee">Assignee</option>
          <option value="difficulty">Difficulty</option>
          <option selected value="completed">
            Completed
          </option>
          <option value="pending">Pending</option>
        </select>

        </label>
      </form>
    </div>
  );
}

export default Settings;
