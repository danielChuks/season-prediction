import React from 'react';
import './SeasonDisplay.css';


/**
 * The styling of this code is don with sementic ui
 * @param {this is the value props latitude passed from the parent component to the child} lat 
 * @param {we are getting the day and the month and comparing it with the latitudde to defind the season} month 
 * @returns 
 */
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const seasonConfig = {
    //here we are checking the outcome of season to make our judgement of the text to display.
    summer:{
        text: " Lets go to the beach",
        iconName: "sun massive"
    },
    winter: {
        text: "Ohh its chilly",
        iconName: "snowflake massive"
    }  
}

/**
 * 
 * @param {the lat and long in the parameters are props passed from the parent to the child} param
 * @returns this would return the value passed in props from the state updated.
 * getSeason function take two values, 1. the 'lat' which is the latitude props from the parent and the actual month. new Date().getMonth();
 */
const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    // we are assigning season to seasonConfig this would first call the function season and then return the text and IconName base on the out come of getSeason.
    const {text, iconName} = seasonConfig[season]
    return (
        <>
        <div  className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon`} />
               <div><h1>{text}</h1></div> 
                <i className={`icon-buttom-right ${iconName} icon`}/>
            </div>
        </>  
    )
}


export default SeasonDisplay; 