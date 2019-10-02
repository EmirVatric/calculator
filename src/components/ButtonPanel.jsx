import React from 'react'; // eslint-disable-line no-unused-vars
import Button from './Button' // eslint-disable-line no-unused-vars

const ButtonPanel = (props) => {
  const group1 = ['AC', '+/-', '%', '/']
  const group2 = ['7', '8', '9', 'x']
  const group3 = ['4', '5', '6', '-']
  const group4 = ['1', '2', '3', '+']
  const group5 = ['0', '.', '=']

  const buttonGroups = (group) => group.map((button) =>
    (button === '0' ? <Button key={button} name={button} color='lightGray' width={true} clickHandler={props.clickHandler} />
      : (button === group[group.length - 1] ? (props.operation === button
        ? <Button key={button} name={button} width={false} clickHandler={props.clickHandler} />
        : <Button key={button} name={button} width={false} clickHandler={props.clickHandler} />)
        : <Button key={button} name={button} color='lightGray' width={false} clickHandler={props.clickHandler} />))

  )


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