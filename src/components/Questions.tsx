import React from 'react'

type Props = {
  question: string;
  answers: string[];
  callback: any;
  inputAnswer: any;
  questionNr: number;
  totalNr: number;
}

const Questions: React.FC<Props> = ({ question, answers, callback, inputAnswer, questionNr, totalNr }) => {
  return (
    <div>
      <p className='number'>
        Quiz Progress: {questionNr} / {totalNr}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} /> /* comment */
      <div>
        {answers.map(answer => (
          <button disabled={inputAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        ))}
      </div>

    </div>
  )
}


export default Questions