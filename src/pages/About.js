function About() {
    return (
      <>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          React Js course for learning basics of states , context api and third party api integration search ...
          <a href='https://github.com/Ali-Raza-400/github-finder-app'>
            {' '}
            Found Repo
          </a>{' '}
          Learner Name: Ali Raza
          <strong>
            <a href='https://traversymedia.com'> Brad Traversy</a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Layout By:
          <a className='text-white' href='https://twitter.com/hassibmoddasser'>
            Ali Raza
          </a>
        </p>
      </>
    )
  }
  
  export default About