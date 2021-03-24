import Link from 'next/link'

const Page = ({ title, linkTo }) => (
  <div>
    <h1>{title}</h1>
    <nav>
      <Link href={linkTo}>
        <a>Navigate</a>
      </Link>
    </nav>
  </div>
)

export default Page;
