import { Helmet } from 'react-helmet';

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
            font-size: 26.16px;
            line-height: 30px;
            letter-spacing: -0.4px;
            opacity: 0.95;

            color: #0F171B;
            ;
          }
          
          h2 {
            font-family: ITC Souvenir Std;
            font-style: normal;
            font-weight: 500;
            font-size: 19px;
            line-height: 20px;
            letter-spacing: -0.4px;
            opacity: 0.95;

            color: #0F171B;

            

          }

          h3 {

            font-family: ITC Souvenir Std;
            font-style: italic;
            font-weight: 500;
            font-size: 17px;
            line-height: 20px;
            letter-spacing: -0.4px;

            color: #0F171B;

            



          }

          p {
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 1.4;
            color: #0F171B;
            margin-bottom: 30px;
            opacity: 0.95;
          }

          a {
            color: #EA7884;
            text-decoration: none;
            
          }

          ul {
            font-family: DM Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 1.4;
            color: #0F171B;
            
            list-style-type: none;
        list-style-position:inside;
        margin:0;
        padding:0;


          }

          li {
            color: #0F171B;
          }

          img {
            max-width: 100%;
            height: auto;
          }
        


        `}</style>

        <Helmet>
        <title>Mason Wear - Maker of Things</title>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Helmet>
      </div>
    )
    
  }
  
  export default Layout