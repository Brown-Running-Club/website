import React from 'react';
import NavigationBar from '../components/NavigationBar';
import PageBody from '../components/PageBody';

export default class ContactPage extends React.Component {
  render() {
    return (
      <>
        <NavigationBar />
        <PageBody>
            <div>
        <iframe title="contact" src="https://docs.google.com/forms/d/e/1FAIpQLSfZwHmQDJBEbp__naoK5t5Ua7ql2xlXOBj_f7rfokcZW0H5WA/viewform?embedded=true" width="640" height="592">Loading…</iframe>
        </div>
          </PageBody>
      </>
    )
  }
}