import './Prompt.css'

const Prompt = ({ message, show }) => {
  return (
    <>
      {show ? <p className='prompt_message'>{message} Has been copied to your clipboard</p> : ''}
    </>
  );
};

export default Prompt;
