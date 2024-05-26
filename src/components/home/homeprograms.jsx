import React from 'react'

const Homeprograms = () => {
  return (
    <div className=" min-h-screen pt-0 mt-0 bg-orange-100">
      <h1 className="text-center text-4xl font-semibold pb-8">PROGRAMME</h1><br />
      <div className='flex justify-center gap-10 pl-24 pr-24'>
        <div className="w-1/2 h-auto rounded-lg border-2 border-navBrown shadow-xl flex flex-col items-center justify-center">
          <h2 className='text-2xl p-5 '>EDUCATION PROGRAMME- MUSKAAN</h2>
          <p className='p-4'>
            Muskaan is the center situated in Hauz Khas Village. Various Projects and activities are organized through Muskaan aimed at improving the living conditions of the residents of the slums of Hauz Khas Village with special focus on women and children: <br /><br />
            <ul className='pl-5  list-disc'>
              <li>Afternoon school for the underprivileged girls of ages 5-15.</li>
              <li>Providing nutritional meals, books and notebooks, stationery, clothes and shoes for both summer and winter to the girls attending the afternoon school.</li>
              <li>Classes on English speaking, health and hygiene, personality development, etiquette and proper behaviour etc. for the girls.</li>
              <li>Tailoring classes for older girls and mothers.</li>
              <li>Classes on balanced diet and cooking of nutritional meals.</li>
              <li>Computer classes for girls.</li>
              <li>Art and Craft classes for the girls from time to time.</li>
            </ul>

          </p>
        </div>
        <div className="w-1/2 h-auto rounded-lg border-2 border-navBrown shadow-xl flex flex-col items-center justify-center">
          <h2 className='text-2xl p-5'>HEALTH PROGRAMME- FAMILY HEALTH CARE (FHC)</h2>
          <p className='p-4'>
          FHC aims at providing medical care to the slum-dwellers of Delhi- mainly in Hauz Khas Village by conducting the following activities: <br /><br />
            <ul className='pl-5  list-disc'>
              <li>Regular Medical Clinics and Dental Examination for check-up of the girls attending Muskaan.</li>
              <li>Medical and Vaccination camps in Hauz Khas Village and Mayur Vihar Yamuna Khadar aimed at prevention of infectious diseases.</li>
              <li>Distribution of rice and pulses to the underprivileged people of such areas.</li>
              <li>Organizing clothes collection drives for distribution to the needy.</li>
              <li>Raising awareness about cleanliness and proper sanitation for prevention of diseases.</li>
            </ul>

          </p>
        </div>
      </div>
    </div>
  )
}

export default Homeprograms
