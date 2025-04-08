import React from 'react'

const Education = () => {
  return (
        <div>
            <h1 className="text-4xl text-white">My <span className='text-2xl text-green-400 font-bold'>Education</span></h1>
            <p className='w-180 text-2xl mt-4 mb-4 text-white'>I completed my higher education in Science and am currently pursuing a (Bsc CSIt) at Tribhuvan University. With expertise in Web Development, Frontend & Backend Development, I create high-performing, user-friendly, and SEO-optimized digital solutions for businesses. 🚀</p>
            <div className="">
            <div className="overflow-x-auto mb-3">
  <table className="min-w-full border border-gray-300  hover:outline-2 outline-offset-2 outline-cyan-500">
    <thead>
      <tr className="bg-gray-100 hover:bg-red-400 text-left">
        <th className="px-4 py-2 border-b">Board</th>
        <th className="px-4 py-2 border-b">Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-50 bg-white">
        <td className="px-4 py-2 border-b">National Education Board</td>
        <td className="px-4 py-2 border-b">74</td>
      </tr>
      <tr className="hover:bg-gray-50 bg-white ">
        <td className="px-4 py-2 border-b">+2</td>
        <td className="px-4 py-2 border-b">68</td>
      </tr>
      <tr className="hover:bg-gray-50 bg-white">
        <td className="px-4 py-2 border-b">Bsc Csit</td>
        <td className="px-4 py-2 border-b">64</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
           </div>
  )
}

export default Education