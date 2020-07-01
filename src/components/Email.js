
function Email(props) {
    return (
      <div className="email">
 
        <h3>Let's stay in touch</h3>
        <p>If you want to stay up to date on new posts, add your email below.</p>

        <form action="https://MasonWear.us9.list-manage.com/subscribe/post" method="POST" target="_blank">
          <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Email Address"/>
          <input type="hidden" name="u" value="001b163a1a37d1a984f6cb864"/>
          <input type="hidden" name="id" value="63ed89f667"/>
          <input type="submit" value="Submit"/>
        </form>

        <style jsx>{`

        .email {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .email h3 {
          font-weight: 500;
          font-size: 25px;
          line-height: 30px;
          letter-spacing: -0.4px;
          color: #0F171B;
          opacity: 0.8;
          margin: 0 0 12px 0;
        }
        
        .email p {
          color: #ABA6A2;
          margin-bottom: 20px;
        }
        
        form {
          display: flex; 
        }
        
        input[type=email] {
          background: #F4F0ED;
          border-radius: 6px;
          border: 0;
          padding: 14px 20px 14px 20px;
          flex-grow: 1;
          margin-right: 20px;
          
          -webkit-transition: all 0.2s ease;/* Safari 3.2+, Chrome */
          -moz-transition: all 0.2s ease;/* Firefox 4-15 */
          -o-transition: all 0.2s ease;/* Opera 10.5-12.00 */
          transition: all 0.2s ease;/* Firefox 16+, Opera 12.50+ */
        }
        
        input[type="email"]:focus {
          background: #dbd8d5;
          outline: none;
        }
        
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          color: #3F4549;
          opacity: .3;
        }
        
        ::-moz-placeholder { /* Firefox 19+ */
          color: #3F4549;
          opacity: .3;
        }
        
        :-ms-input-placeholder { /* IE 10+ */
          color: #3F4549;
          opacity: .3;
        }
        
        :-moz-placeholder { /* Firefox 18- */
          color: #3F4549;
          opacity: .3;
        }
        
        input[type=button], input[type=submit], input[type=reset] {
          font-family: DM Sans;
          font-style: normal;
          font-size: 15px;
          line-height: 1.6;
          text-align: center;
          background: #EA7884;
          color: #F4F0ED;
          border-radius: 6px;
          border: 0;
          cursor: pointer;
          padding: 12px 25px;
          
          -webkit-transition: all 0.2s ease;/* Safari 3.2+, Chrome */
          -moz-transition: all 0.2s ease;/* Firefox 4-15 */
          -o-transition: all 0.2s ease;/* Opera 10.5-12.00 */
          transition: all 0.2s ease;/* Firefox 16+, Opera 12.50+ */
        }
        
        input[type=submit]:hover {
          background: #d16b75;
        }
        
        `}
        
        </style>

      </div>

    
    )
  }
  
  export default Email