import './App.css'
import sonuImage from './assets/sonu.jpg'
import Skill from './Components/Skill'
function App() {
  let arr=[{skill:"Java"},{skill:"Spring-Boot"},{skill:"Unity"},{skill:"DevOps"}]
  return (
    <>
        <div className='profile'>
          <div  className='image' >
            <img   src={sonuImage} alt="Sonu Image" />
            </div>
            <div className='name'>
              Sonu Kumar
            </div>
            <p id='profile-description'>
              Hii, I am Sonu Kumar, SDE Engineer at Virtualize Tecnologies 
            </p>
            <div className='skills'>
            {arr.map(skill=><Skill skill={skill.skill}/>)}
            </div>
        </div>
    </>
  )
}

export default App
