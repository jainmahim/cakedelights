import React from 'react';
import cake1 from '../images/cake(1).png'
import cake2 from '../images/cake(2).png'
import cake3 from '../images/cake(3).png'
import cake4 from '../images/cake(4).png'
import cake5 from '../images/cake(5).png'
import cake6 from '../images/cake(6).png'
import cake7 from '../images/cake(7).png'
import cake8 from '../images/cake(8).png'
import cake9 from '../images/cake(9).png'
import cake10 from '../images/cake(10).png'
import cake11 from '../images/cake(11).png'
import cake12 from '../images/cake(12).png'
import cake13 from '../images/cake(13).png'

export default function Gallery() {
  return (
    
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 containers m-auto p-20">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake1} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake2} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake4} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake5} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake6} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake7} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake8} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake9} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake10} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake11} alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src={cake12} alt=""/>
        </div>
    </div>
</div>

  )
}
