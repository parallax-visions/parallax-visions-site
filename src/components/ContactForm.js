import React from 'react'

export default function ContactForm() {
  return (
    <div>
      <p id="contact">Do you have a project that could use a creative eye? Let's get in touch. We'd love to hear from you.</p>

      <form
        action="https://formspree.io/f/mledvwqw"
        method="POST"
        style={{display: 'flex', flexDirection: 'column'}}
      >
        <label>
          Name
        </label>
        <input style={{backgroundColor: '#0000', color: '#fff', paddingLeft: 5, height: 32, fontSize: 20, marginBottom: 10, borderStyle: 'solid', borderWidth: 0, borderBottomWidth: 2}} type="text" name="name" />
        <label>
          Email
        </label>
          <input style={{paddingLeft: 5, height: 32, fontSize: 20, marginBottom: 10, borderStyle: 'solid', borderWidth: 0, borderBottomWidth: 2, backgroundColor: '#0000', color: '#fff'}} type="text" name="_replyto" />
        <label>
          Message
        </label>
          <textarea style={{padding: 5, fontSize: 20, height: 180, marginBottom: 10,  borderStyle: 'solid', borderWidth: 0, borderBottomWidth: 2, backgroundColor: '#0000', color: '#fff'}} name="message"></textarea>
        <button style={{fontSize: 20, padding: 10, backgroundColor: '#70CDDD'}} type="submit">Send</button>
      </form>
    </div>
  )
}
