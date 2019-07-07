import React from 'react'

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is chilly!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if ( 2 < month && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
} 

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text: seasonContent, iconName} =  seasonConfig[season]

  return (
    <div>
      <i className={`massive ${iconName} icon`} />
      <h1>{seasonContent}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay;