import Link from "next/link"



export default function Home() {
  return (<><h1 className="text-3xl my-2">Robert Renn</h1>
    <p>Like most web developers, I'm experienced using the following...</p>
    <ul className="m-6 font-bold">
      <li>- HTML, CSS, JavaScript</li>
      <li>- React</li>
      <li>- Implementing React through the Next.js framework</li>
    </ul>
    <p>I starting learning web development during the pandemic.  I had experience with no-code application development, but decided to pursue the fundamental technology of the web.</p>
    <p className="my-4 font-bold">Links:</p>
    <ul className="flex w-1/2 justify-around border">
      <li className="hover:font-bold"><Link href="https://github.com/rrenn45">GitHub</Link></li>
      <li className="hover:font-bold"><Link href="https://www.linkedin.com/in/robert-renn-eit/">LinkedIn</Link></li>
      
    </ul>
  </>)
}
