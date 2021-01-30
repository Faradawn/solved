import React from 'react'
import ExampleSentences from './ExampleSentences.js'

export default class WordDisplay extends React.Component {
  render() {
    return (
      <ExampleSentences 
          word={{pinyin:'xue sheng', chinese:'学生', definition: 'student'}}
          pinyin={'/wo shi yi ming xue sheng/'}
          chinese={'学生是一名学生。'} 
          translation={'I am a student.'}
      />
    )
  }
}