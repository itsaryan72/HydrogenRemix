const people = [
    
    {
        name: 'Aryan Verma',
        role: 'Junior Developer',
        imageUrl: 'https://aryan-verma.vercel.app/assets/aryan-B8KW49kp.png'
    },
    {
        name: 'Simarjeet Singh',
        role: 'Senior Shopify Developer',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRxAGF1ZVhSQ0CrCIkvXStRuRohdp0GFVNA&s'
    }
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 flex">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 flex-row">
            The people who have built this incredible software are truly worth recognizing. Bellavita Cloud has now firmly established itself as a unicorn company, thanks to its innovative solutions and dedicated team. With continuous growth and cutting-edge technology, it is redefining the standards of cloud services across the industry.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }