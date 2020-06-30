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

 <style jsx>{`
            a {
              text-decoration: none;
            }
            `}
            
            </style> 

              
       
            
            </div>
    
          
    
    )
  }
  
  export default Projects