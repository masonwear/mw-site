import Link from "next/link"
import react from 'react'
import { DarkToggle } from '../components/DarkModeProvider'


function Header(props) {
    return (
      
        <div className="header">
    
          
            <Link href="/">
            <img src="/MasonLogo.svg"/>
            </Link>
            
            
    
             <div className="mode">
              <DarkToggle/>
            </div>
            
            <style jsx>
              {`
                .header {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 80px;
                  margin-bottom: 65px;
                  
                }
                
                .mode {
                  background: #ffffff;
                  width: 35px;
                  height: 35px;
                  text-align: center;
                  line-height: 38px;
                  border-radius: 50%;
                  box-shadow: 0px 0px 14px #C1B6AE;
                  cursor: pointer;
                  margin-top: 6px;
                }

                img {
                  cursor: pointer;
                }
                
                
                
    
              `}
            </style>
    
        </div>
        
    )
  }
  
  export default Header