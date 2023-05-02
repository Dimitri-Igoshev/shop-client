import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import cn from 'classnames'
import { CartIcon, Input, Menu, MenuItem } from '@/components/ui'

interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const menuItems: MenuItem[] = [
	{id: 1, title: 'REGISTER', path: '/'},
	{id: 2, title: 'SIGN IN', path: '/'},
]

export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
	const [search, setSearch] = useState('')

	return (
		<div
			className={cn('h-[6rem]', className)}
			{...props}
		>
			<div className="text-2xl py-[1rem] px-[2rem] flex justify-between items-center">
				<div className="flex flex-1 items-center">
					<span className="text-[1.5rem] cursor-pointer transition-all duration-300 hover:text-primary">
						EN
					</span>
					<Input
						value={search}
						onInput={(value) => setSearch(value)}
						className="ml-[2.5rem]"
					>
						<AiOutlineSearch className="text-gray"/>
					</Input>
				</div>
				<div className="flex flex-1 justify-center">
					<div className="font-bold text-[3rem]">IGOSHEV SHOP</div>
				</div>
				<div className="flex flex-1 justify-end items-center">
					<Menu items={menuItems}/>
					<CartIcon className="ml-[2.5rem]" items={3} />
				</div>
			</div>
		</div>
	)
}
