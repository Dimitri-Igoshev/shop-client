import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

interface ItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	value: string
	onInput: (value: any) => void
	placeholder?: string
	children: ReactNode
}

export const Input = ({ value, placeholder, onInput, children, className, ...props }: ItemProps): JSX.Element => {
	return (
		<div className={cn('border border-light-gray rounded flex items-center p-[.5rem]', className)} {...props}>
			<input className="border-none outline-none" type="text" value={value} onInput={e => onInput(e.target.value)}/>
			{children}
		</div>
	)
}
