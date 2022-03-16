import { FC } from 'react';

interface HeaderItemProps {
    title: string;
    Icon: FC<React.ComponentProps<'svg'>>;
}

const HeaderItem: FC<HeaderItemProps> = ({ title, Icon }) => {
    return (
        <div className='flex flex-col group items-center cursor-pointer w-12 sm:w-20 hover:text-white '>
            <Icon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='tracking-widest opacity-0 group-hover:opacity-100 group-hover:duration-500'>
                {title}
            </p>
        </div>
    );
};

export default HeaderItem;
