import React, { Component } from 'react';
import {AvailableCards} from '../../components/AvailableCards/AvailableCards';
import {SelectedCards} from '../../components/SelectedCards/SelectedCards';

export default class DeckBuilder extends Component {
  
  // THIS WILL BE A SMART COMPONENT THAT DISPLAYS THE
  // CLASS IMAGE AND INFORMATION in a middle column.
  // 
  // WILL ALSO RENDER 'AVAILABLE CARDS' COMPONENT AND
  // 'SELECTED CARDS COMPONENT

  
  render() {
    return (
      <div>       
        <AvailableCards/>
        Class image and information go here. But vertical columns.
        Like the wireframes. Ya know?
        <SelectedCards/>
      </div>
    )
  }
};
