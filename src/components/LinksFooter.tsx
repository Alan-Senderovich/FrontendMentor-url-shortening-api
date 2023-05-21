import Link from "next/link";

type Link = {
    id: number;
    text: string;
    href: string;
  };
  
  type Props = {
    item: {
      id: number;
      title: string;
      links: Link[];
    };
  };



const LinksFooter = ({item : { title, links}}: Props) => {

    return (
        <div>
            <h5 className="text-lg font-bold pb-5 pt-8 md:pt-0">{title}</h5>
            <ul className="flex flex-col gap-3">
                {links && links.map((link: Link) => (
                    <li key={link.id} className="text-customGray text-[1rem] hover:text-customCyan duration-150">
                        <Link href={link.href}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LinksFooter