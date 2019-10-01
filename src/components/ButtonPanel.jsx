import React from 'react'; // eslint-disable-line no-unused-vars
import './ButtonPanel.css'
import Button from './Button' // eslint-disable-line no-unused-vars

const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '/']
  const group2 = ['7', '8', '9', 'x']
  const group3 = ['4', '5', '6', '-']
  const group4 = ['1', '2', '3', '+']
  const group5 = ['0', '.', '=']

  const buttonGroups = (group) => group.map((button) => <Button key={button} value={button} />)


  return (
    <div className='buttonPanel'>
      <div>
        {buttonGroups(group1)}
      </div>
      <div>
        {buttonGroups(group2)}
      </div>
      <div>
        {buttonGroups(group3)}
      </div>
      <div>
        {buttonGroups(group4)}
      </div>
      <div>
        {buttonGroups(group5)}
      </div>
    </div>
  );
}

export default ButtonPanel;