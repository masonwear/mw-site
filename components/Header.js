function Header(props) {
    return (
        <div className="header">
    
        <div className="logo">
            <img src="/MasonLogo.svg"></img>
            {/* <style jsx>{`
            .logo {
            position: absolute;
            left: 26%;
            right: 69.65%;
            top: 5.62%;
            bottom: 91.17%;} 
            `}
            
            </style> */}
            </div>
    
            <div className="mode">
              <img src="/Dark Mode.svg"></img>
              {/* <style jsx>{`
              .mode {
                position: absolute;
                width: 36px;
                height: 36px;
                left: 613px;
                top: 84px;
              `}
              
              </style> */}
              </div>
              
    
    
              </div>
    )
  }
  
  export default Header