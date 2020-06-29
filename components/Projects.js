import Link from 'next/link'

function Projects(props) {
    return (
        <div className="projects">
 <h2>My Projects</h2>
 <ul>
<li><Link href="/advisorstory">AdvisorStory</Link> &rarr;</li>
<li><Link href="/starwarsloot">Star Wars Loot</Link> &rarr;</li>
<li><Link href="/primer">Primer Co</Link> &rarr;</li>
<li><Link href="/hyperion">Hyperion Trading Co</Link> &rarr;</li>



 </ul>

{/* <style jsx>{`
            .projects {
              position: absolute;
              height: 14px;
              left: 26%;
              right: 32%;
              top: calc(50% - 14px/2 - 184.5px);
            `}
            
            </style> */}

              
       
            
            </div>
    
          
    
    )
  }
  
  export default Projects