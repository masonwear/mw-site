function Header(props) {
    return (
      
        <div className="header">
    
          <div className="logo">
            <img src="/MasonLogo.svg"></img>
            </div>
    
            <div className="mode">
              <img src="/moon.svg"></img>
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
                
    
              `}
            </style>
    
        </div>
        
    )
  }
  
  export default Header