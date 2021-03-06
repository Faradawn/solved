import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


// Body: use padding to adjust Bar's position 
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
`
// Outer bar container
const BarContainer = styled.div`
  background-color: #d8d8d8;
	position: relative;
  height: 7px;
  width: 100%;
  display: flex;
  flex-direction: row;
`
// Inner color bar
const Bar = styled.div`
  background: #d8d8d8;
  box-shadow: 2px 2px 5px #d8d8d8;
  display: flex;
  align-items: left;
  justify-content: left;
  height: 100%;
  width: 0px;
  opacity: 1;
  transition: 1s ease 0.3s;
  `
  // Text Container Below
  const TextContainer = styled.div`
    position: relative;
    height: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 7px;
    font-size: 15px;
    
`
const Text = styled.div`
  width: 0px;
  min-width: 70px;
  text-align: left;
`

export default class ProgressBar extends React.Component {

  static propTypes = {
    mastered: PropTypes.number,
    familiar: PropTypes.number,
    remaining: PropTypes.number,
    bonus: PropTypes.number,
  }

  constructor(props){
    super(props)

    this.total = this.props.mastered + this.props.familiar + this.props.remaining + this.props.bonus

    this.bar = {
        bar1: {
          width: `${this.props.mastered / this.total * 100}%`,
          background: "rgb(85, 162, 30)",
        },
        bar2: {
          width: `${this.props.familiar / this.total * 100}%`,
          background: "rgb(141, 207, 84)",
        },
        bar3: {
          width: `${this.props.remaining / this.total * 100}%`,
          background: "rgb(212, 210, 210)",
        },
        bar4: {
          width: `${this.props.bonus / this.total * 100}%`,
          background: "rgb(255, 195, 0)",
        }}

        this.text = {
          text1: {
            width: `${this.props.mastered / this.total * 100}%`,
            color: "rgb(85, 162, 30)",
          },
          text2: {

            width: `${this.props.familiar / this.total * 100}%`,
            color: "rgb(141, 207, 84)",
          },
          text3: {
            width: `${this.props.remaining / this.total * 100}%`,
            color: "rgb(212, 210, 210)",
          },
          text4: {
            width: `${this.props.bonus / this.total * 100}%`,
            color: "rgb(255, 195, 0)",
          }

      }
    }

  // setbar = (percent) => {
  //   const newbar = {
  //     opacity: '1',
  //     width: `${percent}%`,
  //     background: 'black',
  //   }
  //   this.setbar({bar: newbar})
  // }


  render(){
    return (
      <Body>
        
        <BarContainer>
          <Bar style = {this.bar.bar1}/>
          <Bar style = {this.bar.bar2}/>
          <Bar style = {this.bar.bar3}/>
          <Bar style = {this.bar.bar4}/>
        </BarContainer>
        
        <TextContainer>
          <Text style = {this.text.text1}> {this.props.mastered} mastered</Text>
          <Text style = {this.text.text2}> {this.props.familiar} familiar</Text>
          <Text style = {this.text.text3}> {this.props.remaining} remaining</Text>
          {this.props.bonus > 0 && <Text style = {this.text.text4}> {this.props.bonus}  bonus!</Text>}
        </TextContainer>

      </Body>
    )
  }
  
}
