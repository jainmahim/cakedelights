import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

export default function Contact() {
const [name,setName]=useState('');
const [msg,setMsg]=useState('');

function onChange1(e){
  setName(e.target.value)
}
function onChange2(e){
  setMsg(e.target.value)
}
  return (
    <div>
     {/* <div className="container mt-24 mx-auto bg-rose-200">


<section className="text-gray-800 text-center">

  <div className="px-6 py-12 md:px-12">
    <div className="container mx-auto xl:px-32">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="z-10 md:mt-12 lg:mt-0 mb-12 lg:mb-0">
          <div
            className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
            style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}
          >
          <h2 className="text-3xl font-bold mb-12 text-rose-700">Contact us</h2>
          <form>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-rose-600 focus:outline-none"
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
          
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Send
            </button>
          </form>
          </div>
        </div>
        <div className="md:mb-12 lg:mb-0">
          <div className="z-1 relative shadow-lg rounded-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3538.046386277947!2d75.29955431498384!3d27.53001798286567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDMxJzQ4LjEiTiA3NcKwMTgnMDYuMyJF!5e0!3m2!1sen!2sin!4v1680279079553!5m2!1sen!2sin" width="600" height="500" style={{border:"0",allowFullScreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</div>  */}
<section id="contact" className="py-6 bg-rose-200 text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold text-rose-800">Get in touch</h1>
			<p className="pt-2 pb-4 text-rose-800">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center text-rose-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<Link to="https://goo.gl/maps/osW7RdCWoqq7EfrQ6"><span className='text-rose-800'>Station Road, Ranoli</span></Link>
				</p>
				<p className="flex items-center text-rose-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span  className='text-rose-800' ><Link to='https://api.whatsapp.com/send?phone=916367205027&text=Hi'>+91 6367205027</Link></span>
				</p>
				<p className="flex items-center text-rose-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span  className='text-rose-800' onClick={() => window.location = 'mailto:cakedelights821@gmail.com'}>cakedelights821@gmail.com</span>
				</p>
			</div>
		</div>
		<div noValidate="" className="text-rose-800 flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1 text-rose-800">Full name</span>
				<input onChange={onChange1} required id="name" type="text" placeholder="Mahim Jain" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:ring-rose-400 " />
			</label>
			<label className="block">
				<span className="mb-1 text-rose-800" >Email address</span>
				<input required type="email" placeholder="example@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 p-2 focus:ring-rose-400" />
			</label>
			<label className="block text-rose-800">
				<span className="mb-1">Message</span>
				<textarea onChange={onChange2} required id="msg" rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-rose-400"></textarea>
			</label>
			<Link to={`https://api.whatsapp.com/send?phone=916367205027&text=Hi%20I%20am%20${encodeURIComponent(name)}.%20${encodeURIComponent(msg)}`}><button  type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-rose-800 text-white focus:ring-rose-400 hover:ring-rose-400">Submit</button></Link>
		</div>
	</div>
</section>
    </div>
  )
}
