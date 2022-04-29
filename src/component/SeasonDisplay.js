import React from 'react';


/**
 * 
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



/**
 * 
 * @param {the lat and long in the parameters are props passed from the parent to the child} param
 * @returns this would return the value passed in props from the state updated.
 * getSeason function take two values, 1. the 'lat' which is the latitude props from the parent and the actual month. new Date().getMonth();
 */
const SeasonDisplay = ({ lat, long }) => {
    const season = getSeason(lat, new Date().getMonth());
    //here we are checking the outcome of season to make our judgement of the text to display.
    const text = season === 'winter' ? 'Wow it chill here' : 'lets head to the beach';
    const icon = season === 'winter' ? 'snowflake': 'sun';
    return (
        <>
        <div>
            <i className={`${icon} icon`} />
                <h1>{text}</h1>
                <i className={`${icon} icon`}/>
            </div>
        </>  
    )
}


export default SeasonDisplay; 