import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class App extends Component {
  render() {
    return (
       
        <Mailchimp
        action='https://MasonWear.us9.list-manage.com/subscribe/post?u=001b163a1a37d1a984f6cb864&amp;id=63ed89f667'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}

        className = 'mailchimp'

        />
    );
  


}


  
}

<style jsx>{`
            .mailchimp {
              
                background-color: lightblue;
            `}
            
            </style>
 
export default App;