
function Email(props) {
    return (
      <div className="email">
 
        <h1>Let's stay in touch</h1>
        <p>I won't spam you ever, pinky promise.</p>


        <form action="https://MasonWear.us9.list-manage.com/subscribe/post" method="POST"/>
          <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Email Address"/>
          <input type="hidden" name="u" value="001b163a1a37d1a984f6cb864"/>
          <input type="hidden" name="id" value="63ed89f667"/>
          <input type="submit" value="Submit"/>

        <style jsx>{`
                    
        .email {
          max-width: 800px;
          margin: 0 auto;
        }
        
        input[type=email] {
          background: #F4F0ED;
          border-radius: 6px;
          border: 0;
          width: 404px;
          height: 46px;
        }
        
        input[type=button], input[type=submit], input[type=reset] {
          font-family: DM Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          background: #EA7884;
          color: #F4F0ED;
          margin: 20px;
          border-radius: 6px;
          border: 0;
          width: 115px;
          height: 46px
        }
        
        `}
        
        </style>

      </div>

    
    )
  }
  
  export default Email