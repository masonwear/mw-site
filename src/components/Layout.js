function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          
          body {
            background-color: #F4F0ED;
            padding: 0;
            margin: 0;
          }
          
          h1 {
            font-family: ITC Souvenir Std;
            font-style: normal;
            font-weight: 500;
            font-size: 25.16px;
            line-height: 30px;
            letter-spacing: -0.4px;

            color: #0F171B;
            opacity: 0.8;
          }
          
          h2 {
            font-family: ITC Souvenir Std;
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            letter-spacing: -0.4px;

            color: #0F171B;

            opacity: 0.8;

          }

          p {
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 192.7%;
            color: #0F171B;
            opacity: 0.8;
            margin-bottom: 30px;
          }

          a {
            color: #EA7884;
            text-decoration: none;
            
          }

          ul {
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 192.7%;
            color: #0F171B;
            opacity: 0.8;
            list-style-type: none;
        list-style-position:inside;
        margin:0;
        padding:0;


          }

          li {
            color: #0F171B;
          }

      


        `}</style>
      </div>
    )
  }
  
  export default Layout