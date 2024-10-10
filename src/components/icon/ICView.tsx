import { SVGProps } from 'react';

export const ViewIcon = ({ fill = 'none', width = '24', height = '24', className }: SVGProps<SVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={className}
             width={width}
             height={height}
              viewBox="0 0 24 24" fill={fill}
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
                d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path
                d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
        </svg>

    );
};
