import { DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import Link from 'next/link'

export interface MenuItem {
	id: number
	title: string
	path: string
}

interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: MenuItem[],
	hover?: string
}

export const Menu = ({items, hover='primary', className, ...props}: MenuProps): JSX.Element => {
	return (
		<ul className={cn('flex items-center', className)} {...props}>
			{items.map(i => (
				<li key={i.id} className={`cursor-pointer transition-all duration-300 hover:text-${hover} ml-[2.5rem]`}>
					<Link href={i.path}>{i.title}</Link>
				</li>
			))}
		</ul>
	)
}
