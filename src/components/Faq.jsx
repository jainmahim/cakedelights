import React from 'react'

export default function Faq() {
  return (
    <div>
      <section id="faq" className="bg-rose-200 text-rose-800 mt-24">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
	
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-rose-800">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-rose-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer ">How can I purchase?</summary>
				<div className="px-4 pb-4">
					<p>If you click on buy now button for any cake, it will redirect you to what's app with the name of the cake you want to purchase, send the message and we will get back to you.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer ">How can I make payment?</summary>
				<div className="px-4 pb-4">
					<p>You should first confirm the order then you can pay online through UPI on the given mobile number or QR code OR you can pay on delivery.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer ">Is home delivery free?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>Yes, home delivery is free within the radius of 4km.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer ">How can I contact you?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>You can contact us via Phone, What's App, Instagram, Gmail or via Website.</p>
				</div>
			</details>
		</div>
	</div>
</section>
    </div>
  )
}
