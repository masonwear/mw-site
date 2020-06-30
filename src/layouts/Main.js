import Layout from '../components/Layout'
import Header from '../components/Header'
import Email from '../components/Email'

export default ({ children, title = 'This is the default title' }) => (
    <Layout>
      <Header> </Header>
        <title>{ title }</title>
     
      <main>
        { children }
      </main>
  
     <Email></Email>
    </Layout>
  )