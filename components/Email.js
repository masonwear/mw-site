
function Email(props) {
    return (
        <div className="email">
 
 <div>
 <h1>Let's stay in touch</h1>
<p>I won't spam you ever, pinky promise.</p>
</div>

<div>
    <form action="https://MasonWear.us9.list-manage.com/subscribe/post" method="POST"/>
      <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Email Address"/>
      <input type="hidden" name="u" value="001b163a1a37d1a984f6cb864"/>
      <input type="hidden" name="id" value="63ed89f667"/>
      <input type="submit" value="Submit"/> 
    </div>
    

<style jsx>{`
            
            
.email {
  
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 337px;
  background: #FFFFFF;
  

  
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

placeholder {
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #3F4549;

  opacity: 0.3;
}



h1 {
  
  height: 25px;
 


  font-family: ITC Souvenir Std;
  font-style: normal;
  font-weight: 500;
  font-size: 25.16px;
  line-height: 30px;
  letter-spacing: -0.4px;
  color: #0F171B;
  opacity: 0.8;
}

p {
  
  height: 49px;
  


  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 192.7%;

  /* or 27px */

  color: #ABA6A2;

  opacity: 0.8;
}

`}

</style>  
</div>
          
    
    )
  }
  
  export default Email