import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import cn from 'classnames'

interface CartIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: number
	bg?: string
	color?: string
	hover?: string
}

export const CartIcon = ({ items=0, bg = 'black', color = 'white', hover = 'primary', className, ...props }) => {
	return (
		<div className={cn('cursor-pointer relative group/cart', className)} {...props}>
			<AiOutlineShoppingCart
				className={`-mt-[.3rem] text-[2rem] transition-all duration-300 group-hover/cart:text-${hover}`}/>
			<div
				className={`flex items-center justify-center absolute -top-[.5rem] -right-[.5rem] bg-${bg} rounded-[50%] w-[1.4rem] h-[1.4rem] text-${color} text-[.9rem] transition-all duration-300 group-hover/cart:bg-${hover}`}
			>
				{items}
			</div>
		</div>
	)
}
