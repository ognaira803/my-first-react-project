import React from 'react'
import "../about/about.css"
import profile from '../gallery/image/profile-img.jpg'
import test1 from '../gallery/image/testimonials-1.jpg'
import test2 from '../gallery/image/testimonials-2.jpg'
import test3 from '../gallery/image/testimonials-3.jpg'
function About() {
  return (
    <div className='about'>
      <section className='sect__one'>
      <h1>About</h1>
      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </section>
      <section className='sect__two'>
        <div className='fist__div'><img src={profile} alt="" /></div>
        <div className='secon__div'>
            <h2>Professional Photographer from New York</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='first__li'>
                <div>
                    <li>
                       Birthday: 1 May 1995
                    </li>
                    <li>
                       Website: www.example.com
                    </li>
                    <li>
                        
                       Phone: +123 456 7890
                    </li>
                    <li>
                       City: New York, USA
                    </li>
                    </div>
                <div>
                    <li>
                        Age:30
                    </li>
                    <li>
                    Degree: Master
                    </li>
                    <li>
                        
                       PhEmailone: email@example.com
                    </li>
                    <li>
                        
                       Freelance: Available
                    </li>
                </div>
            </div>
            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                <p>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.</p>
        </div>
      </section>
      <section className='sect__three'>
         <h3>TESTIMONIALS</h3>
         <h2>What they are saying</h2>
         <div className='div__all'>
            <div>
               <p>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim</p>
               <img src={test2} alt="" />
                <div className='div__sub'>
                <h1>Michael Justice</h1>
               <h4>Designer</h4>
                </div>
            </div>

            <div>
               <p>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim</p>
               <img src={test1} alt="" />
               <div className='div__sub'>
               <h1>Emmanuel Chukwunonso</h1>
               <h4>Ceo & Founder</h4>
               </div>
            </div>

            <div>
               <p>Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim</p>
               <img src={test3} alt="" />
                <div className='div__sub'>
                <h1>John Buchi</h1>
               <h4>Designer</h4>
                </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default About
