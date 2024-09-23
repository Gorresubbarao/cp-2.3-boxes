const Box = props => {
  //  Write your code here.
  const {className, boxText} = props
  // const classNamecontainer = {`box-container ${className}`}
  return (
    <div className={`box-container ${className}`}>
      <p className='text'>{boxText}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='boxes-bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box className='small-bg-color' boxText='Small' />
      <Box className='medium-bg-color' boxText='Medium' />
      <Box className='large-bg-color' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
