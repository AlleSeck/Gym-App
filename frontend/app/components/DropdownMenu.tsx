import Link from 'next/link';

const DropdownMenu = () => {
  return (
    <ul className="absolute top-10 right-0 bg-gray-800 p-2 rounded">
      <li className="mb-2">
        <Link href="components/settings">
          <span className="text-white cursor-pointer">Paramètres</span>
        </Link>
      </li>
      <li>
        <Link href="/logout">
          <span className="text-white cursor-pointer">Déconnexion</span>
        </Link>
      </li>
    </ul>
  );
};

export default DropdownMenu;
